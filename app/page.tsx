import type {Metadata} from 'next';
import Link from 'next/link';
import {V2Header,V2Footer} from './v2/chrome';

export const metadata:Metadata={title:'Исследования и продукты',description:'Исследования Светланы Романенко и продуктовый пилот EMY для Бузачи Нефть.'};

export default function VariantTwo(){return <><V2Header/><main>
  <section className="v2-opening"><div className="wrap v2-opening-grid"><div><div className="eyebrow">EMY · Исследования и продукты</div><h1>Исследования доверенных данных и пилот EMY в нефтегазовой отрасли</h1><p className="lead">Два направления одного проекта: статьи Светланы Романенко о проверяемых данных и продуктовый сценарий для ТОО «Бузачи Нефть».</p></div><div className="v2-opening-image"><img src="/images/reflection.jpeg" alt="Свет отражается на поверхности воды"/><span>Свет и отражение — образ из визуальных материалов проекта</span></div></div></section>
  <section className="v2-two-paths"><div className="wrap"><div className="v2-section-heading"><span className="eyebrow">Два направления</span><h2>Одна задача. Два уровня работы.</h2></div><div className="v2-path-grid">
    <Link className="v2-path v2-path-research" href="/research"><span className="v2-path-index">01 / Научно-исследовательское направление</span><div><h3>Почему данным можно доверять?</h3><p>Правовые основания, происхождение записей, идентичность объектов и ответственность участников. Читайте статьи Светланы Романенко о принципах проверяемой цифровой среды.</p></div><span className="v2-path-action">Изучить направление</span></Link>
    <Link className="v2-path v2-path-product" href="/products"><span className="v2-path-index">02 / Продуктовое направление</span><div><h3>Как это применить в процессе?</h3><p>Пилотный контур Бузачи: идентичность активов, события, мобильная инвентаризация и обмен с 1С / КУФИБ.</p></div><span className="v2-path-action">Посмотреть продукт</span></Link>
  </div></div></section>
  <section className="v2-bridge"><div className="wrap v2-bridge-grid"><div><span className="eyebrow">Связь направлений</span><h2>Исследование задаёт критерии. Продукт проверяет их на конкретных событиях.</h2></div><p>Статьи объясняют, зачем нужны происхождение данных и проверяемая история. Продуктовый раздел показывает, как эти принципы положены в основу требований пилота Бузачи. Статус реализации указан отдельно от проектных требований.</p></div></section>
  <section className="section"><div className="wrap v2-end"><div><h2>Какой вход полезен вам?</h2><p className="lead">Статьи раскрывают концепцию. Продуктовый раздел показывает задачу, данные и границы пилота.</p></div><div className="v2-actions"><Link className="btn" href="/research">Исследования</Link><Link className="btn ghost" href="/products">Продукты</Link></div></div></section>
</main><V2Footer/></>}
