# USAYEED Career API

Small Express server that receives career applications from the website:
takes the form fields **plus a CV upload**, stores them on disk, and
(optionally) emails each application with the CV attached.

The website is a static export, so it cannot process uploads itself — this
server is the backend you host on your own virtual server.

## Endpoints

| Method | Path                  | Description                              |
| ------ | --------------------- | ---------------------------------------- |
| GET    | `/api/health`         | Health check                             |
| POST   | `/api/careers/apply`  | `multipart/form-data` application intake |

`POST /api/careers/apply` accepts:

- `name` (required)
- `email` (required)
- `role` (required) — e.g. "Embedded Engineer"
- `portfolio` (optional)
- `message` (optional)
- `cv` (required file) — PDF / DOC / DOCX, max 5 MB
- `company_website` — honeypot, must stay empty

## Run locally

```bash
cd server/career-api
cp .env.example .env      # then edit .env
npm install
npm start                 # http://localhost:4000
```

## Deploy on a VPS (Ubuntu)

```bash
# 1. Install Node 18+ if needed
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Copy the folder to the server, then:
cd /var/www/usayeed-career-api
cp .env.example .env
nano .env
npm install --omit=dev

# 3. Run it under systemd (recommended)
sudo cp usayeed-career-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now usayeed-career-api
sudo systemctl status usayeed-career-api
```

Alternative quick run: `pm2 start server.js --name usayeed-career-api`.

### Put it behind HTTPS (nginx)

```nginx
server {
    server_name api.usayeed.com;

    client_max_body_size 6M;

    location / {
        proxy_pass http://127.0.0.1:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then `sudo certbot --nginx -d api.usayeed.com`.

## Point the website at this server

The frontend reads `NEXT_PUBLIC_CAREER_API_URL` at **build time**. Before
building/deploying the site, set it in the project root `.env.local`:

```
NEXT_PUBLIC_CAREER_API_URL=https://api.usayeed.com
```

Rebuild and redeploy the static site for the change to take effect. The form
posts to `${NEXT_PUBLIC_CAREER_API_URL}/api/careers/apply`.

## Where submissions go

- CVs: `UPLOAD_DIR` (default `./uploads/`)
- Log: `DATA_FILE` (default `./submissions.json`)
- If SMTP is configured, the same data is emailed to `MAIL_TO`.
