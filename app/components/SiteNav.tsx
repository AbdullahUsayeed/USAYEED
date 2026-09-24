import Link from "next/link";

export default function SiteNav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="USAYEED home">
          <span className="logo-mark" aria-hidden="true">U</span>
          <span className="logo-word">USAYEED</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/future">Future</Link></li>
          <li><Link href="/career">Career</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
