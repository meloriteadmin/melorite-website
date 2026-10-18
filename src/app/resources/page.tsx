import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { resources, resourceSections, resourceHref } from "@/data/resources";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FolderCollections } from "@/components/site/FolderCollections";
import { ResourceCards } from "@/components/resources/ResourceCards";
import { ResourceFeature } from "@/components/resources/ResourceFeature";
import styles from "@/components/editorial/Editorial.module.css";
export const metadata = pageMetadata("/resources", "Business Software Resources, Articles & Guides", "Explore practical Melorite articles and guides for sales, real estate, clinics, agencies, commerce and AI calling. Find a clearer way to run everyday work.");
export default function ResourcesPage() {
 return <PageTransition><div className={styles.page}><Breadcrumbs items={[{name:'Resources'}]} /><div className={styles.wrap}>
  <header className={styles.hero}><Reveal><p className={styles.eyebrow}>The Melorite library</p><h1 className={styles.title}>A little perspective.<br />A better way to work.</h1><p className={styles.intro}>Practical ideas, complete workflow guides and illustrative business stories. Find something useful for the work in front of you.</p><nav className={styles.resourceTopLinks} aria-label="Resource sections">{resourceSections.map(item=><Link key={item.slug} href={`/resources/${item.slug}`}>{item.title}<ArrowUpRight className="ml-1 inline size-3" /></Link>)}</nav></Reveal></header>
  <ResourceFeature item={resources[0]} />
  <section className={styles.section}><div className={styles.heading}><h2>Find your next useful read.</h2><p>Three collections. Open a folder to explore articles, work through a guide or see a business workflow in context.</p></div><div className={styles.folders}><FolderCollections collections={resourceSections.map((section,i)=>({label:section.title,art:(["aurora","glacier","dusk"] as const)[i],meta:section.slug==='case-studies'?'Illustrative examples':'Ideas worth keeping',files:[{name:`Explore all ${section.title.toLowerCase()}`,meta:'Open the collection',href:`/resources/${section.slug}`},...resources.filter(item=>item.kind===section.slug).slice(0,2).map(item=>({name:item.title,meta:item.category,href:resourceHref(item)}))]}))} /></div></section>
  {resourceSections.map(section=><section key={section.slug} className={styles.section}><div className={styles.heading}><h2>{section.slug==='blog'?'Fresh perspectives. Practical ideas.':section.slug==='guides'?'The whole workflow, explained.':'Business workflows in context.'}</h2><div><p className={styles.intro}>{section.description}</p><Link className={styles.sectionLink} href={`/resources/${section.slug}`}>Explore {section.title.toLowerCase()}<ArrowUpRight size={15} /></Link></div></div><ResourceCards items={resources.filter(item=>item.kind===section.slug).slice(0,3)} /></section>)}
 </div><FinalCTA title="Put the ideas to work." text="Find the Melorite product that fits your business, then explore it in a focused demo." /></div></PageTransition>;
}
