import { ResourceBento } from "@/components/resources/ResourceBento";
import { CaseJourney } from "@/components/resources/CaseJourney";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, GitBranch, Layers, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { resources, resourceSections, resourceHref } from "@/data/resources";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FolderCollections } from "@/components/site/FolderCollections";
import { ResourceFeature } from "@/components/resources/ResourceFeature";
import { ResourceLibrary } from "@/components/resources/ResourceLibrary";
import { ResourceArt } from "@/components/resources/ResourceArt";
import styles from "@/components/editorial/Editorial.module.css";
import design from "@/components/resources/ResourceDesign.module.css";
export function generateStaticParams(){return resourceSections.map(({slug})=>({section:slug}));}
export async function generateMetadata({params}:PageProps<"/resources/[section]">){const {section}=await params;const category=resourceSections.find(item=>item.slug===section);return category?pageMetadata(`/resources/${section}`,`${category.title} | Melorite Business Resources`,category.description):{};}
export default async function ResourceListing({params}:PageProps<"/resources/[section]">){
 const {section}=await params;
 const category=resourceSections.find(item=>item.slug===section);
 if(!category)notFound();
 const items=resources.filter(item=>item.kind===section);
 const featured=items[0];
 const isBlog=section==='blog',isGuide=section==='guides';
 return <PageTransition><div className={styles.page}><Breadcrumbs items={[{name:'Resources',href:'/resources'},{name:category.title}]}/><div className={styles.wrap}>
  <nav className={design.sectionNav} aria-label="Resource sections"><Link href="/resources">The library</Link>{resourceSections.map(item=><Link key={item.slug} href={`/resources/${item.slug}`} aria-current={item.slug===section?'page':undefined}>{item.title}</Link>)}</nav>
  {isBlog?<>
   <header className={`${styles.hero} ${styles.libraryHero}`}><Reveal><p className={styles.eyebrow}>The Melorite journal</p><h1 className={styles.title}>Ideas for the everyday.</h1><p className={styles.intro}>Notes on sales, people and the work behind a growing business.</p></Reveal></header>
   <ResourceFeature item={featured}/>
   <section className={styles.section} aria-label="Blog library"><div className={design.blogLibrary}><ResourceLibrary items={items}/></div></section>
  </>:isGuide?<>
   <header className={design.guideIntro}><Reveal><p className={styles.eyebrow}>The Melorite field guides</p><h1>Less guesswork.<br/>A clearer way forward.</h1><p>Practical guides for the whole workflow. Start with the records, connect the handoffs and give your team a process they can use.</p><a href="#guide-library" className="pill pill-dark mt-8">Find your guide<BookOpen size={16}/></a><Link className={design.guideLink} href={resourceHref(featured)}>Start with the CRM setup guide<ArrowUpRight size={15}/></Link></Reveal><Reveal delay={.08} className={design.guideHeroArt}><ResourceArt item={featured} large/></Reveal></header>
   <ResourceBento/>
   <section id="guide-library" className="scroll-mt-32 pb-16" aria-label="Guides library"><div className={styles.heading}><h2>Choose the work<br/>you want to get right.</h2><p>Each guide follows a complete process, with decisions, practical checks and a sensible place to start.</p></div><div className={design.guideLibrary}><ResourceLibrary items={items}/></div></section>
  </>:<>
   <header className={design.caseHeader}><Reveal><p className={styles.eyebrow}>Work in practice</p><h1>Different businesses.<br/>A clearer working day.</h1></Reveal><p>Explore how a focused workspace could bring a business process together, from the first challenge to the next useful step.</p></header>
   <div className={design.caseCount}><span>06 illustrative workflows</span><span>One focused example for each Melorite product</span></div>
   <Reveal className={design.caseSpotlight}><div className={design.caseSpotlightArt}><ResourceArt item={featured} large/></div><div className={design.caseSpotlightCopy}><p className={styles.eyebrow}>Featured example · Real Estate</p><h2>{featured.title}</h2><p>Buyer requirements, visit notes and booking decisions, brought into one shared working view.</p><Link href={resourceHref(featured)} className="pill pill-dark">Explore the workflow<ArrowUpRight size={15}/></Link></div></Reveal>
   <p className={styles.note}>Illustrative examples · These are fictional business scenarios, not verified customer stories. Proposed setups and intended outcomes are explained without claiming customer results.</p>
   <CaseJourney items={items.slice(0,3)}/>
   <section className={styles.section} aria-label="Case Studies library"><div className={design.caseLibrary}><ResourceLibrary items={items}/></div></section>
   <section className={styles.section}><div className={styles.heading}><h2>Look beyond the feature.<br/>Follow the work.</h2><p>Every example connects a business challenge to a proposed process. Use it to ask better questions about your own setup.</p></div><div className={design.threeSteps}>{[[Users,'The people','Who needs the context, who decides and who acts next?'],[Layers,'The information','Which records must stay together for the process to work?'],[GitBranch,'The handoff','What tells the next person that the work is ready to move?']].map(([Icon,title,copy])=>{const I=Icon as typeof Users;return <div key={title as string}><I size={23}/><h2>{title as string}</h2><p>{copy as string}</p></div>;})}</div></section>
  </>}
  <section className={design.folderBand}><h2>{isBlog?'Keep a few good ideas together.':isGuide?'Your next step, collected.':'Find a workflow close to yours.'}</h2><FolderCollections collections={[{label:'Sales & conversations',art:'aurora' as const,files:items.filter(item=>['crm','ai-calling'].includes(item.product)).map(item=>({name:item.title,meta:item.category,href:resourceHref(item)}))},{label:'People & places',art:'glacier' as const,files:items.filter(item=>['real-estate','clinic'].includes(item.product)).map(item=>({name:item.title,meta:item.category,href:resourceHref(item)}))},{label:'Clients & commerce',art:'dusk' as const,files:items.filter(item=>['agency','commerce'].includes(item.product)).map(item=>({name:item.title,meta:item.category,href:resourceHref(item)}))}].filter(folder=>folder.files.length)}/></section>
 </div><FinalCTA title={isBlog?'Take the idea into your working day.':isGuide?'Bring your workflow to life.':'Let’s talk about your business.'} text="Explore the Melorite product that fits your team in a focused demo."/></div></PageTransition>;
}
