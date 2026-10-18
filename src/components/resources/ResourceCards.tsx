import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";
import { resourceHref, type Resource } from "@/data/resources";
import { ResourceArt, resourceType, readingTime } from "./ResourceArt";
import styles from "@/components/editorial/Editorial.module.css";
export function ResourceCard({ item }: { item: Resource }) {
  return <article className={styles.resourceCard}>
    <Link className={styles.cover} href={resourceHref(item)} aria-label={`Read ${item.title}`}><ResourceArt item={item} /></Link>
    <div className={styles.meta}>{item.category} · {resourceType(item)} · {readingTime(item)}</div>
    <h3><Link href={resourceHref(item)}>{item.title}</Link></h3>
    <p>{item.description}</p>
  </article>;
}
export function ResourceCards({ items }: { items: Resource[] }) {
  return <div className={styles.grid}>{items.map((item, i) => <Reveal key={item.slug} delay={(i % 3) * .04}><ResourceCard item={item} /></Reveal>)}</div>;
}
