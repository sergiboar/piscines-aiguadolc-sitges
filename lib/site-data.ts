import { contactConfig } from "./contact-config";

export const pages = [
  { path: "/", title: "Empresa de piscinas en Sitges | Piscines Aiguadolç", description: "Construcción y reforma de piscinas en Sitges, Aiguadolç y Costa del Garraf. Piscinas de obra, reformas integrales y exteriores mediterráneos.", h1: "Construcción y reforma de piscinas premium en Sitges", keyword: "empresa de piscinas en Sitges" },
  { path: "/servicios", title: "Servicios de piscinas en Sitges | Piscines Aiguadolç", description: "Servicios de construcción, reforma integral, renovación de acabados y diseño exterior con piscina en Sitges y alrededores.", h1: "Servicios de construcción y reforma de piscinas", keyword: "servicios de piscinas en Sitges" },
  { path: "/construccion-piscinas-sitges", title: "Construcción de piscinas en Sitges | Piscines Aiguadolç", description: "Construcción de piscinas de obra en Sitges y alrededores. Piscinas a medida, diseño mediterráneo y valoración personalizada.", h1: "Construcción de piscinas en Sitges", keyword: "construcción de piscinas Sitges" },
  { path: "/reforma-piscinas-sitges", title: "Reforma de piscinas en Sitges | Piscines Aiguadolç", description: "Reforma de piscinas en Sitges y alrededores. Renovación de acabados, mejora estética y actualización del entorno exterior. Solicita presupuesto.", h1: "Reforma de piscinas en Sitges", keyword: "reforma de piscinas Sitges" },
  { path: "/reforma-integral-piscinas-sitges", title: "Reforma integral de piscinas en Sitges | Piscines Aiguadolç", description: "Modernización completa de piscinas en Sitges: acabados, escalera, playa, terraza y entorno exterior con estética mediterránea.", h1: "Reforma integral de piscinas en Sitges", keyword: "reforma integral de piscinas Sitges" },
  { path: "/renovacion-acabados-piscina-sitges", title: "Renovación de acabados de piscina en Sitges | Piscines Aiguadolç", description: "Renueva revestimiento, coronación, bordes y terraza de piscina en Sitges con un acabado mediterráneo cuidado.", h1: "Renovación de acabados de piscina en Sitges", keyword: "renovación de acabados de piscina Sitges" },
  { path: "/diseno-exterior-piscina-sitges", title: "Diseño exterior con piscina en Sitges | Piscines Aiguadolç", description: "Diseño de piscina, terraza y jardín en Sitges. Exteriores mediterráneos para casas y villas en la Costa del Garraf.", h1: "Diseño exterior con piscina en Sitges", keyword: "diseño exterior con piscina Sitges" },
  { path: "/presupuesto-piscina-sitges", title: "Presupuesto piscina Sitges | Piscines Aiguadolç", description: "Solicita presupuesto para construir o reformar una piscina en Sitges. Valoración personalizada según estado, acabados, accesos y entorno.", h1: "Presupuesto para piscina en Sitges", keyword: "presupuesto piscina Sitges" },
  { path: "/zonas-piscinas-sitges", title: "Piscinas en Sitges y alrededores | Piscines Aiguadolç", description: "Atención para proyectos de piscinas en Aiguadolç, Terramar, Vinyet, Vallpineda, Garraf, Sant Pere de Ribes, Vilanova y Castelldefels.", h1: "Piscinas en Sitges y alrededores", keyword: "piscinas en Sitges y alrededores" },
  { path: "/proyectos", title: "Proyectos de piscinas mediterráneas | Piscines Aiguadolç", description: "Piscinas y exteriores con enfoque mediterráneo: criterios de intervención, acabados, reforma y construcción a medida.", h1: "Piscinas y exteriores con enfoque mediterráneo", keyword: "proyectos de piscinas en Sitges" },
  { path: "/contacto", title: "Contacto piscinas Sitges | Piscines Aiguadolç", description: "Contacta para construir o reformar tu piscina en Sitges. Teléfono, WhatsApp, email y formulario de presupuesto.", h1: "Contacta para construir o reformar tu piscina en Sitges", keyword: "contacto piscinas Sitges" },
  { path: "/politica-privacidad", title: "Política de privacidad | Piscines Aiguadolç", description: "Información sobre el tratamiento de datos de contacto y solicitudes de presupuesto en Piscines Aiguadolç.", h1: "Política de privacidad", keyword: "privacidad" },
  { path: "/aviso-legal", title: "Aviso legal | Piscines Aiguadolç", description: "Aviso legal de la web de Piscines Aiguadolç.", h1: "Aviso legal", keyword: "aviso legal" },
];

export const services = [
  ["Construcción de piscinas", "/construccion-piscinas-sitges", "Piscinas de obra para casas y villas, integradas con terraza, jardín y arquitectura mediterránea."],
  ["Reforma de piscinas", "/reforma-piscinas-sitges", "Actualización estética y funcional de piscinas existentes, con atención al estado real del vaso y del entorno."],
  ["Reforma integral", "/reforma-integral-piscinas-sitges", "Modernización completa de piscina, playa, escalera, acabados y zona exterior sin promesas cerradas antes de valorar."],
  ["Renovación de acabados", "/renovacion-acabados-piscina-sitges", "Revestimiento, coronación, bordes y terraza con materiales y tonos adecuados al estilo de la vivienda."],
  ["Diseño exterior con piscina", "/diseno-exterior-piscina-sitges", "Continuidad visual entre agua, piedra clara, vegetación y zonas de descanso."],
  ["Presupuesto personalizado", "/presupuesto-piscina-sitges", "Valoración orientada a la intervención real: obra nueva, reforma, accesos, dimensiones y nivel de detalle."],
];
export const zones = ["Aiguadolç", "Terramar", "Vinyet", "Vallpineda", "Garraf", "Sant Pere de Ribes", "Vilanova i la Geltrú", "Castelldefels", "Costa del Garraf", "Canyelles", "Olivella"];
export const nav = [["Inicio","/"],["Servicios","/servicios"],["Proyectos","/proyectos"],["Empresa","/zonas-piscinas-sitges"],["Contacto","/contacto"]];

export const organizationSchema = {"@context":"https://schema.org","@type":"Organization",name:contactConfig.companyName,url:contactConfig.siteUrl,telephone:"+34633232510",email:contactConfig.email,areaServed:["Sitges","Aiguadolç","Garraf","Costa del Garraf"]};
