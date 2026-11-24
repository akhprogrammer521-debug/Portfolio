import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Ahmad Ibrahim</span>
        <span>Built with Next.js / GSAP</span>
        <div className="footer__links">
          <span>{siteConfig.location}</span>
          <Link href="#top">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  );
}
