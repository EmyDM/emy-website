import type {Metadata} from 'next';
import Link from '@/components/site-link';
import {notFound} from 'next/navigation';
import {V2Header,V2Footer} from '../../../v2/chrome';
import articles from '../data.json';
import {legalSources,hubArticles,hubProfile} from '../../legislation/sources';
function linkedText(text:string){return text.split(/(https?:\/\/[^\s]+)/g).map((part,i)=>/^https?:\/\//.test(part)?<a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>:part);}

type ArticleKey=keyof typeof articles;
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=articles[slug as ArticleKey];return {title:item?item.title:'Article',description:item?item.title+' — an article by Svetlana Romanenko about EMY.':undefined,alternates:{canonical:'/en/research/articles/'+slug}};}

export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const item=articles[slug as ArticleKey];
  if(!item)notFound();
  return <><V2Header/><main><section className="article-hero"><div className="wrap article-wrap"><Link href="/en/research">← All articles</Link><div className="eyebrow">Article / Research</div><h1>{item.title}</h1><p>Author: {item.author}</p></div></section><article className="wrap article-body" lang="ru"><p className="article-note" lang="en">Original article in Russian. EMY-ID is a persistent object identifier. EMY Code records an event’s time and location. The concept also uses “EMY code” as a general term for connected digital identification.</p>{item.blocks.map((block,i)=>{
    if(block.type==='title')return null;
    if(block.type==='heading')return <h2 key={i}>{block.text}</h2>;
    if(block.type==='url')return <p key={i} className="article-url"><a href={block.text} target="_blank" rel="noopener noreferrer">{block.text}</a></p>;
    return <p key={i}>{linkedText(block.text)}</p>;
  })}<aside className="article-legal" lang="en"><h2>Legal sources and EMY tools</h2><p>Related provisions and research questions for the EMY model. Detailed explanations and the review date are available in the <Link href="/en/research/legislation">Kazakhstan legislation section</Link>.</p><ul>{legalSources.filter(s=>slug==='architecture'?s.id!=='copyright':['digital-code','digital-assets','ai','copyright'].includes(s.id)).map(s=><li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a> — {s.norm} <Link href={'/en/research/legislation#'+s.id}>Relation to EMY</Link> · <Link href={s.toolUrl}>{s.tool}</Link></li>)}</ul><h3>Published on Astana Hub</h3><p><a href={hubArticles[slug as keyof typeof hubArticles]} target="_blank" rel="noopener noreferrer">Read this article on Astana Hub ↗</a> · <a href={hubProfile} target="_blank" rel="noopener noreferrer">EMY company profile ↗</a></p></aside><div className="article-back" lang="en"><Link className="btn ghost" href="/en/research">All articles</Link></div></article></main><V2Footer/></>;
}
