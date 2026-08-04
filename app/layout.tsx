import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'AI Engineer Portfolio | Cinematic Digital Workspace',description:'Premium interactive portfolio for an AI engineer, full stack developer, product builder, and creative technologist.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
