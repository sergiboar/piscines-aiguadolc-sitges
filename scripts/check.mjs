import fs from 'node:fs';
const banned=['Marbella','Costa del Sol','Milla de Oro','Blue Valley','placeholder','próximamente','futuros proyectos','web en preparación','contenido provisional','landing SEO','datos verificados','sin inventar','no mostramos'];
const files=[];function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['node_modules','.git','dist'].includes(e.name))continue;const p=d+'/'+e.name;if(e.isDirectory())walk(p);else files.push(p)}}walk('.');
let ok=true;for(const f of files){const s=fs.readFileSync(f,'utf8');for(const b of banned){if(s.includes(b)&&!f.includes('check.mjs')){console.error(`Banned public/internal text "${b}" in ${f}`);ok=false}}}
for(const f of ['app/page.tsx','app/contacto/page.tsx','lib/contact-config.ts','app/sitemap.ts','app/robots.ts']) if(!fs.existsSync(f)){console.error('Missing '+f);ok=false}
if(!ok)process.exit(1);console.log('Content, contact configuration and technical files validated.');
