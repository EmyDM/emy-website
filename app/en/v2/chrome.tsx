"use client";
import LanguageSwitcher from "@/components/language-switcher";
import { useState } from "react";
import Link from "@/components/site-link";
const links = [["Research", "/en/research"], ["Product", "/en/products"], ["About the project", "/en/about"], ["Contact", "/en/contact"]];
export function V2Header() {
    const [open, setOpen] = useState(false);
    return <header className="v2-header"><div className="wrap v2-nav">
    <Link className="v2-brand" href="/en" aria-label="EMY — home"><img src="/emy-logo.png" alt="EMY"/><span>{"Research / Product"}</span></Link>
    <nav className="v2-links" aria-label="Main navigation">{links.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</nav>
    <button type="button" className="v2-menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
  </div>{open && <nav className="v2-mobile" aria-label="Mobile navigation">{links.map(([name, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{name}</Link>)}</nav>}<div className="wrap language-bar"><LanguageSwitcher /></div></header>;
}
export function V2Footer() { return <footer className="v2-footer"><div className="wrap v2-footer-inner"><div><strong>EMY</strong><p>{"Research and the concept of verifiable data."}</p></div><div><Link href="/en/research">{"Research"}</Link><Link href="/en/products">{"Product"}</Link><Link href="/en/author">{"Project author"}</Link><Link href="/en/research/legislation">{"Kazakhstan legislation"}</Link><Link href="/en/contact">{"Contact"}</Link></div></div></footer>; }
