"use client";
import LanguageSwitcher from "@/components/language-switcher";
import { useState } from "react";
import Link from "@/components/site-link";
const links = [["\u0417\u0435\u0440\u0442\u0442\u0435\u0443\u043B\u0435\u0440", "/kk/research"], ["\u04E8\u043D\u0456\u043C", "/kk/products"], ["\u0416\u043E\u0431\u0430 \u0442\u0443\u0440\u0430\u043B\u044B", "/kk/about"], ["\u0411\u0430\u0439\u043B\u0430\u043D\u044B\u0441", "/kk/contact"]];
export function V2Header() {
    const [open, setOpen] = useState(false);
    return <header className="v2-header"><div className="wrap v2-nav">
    <Link className="v2-brand" href="/kk" aria-label="EMY — басты бет"><img src="/emy-logo.png" alt="EMY"/><span>{"\u0417\u0435\u0440\u0442\u0442\u0435\u0443\u043B\u0435\u0440 / \u04E8\u043D\u0456\u043C"}</span></Link>
    <nav className="v2-links" aria-label="Негізгі навигация">{links.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</nav>
    <button type="button" className="v2-menu" aria-label="Мәзірді ашу" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "\u0416\u0430\u0431\u0443" : "\u041C\u04D9\u0437\u0456\u0440"}</button>
  </div>{open && <nav className="v2-mobile" aria-label="Мобильді навигация">{links.map(([name, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{name}</Link>)}</nav>}<div className="wrap language-bar"><LanguageSwitcher /></div></header>;
}
export function V2Footer() { return <footer className="v2-footer"><div className="wrap v2-footer-inner"><div><strong>EMY</strong><p>{"\u0417\u0435\u0440\u0442\u0442\u0435\u0443\u043B\u0435\u0440 \u0436\u04D9\u043D\u0435 \u0442\u0435\u043A\u0441\u0435\u0440\u0456\u043B\u0435\u0442\u0456\u043D \u0434\u0435\u0440\u0435\u043A\u0442\u0435\u0440 \u0442\u04B1\u0436\u044B\u0440\u044B\u043C\u0434\u0430\u043C\u0430\u0441\u044B."}</p></div><div><Link href="/kk/research">{"\u0417\u0435\u0440\u0442\u0442\u0435\u0443\u043B\u0435\u0440"}</Link><Link href="/kk/products">{"\u04E8\u043D\u0456\u043C"}</Link><Link href="/kk/author">{"\u0416\u043E\u0431\u0430 \u0430\u0432\u0442\u043E\u0440\u044B"}</Link><Link href="/kk/research/legislation">{"\u049A\u0420 \u0437\u0430\u04A3\u043D\u0430\u043C\u0430\u0441\u044B"}</Link><Link href="/kk/contact">{"\u0411\u0430\u0439\u043B\u0430\u043D\u044B\u0441"}</Link></div></div></footer>; }
