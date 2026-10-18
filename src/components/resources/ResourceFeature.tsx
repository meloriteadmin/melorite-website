import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resourceHref, type Resource } from "@/data/resources";
import { ResourceArt, resourceType, readingTime } from "./ResourceArt";
import styles from "@/components/editorial/Editorial.module.css";
export function ResourceFeature({ item }: { item: Resource }) {
  return <div className={styles.feature}><Link className={`${styles.featureVisual} relative`} href={resourceHref(item)} aria-label={`Read ${item.title}`}><ResourceArt item={item} large /></Link><div className={styles.featureCopy}><div className={styles.meta}>{item.category} · {resourceType(item)} · {readingTime(item)}</div><h2><Link href={resourceHref(item)}>{item.title}</Link></h2><p>{item.description}</p><Link href={resourceHref(item)}><span className="pill pill-dark">{item.kind === 'case-studies' ? 'Explore the example' : item.kind === 'guides' ? 'Read the guide' : 'Read the article'}<ArrowUpRight size={16} /></span></Link></div></div>;
}
