import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:"EMY — verifiable data architecture",template:'%s — EMY'},description:"Objects, events and evidence connected into a verifiable history.",openGraph:{locale:'en_GB'}};
export default function Layout({children}:{children:React.ReactNode}){return <div lang="en">{children}</div>}
