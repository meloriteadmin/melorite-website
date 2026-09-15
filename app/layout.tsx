import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
export const metadata: Metadata = {title:'Melorite — Your business, working as one.',description:'Connect your teams, simplify everyday work, and grow with a business platform built around you. Explore 14 business apps and 15 industry solutions.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className={GeistSans.className}>{children}</body></html>}
