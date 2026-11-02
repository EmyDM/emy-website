'use client';
import LanguageSwitcher from '@/components/language-switcher';
import {useState} from 'react';
import Link from '@/components/site-link';

const links=[['Исследования','/research'],['Продукт','/products'],['О проекте','/about'],['Контакты','/contact']];

export function V2Header(){
  const [open,setOpen]=useState(false);
  return <header className="v2-header"><div className="wrap v2-nav">
    <Link className="v2-brand" href="/" aria-label="EMY — главная"><img src="/emy-logo.png" alt="EMY"/><span>Исследования / Продукт</span></Link>
    <nav className="v2-links" aria-label="Основная навигация">{links.map(([name,href])=><Link href={href} key={href}>{name}</Link>)}</nav>
    <button type="button" className="v2-menu" aria-label="Открыть меню" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Закрыть':'Меню'}</button>
  </div>{open&&<nav className="v2-mobile" aria-label="Мобильная навигация">{links.map(([name,href])=><Link href={href} key={href} onClick={()=>setOpen(false)}>{name}</Link>)}</nav>}<div className="wrap language-bar"><LanguageSwitcher/></div></header>
}

export function V2Footer(){return <footer className="v2-footer"><div className="wrap v2-footer-inner"><div><strong>EMY</strong><p>Исследования и концепция проверяемых данных.</p></div><div><Link href="/research">Исследования</Link><Link href="/products">Продукт</Link><Link href="/author">Автор проекта</Link><Link href="/research/legislation">Законодательство РК</Link><Link href="/contact">Контакты</Link></div></div></footer>}
