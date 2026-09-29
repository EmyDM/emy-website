import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {V2Header,V2Footer} from '../../../v2/chrome';
import articles from '../data.json';

type ArticleKey=keyof typeof articles;
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=articles[slug as ArticleKey];return {title:item?item.title:'Статья'};}

export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const item=articles[slug as ArticleKey];
  if(!item)notFound();
  return <><V2Header/><main><section className="article-hero"><div className="wrap article-wrap"><Link href="/research">← Все статьи</Link><div className="eyebrow">Статья / Исследования</div><h1>{item.title}</h1><p>Автор: {item.author}</p></div></section><article className="wrap article-body"><p className="article-note">Авторский материал Светланы Романенко из документов проекта EMY. Описывает концепцию, а не завершённую реализацию всех её элементов.</p><p className="article-note">В этих авторских текстах термин «EMY-код» использован в концептуальном смысле. В ТЗ первой очереди постоянный идентификатор актива называется EMY-ID, а EMY Code — метка времени и места события.</p>{item.blocks.map((block,i)=>{
    if(block.type==='title')return null;
    if(block.type==='heading')return <h2 key={i}>{block.text}</h2>;
    if(block.type==='url')return <p key={i} className="article-url"><a href={block.text} target="_blank" rel="noopener noreferrer">{block.text}</a></p>;
    return <p key={i}>{block.text}</p>;
  })}<div className="article-back"><Link className="btn ghost" href="/research">Все статьи</Link></div></article></main><V2Footer/></>;
}
