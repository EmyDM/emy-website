import type {Metadata} from 'next';
import Link from '@/components/site-link';
import {notFound} from 'next/navigation';
import {V2Header,V2Footer} from '../../../v2/chrome';
import articles from '../data.json';
import {legalSources,hubArticles,hubProfile} from '../../legislation/sources';
function linkedText(text:string){return text.split(/(https?:\/\/[^\s]+)/g).map((part,i)=>/^https?:\/\//.test(part)?<a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>:part);}

type ArticleKey=keyof typeof articles;
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=articles[slug as ArticleKey];return {title:item?item.title:'Мақала',description:item?item.title+' — Светлана Романенконың EMY туралы авторлық мақаласы.':undefined,alternates:{canonical:'/kk/research/articles/'+slug}};}

export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const item=articles[slug as ArticleKey];
  if(!item)notFound();
  return <><V2Header/><main><section className="article-hero"><div className="wrap article-wrap"><Link href="/kk/research">← Барлық мақалалар</Link><div className="eyebrow">Мақала / Зерттеулер</div><h1>{item.title}</h1><p>Автор: {item.author}</p></div></section><article className="wrap article-body" lang="ru"><p className="article-note" lang="kk">Мақаланың түпнұсқасы орыс тілінде. EMY-ID — объектінің тұрақты идентификаторы. EMY Code оқиғаның уақыты мен орнын белгілейді. Тұжырымдамада «EMY-код» байланыстырушы цифрлық сәйкестендірудің жалпы атауы ретінде де қолданылады.</p>{item.blocks.map((block,i)=>{
    if(block.type==='title')return null;
    if(block.type==='heading')return <h2 key={i}>{block.text}</h2>;
    if(block.type==='url')return <p key={i} className="article-url"><a href={block.text} target="_blank" rel="noopener noreferrer">{block.text}</a></p>;
    return <p key={i}>{linkedText(block.text)}</p>;
  })}<aside className="article-legal" lang="kk"><h2>Құқықтық дереккөздер мен EMY құралдары</h2><p>EMY моделіне қатысты нормалар мен зерттеу сұрақтары. Толық түсіндірмелер мен тексеру күні <Link href="/kk/research/legislation">Қазақстан заңнамасы бөлімінде</Link>.</p><ul>{legalSources.filter(s=>slug==='architecture'?s.id!=='copyright':['digital-code','digital-assets','ai','copyright'].includes(s.id)).map(s=><li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a> — {s.norm} <Link href={'/kk/research/legislation#'+s.id}>EMY-мен байланысы</Link> · <Link href={s.toolUrl}>{s.tool}</Link></li>)}</ul><h3>Astana Hub-тағы жарияланым</h3><p><a href={hubArticles[slug as keyof typeof hubArticles]} target="_blank" rel="noopener noreferrer">Бұл мақала Astana Hub платформасында ↗</a> · <a href={hubProfile} target="_blank" rel="noopener noreferrer">EMY компаниясының профилі ↗</a></p></aside><div className="article-back" lang="kk"><Link className="btn ghost" href="/kk/research">Барлық мақалалар</Link></div></article></main><V2Footer/></>;
}
