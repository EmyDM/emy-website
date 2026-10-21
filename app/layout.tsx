import {headers} from 'next/headers';
import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://emy.dmitryromanenko69.chatgpt.site'),robots:{index:true,follow:true},title:{default:'EMY — архитектура проверяемых данных',template:'%s — EMY'},description:'EMY связывает объекты, события и данные из разных систем в проверяемую историю для управления и аналитики.',icons:{icon:'/emy-logo.png'},openGraph:{title:'EMY — архитектура проверяемых данных',description:'Объекты, события, основания и результаты в одной проверяемой истории.',type:'website'}};
export default async function RootLayout({children}:{children:React.ReactNode}){const lang=(await headers()).get('x-emy-language')||'ru';return <html lang={lang}><body>{children}</body></html>}
