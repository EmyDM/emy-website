import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:"EMY — тексерілетін деректер архитектурасы",template:'%s — EMY'},description:"Объектілер, оқиғалар мен растаулар тексерілетін тарихта байланысады.",openGraph:{locale:'kk_KZ'}};
export default function Layout({children}:{children:React.ReactNode}){return <div lang="kk">{children}</div>}
