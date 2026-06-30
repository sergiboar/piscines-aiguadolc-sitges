declare namespace JSX { interface IntrinsicElements { [elemName: string]: any } }
declare namespace React { type ReactNode = any; interface FormEvent<T = Element> { preventDefault(): void; currentTarget: T } }
declare module "react" { export function useState<T>(initial: T): [T, (value: T) => void]; export type ReactNode = any; export type FormEvent<T = Element> = React.FormEvent<T>; }
declare module "next" { export type Metadata = any; }
declare module "next/link" { const Link: any; export default Link; }
declare module "next/server" { export const NextResponse: { json(body: any, init?: { status?: number }): Response } }
declare module "next" { export namespace MetadataRoute { type Sitemap = any[]; type Robots = any; } }
declare const process: { env: Record<string, string | undefined> };

declare module "*.css" { const content: any; export default content; }
