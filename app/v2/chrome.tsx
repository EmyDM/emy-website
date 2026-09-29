'use client';
import {useState} from 'react';
import Link from 'next/link';

const links=[['Исследования','/v2/research'],['Продукты','/v2/products'],['Контакты','/contact']];

export function V2Header(){
  const [open,setOpen]=useState(false);
  return <header className="v2-header"><div className="wrap v2-nav">
    <Link className="v2-brand" href="/v2" aria-label="EMY — вариант 2"><img src="/emy-logo.png" alt="EMY"/><span>Исследования / Продукты</span></Link>
    <nav className="v2-links" aria-label="Навигация варианта 2">{links.map(([name,href])=><Link href={href} key={href}>{name}</Link>)}<Link className="v2-version" href="/">Вариант 1</Link></nav>
    <button type="button" className="v2-menu" aria-label="Открыть меню" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Закрыть':'Меню'}</button>
  </div>{open&&<nav className="v2-mobile" aria-label="Мобильная навигация">{links.map(([name,href])=><Link href={href} key={href} onClick={()=>setOpen(false)}>{name}</Link>)}<Link href="/" onClick={()=>setOpen(false)}>Вариант 1</Link></nav>}</header>
}

export function V2Footer(){return <footer className="v2-footer"><div className="wrap v2-footer-inner"><div><strong>EMY</strong><p>Исследовательская основа и прикладная реализация.</p></div><div><Link href="/v2/research">Исследования</Link><Link href="/v2/products">Продукты</Link><Link href="/">Вариант 1</Link></div></div></footer>}
