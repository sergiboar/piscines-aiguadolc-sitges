import Link from "next/link";
import { contactConfig, whatsappHref } from "@/lib/contact-config";
import { nav, services } from "@/lib/site-data";

export function Header(){return <header className="header"><Link className="brand" href="/"><span className="mark">PA</span><span>Piscines Aiguadolç</span></Link><nav>{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><div className="headCtas"><a href={whatsappHref()} className="ghost">WhatsApp</a><Link href="/presupuesto-piscina-sitges" className="btn small">Presupuesto</Link></div></header>}
export function Footer(){return <footer className="footer"><div><b>Piscines Aiguadolç</b><p>Construcción y reforma de piscinas en Sitges i rodalies.</p></div><div><p><a href={contactConfig.phoneHref}>{contactConfig.phoneDisplay}</a></p><p><a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a></p><p>{contactConfig.serviceArea}</p></div><div><Link href="/politica-privacidad">Privacidad</Link><Link href="/aviso-legal">Aviso legal</Link></div></footer>}
export function Ctas(){return <div className="ctas"><Link className="btn" href="/presupuesto-piscina-sitges">Solicitar presupuesto</Link><a className="btn alt" href={whatsappHref()}>WhatsApp</a><a className="ghost" href={contactConfig.phoneHref}>Llamar</a></div>}
export function ServiceGrid(){return <div className="grid">{services.map(([t,h,d])=><Link className="card" href={h} key={h}><span>{t}</span><p>{d}</p></Link>)}</div>}
export function JsonLd({data}:{data:object}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
