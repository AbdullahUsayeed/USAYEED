import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.PORT || 4000);
const UPLOAD_DIR = path.resolve(process.env.UPLOAD_DIR || path.join(__dirname, "uploads"));
const DATA_FILE = path.resolve(process.env.DATA_FILE || path.join(__dirname, "submissions.json"));
const MAX_CV_BYTES = Number(process.env.MAX_CV_BYTES || 5 * 1024 * 1024);

const ALLOWED_ORIGINS = (
  process.env.ALLOWED_ORIGINS ||
  "https://usayeed.com,https://www.usayeed.com,http://localhost:3004"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

fs.mkdirSync(UPLOAD_DIR, { recursive: true });

/* ── Upload rules ─────────────────────────────────────────── */
const ALLOWED_EXT = new Set([".pdf", ".doc", ".docx"]);
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/octet-stream", // some browsers send this for .doc/.docx
]);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const base = path
      .basename(file.originalname, ext)
      .replace(/[^a-z0-9-_]+/gi, "_")
      .slice(0, 60);
    cb(null, `${Date.now()}-${base || "cv"}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_CV_BYTES },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!ALLOWED_EXT.has(ext) || !ALLOWED_MIME.has(file.mimetype)) {
      return cb(new Error("Only PDF, DOC, or DOCX files are accepted."));
    }
    cb(null, true);
  },
});

/* ── Optional email delivery ──────────────────────────────── */
const smtpConfigured =
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

/* ── App ──────────────────────────────────────────────────── */
const app = express();
app.set("trust proxy", true);
app.use(express.json());

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
  })
);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "usayeed-career-api" });
});

app.post("/api/careers/apply", (req, res) => {
  upload.single("cv")(req, res, async (err) => {
    if (err) {
      const message =
        err.code === "LIMIT_FILE_SIZE"
          ? "CV is too large (max 5 MB)."
          : err.message || "Upload failed.";
      return res.status(400).json({ error: message });
    }

    try {
      const { name, email, role, portfolio, message, company_website } =
        req.body || {};

      // Honeypot: bots fill hidden fields.
      if (company_website) return res.json({ ok: true });

      if (!name || !email || !role) {
        return res
          .status(400)
          .json({ error: "Name, email, and role are required." });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
        return res.status(400).json({ error: "Please provide a valid email." });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please attach your CV." });
      }

      const submission = {
        id: `${Date.now()}`,
        name: String(name).trim(),
        email: String(email).trim(),
        role: String(role).trim(),
        portfolio: String(portfolio || "").trim(),
        message: String(message || "").trim(),
        cvFile: req.file.filename,
        cvOriginalName: req.file.originalname,
        ip: req.ip,
        at: new Date().toISOString(),
      };

      let list = [];
      try {
        list = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        if (!Array.isArray(list)) list = [];
      } catch {
        list = [];
      }
      list.push(submission);
      fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));

      if (transporter) {
        await transporter
          .sendMail({
            from: process.env.MAIL_FROM || process.env.SMTP_USER,
            to: process.env.MAIL_TO || "info@usayeed.com",
            replyTo: submission.email,
            subject: `Career application — ${submission.role} — ${submission.name}`,
            text: [
              `Name: ${submission.name}`,
              `Email: ${submission.email}`,
              `Role: ${submission.role}`,
              `Portfolio: ${submission.portfolio || "-"}`,
              "",
              submission.message || "(no message)",
            ].join("\n"),
            attachments: [
              {
                filename: submission.cvOriginalName,
                path: path.join(UPLOAD_DIR, submission.cvFile),
              },
            ],
          })
          .catch((e) => console.error("Mail send failed:", e.message));
      }

      return res.json({ ok: true, id: submission.id });
    } catch (e) {
      console.error("Apply handler error:", e);
      return res.status(500).json({ error: "Server error. Please try again." });
    }
  });
});

app.use((_req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`usayeed-career-api listening on :${PORT}`);
  console.log(
    transporter ? "Email delivery: enabled" : "Email delivery: disabled (SMTP not configured)"
  );
});
