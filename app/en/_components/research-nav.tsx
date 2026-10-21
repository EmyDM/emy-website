import Link from "@/components/site-link";
export default function ResearchNav({ current }: {
    current: string;
}) { const links = [["Overview", "/en/research"], ["Articles", "/en/research/publications"], ["Book chapters", "/en/research/books"], ["Patents", "/en/research/patents"], ["Kazakhstan legislation", "/en/research/legislation"]]; return <nav className="research-nav" aria-label="Research sections">{links.map(([label, href]) => <Link href={href} key={href} aria-current={current === href ? "page" : undefined}>{label}</Link>)}</nav>; }
