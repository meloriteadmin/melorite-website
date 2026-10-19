"use client";
import { LegacyFloatingDemo } from "./LegacyFloatingDemo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { demoHrefForPath } from "@/lib/links";
export function FloatingDemo(){const pathname=usePathname();if(pathname==='/book-demo')return null;if(pathname==='/'||pathname==='/contact'||pathname==='/products'||pathname.startsWith('/products/')||pathname==='/resources'||pathname.startsWith('/resources/'))return <LegacyFloatingDemo/>;return <Link className="reference-contact-bubble" href={demoHrefForPath(pathname)} aria-label="Book a Melorite demo"><MessageSquareText size={21}/></Link>}
