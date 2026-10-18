import { ProductSymbol } from "@/components/brand/ProductSymbol";
import Image from "next/image";
import { productBySlug } from "@/data/products";
import type { Resource } from "@/data/resources";
import { GuideCover } from "./GuideCover";
import styles from "./ResourceDesign.module.css";
const positions: Record<string, number> = { crm: 0, "real-estate": 1, clinic: 2, agency: 3, commerce: 4, "ai-calling": 5 };
export function resourceCover(item: Resource) { return `/resources/cover-${positions[item.product] ?? 0}.svg`; }
export function resourceType(item: Resource) { return item.kind === "blog" ? "Article" : item.kind === "guides" ? "Guide" : "Illustrative example"; }
export function readingTime(item: Resource) { return `${Math.max(2, Math.ceil(item.sections.flatMap(part => [...part.paragraphs, ...part.steps]).join(' ').split(/\s+/).length / 200))} min read`; }
export function ResourceArt({ item, large = false }: { item: Resource; large?: boolean }) {
 const product = productBySlug(item.product)!;
 return <div className={`${styles.art} ${item.kind==='guides'?`${styles.guideArt} ${styles["motif"+(positions[item.product]??0)]}`:item.kind==='case-studies'?styles.caseArt:styles.blogArt}`}>
  <Image src={resourceCover(item)} alt="" aria-hidden width={1200} height={720} priority={large}/>
  <span className={styles.artBrand}>melorite / {item.kind==='blog'?'journal':item.kind==='guides'?'field guides':'work in practice'}</span>
  <ProductSymbol slug={item.product} className={styles.artSymbol}/><span className={styles.artTitle}>{product.short}</span>
  {item.kind==='guides'&&<GuideCover product={item.product} title={product.short}/>}
  {item.kind==='case-studies'&&<span className={styles.path}>{['Challenge','Workflow','Next step'].map((label,i)=><span key={label}><small>0{i+1}</small>{label}</span>)}</span>}
  <span className={styles.artFoot}>{item.kind==='guides'?'A practical, step-by-step guide':item.kind==='case-studies'?'Illustrative business scenario':'Perspectives for the working day'}<span>↗</span></span>
 </div>;
}
