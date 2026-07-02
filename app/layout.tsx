import type { Metadata } from "next";
import "./styles.css";
import { Header, Footer } from "@/components/ui";
import { contactConfig } from "@/lib/contact-config";
import { organizationSchema } from "@/lib/site-data";

export const metadata: Metadata = { metadataBase: new URL(contactConfig.siteUrl), title:{default:"Piscines Aiguadolç",template:"%s"}, openGraph:{siteName:"Piscines Aiguadolç",locale:"es_ES",type:"website"}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/></body></html>}
