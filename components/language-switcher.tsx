'use client';
import {usePathname} from 'next/navigation';
export default function LanguageSwitcher(){const pathname=usePathname()||'/';const locale=pathname.match(/^\/(en|kk)(?:\/|$)/)?.[1]||'ru';const path=pathname.replace(/^\/(en|kk)(?=\/|$)/,'')||'/';return <nav className="language-switcher" aria-label="Language">{[['ru','RU'],['en','EN'],['kk','KZ']].map(([code,label])=><a key={code} href={code==='ru'?path:'/'+code+(path==='/'?'':path)} hrefLang={code} lang={code} aria-current={locale===code?'page':undefined}>{label}</a>)}</nav>}
