import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <p>© 2026 USAYEED LLC. All rights reserved.</p>
        <p>
          <Link href="/teams/hardware" className="footer-link">Hardware</Link> · {" "}
          <Link href="/teams/software" className="footer-link">Software</Link> · {" "}
          <Link href="/teams/cloud" className="footer-link">Cloud</Link> · {" "}
          <Link href="/#contact" className="footer-link">Contact</Link> · {" "}
          <Link href="/#credentials" className="footer-link">Registered LLC</Link>
        </p>
      </div>
    </footer>
  );
}
