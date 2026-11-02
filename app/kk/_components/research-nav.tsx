import Link from "@/components/site-link";
export default function ResearchNav({ current }: {
    current: string;
}) { const links = [["\u0428\u043E\u043B\u0443", "/kk/research"], ["\u041C\u0430\u049B\u0430\u043B\u0430\u043B\u0430\u0440", "/kk/research/publications"], ["\u041A\u0456\u0442\u0430\u043F \u0442\u0430\u0440\u0430\u0443\u043B\u0430\u0440\u044B", "/kk/research/books"], ["\u041F\u0430\u0442\u0435\u043D\u0442\u0442\u0435\u0440", "/kk/research/patents"], ["\u049A\u0420 \u0437\u0430\u04A3\u043D\u0430\u043C\u0430\u0441\u044B", "/kk/research/legislation"]]; return <nav className="research-nav" aria-label="Зерттеу бөлімдері">{links.map(([label, href]) => <Link href={href} key={href} aria-current={current === href ? "page" : undefined}>{label}</Link>)}</nav>; }
