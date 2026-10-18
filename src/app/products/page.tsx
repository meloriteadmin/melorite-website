import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ConnectedProducts } from "@/components/products/ConnectedProducts";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductGrid } from "@/components/home/ProductCards";
import styles from "@/components/editorial/Editorial.module.css";
export const metadata = pageMetadata("/products", "Business Software Products", "Compare six focused Melorite products for sales, property, clinic, agency, ecommerce and phone workflows. Choose the software that fits your team.");
export default function ProductsPage(){return <PageTransition><div className={styles.page}><Breadcrumbs items={[{name:'Products'}]}/><div className={styles.wrap}>
 <header className={styles.heroCenter}><Reveal><p className={styles.eyebrow}>The Melorite product suite</p><h1 className={styles.title}>Different work.<br/>The right workspace.</h1><p className={styles.intro}>Six focused products for the people, conversations and everyday work that move your business forward.</p><div className={styles.actions}><Link href="/book-demo" className="pill pill-dark">Book a demo</Link><a href="#product-suite" className="pill pill-glass">Explore the products<ArrowUpRight size={15}/></a></div></Reveal></header>
 <section id="product-suite" className="scroll-mt-32 pb-20"><ProductExplorer/></section>
 <section className={styles.section}><div className={styles.heading}><h2>Made for your business.<br/>Simple for your team.</h2><p>Start with the product closest to your work today. Each workspace brings the right records, decisions and next steps together.</p></div><ProductGrid/></section>
 <ConnectedProducts/>
 </div><FinalCTA title="Find your Melorite product." text="Tell us how your team works. We’ll show you the workspace that fits."/></div></PageTransition>}
