import type {Metadata} from 'next';
import Link from 'next/link';
import {V2Header,V2Footer} from './chrome';

export const metadata:Metadata={title:'Исследования и продукты — вариант 2',description:'Альтернативная структура сайта EMY: исследовательское направление и продуктовая реализация.'};

export default function VariantTwo(){return <><V2Header/><main>
  <section className="v2-opening"><div className="wrap v2-opening-grid"><div><div className="eyebrow">EMY · Вариант структуры 2</div><h1>От исследования доверия к данным — к работающим инструментам</h1><p className="lead">EMY соединяет правовую и архитектурную постановку задачи с прикладным продуктом. Здесь эти два направления представлены отдельно: что мы исследуем и что проектируем для внедрения.</p></div><div className="v2-opening-image"><img src="/images/reflection.jpeg" alt="Свет отражается на поверхности воды"/><span>Свет и отражение — образ из визуальных материалов проекта</span></div></div></section>
  <section className="v2-two-paths"><div className="wrap"><div className="v2-section-heading"><span className="eyebrow">Два направления</span><h2>Одна задача. Два уровня работы.</h2></div><div className="v2-path-grid">
    <Link className="v2-path v2-path-research" href="/v2/research"><span className="v2-path-index">01 / Научно-исследовательское направление</span><div><h3>Почему данным можно доверять?</h3><p>Правовые основания, происхождение записей, идентичность объектов и ответственность участников. Исследуем принципы, на которых может строиться проверяемая цифровая среда.</p></div><span className="v2-path-action">Изучить направление</span></Link>
    <Link className="v2-path v2-path-product" href="/v2/products"><span className="v2-path-index">02 / Продуктовое направление</span><div><h3>Как это применить в процессе?</h3><p>Первый подробно описанный продуктовый контур: мобильная инвентаризация активов, событийный журнал, карта расхождений и связь с 1С / КУФИБ.</p></div><span className="v2-path-action">Посмотреть продукт</span></Link>
  </div></div></section>
  <section className="v2-bridge"><div className="wrap v2-bridge-grid"><div><span className="eyebrow">Связь направлений</span><h2>Исследование задаёт критерии. Продукт проверяет их на конкретных событиях.</h2></div><p>Исследовательская модель формулирует, что нужно связывать: объект, участника, действие, основание и результат. Прикладной MVP начинает с ограниченного сценария управления активами. Готовность будущих направлений не приравнивается к готовности первой очереди.</p></div></section>
  <section className="section"><div className="wrap v2-end"><div><h2>Какой вход полезен вам?</h2><p className="lead">Для обсуждения архитектуры начните с исследований. Для конкретного пилота — с продуктового раздела.</p></div><div className="v2-actions"><Link className="btn" href="/v2/research">Исследования</Link><Link className="btn ghost" href="/v2/products">Продукты</Link></div></div></section>
</main><V2Footer/></>}
