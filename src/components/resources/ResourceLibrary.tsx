"use client";
import { useState } from "react";
import { LayoutGrid, List, Search, X } from "lucide-react";
import type { Resource } from "@/data/resources";
import { ResourceCard } from "./ResourceCards";
import styles from "@/components/editorial/Editorial.module.css";
export function ResourceLibrary({ items }: { items: Resource[] }) {
  const [topic, setTopic] = useState('All');
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const topics = ['All', ...new Set(items.map(item => item.category))];
  const filtered = items.filter(item => (topic === 'All' || item.category === topic) && `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <div data-view={view}>
    <div className={styles.toolbar}><div className={styles.filters} aria-label="Filter resources by topic">{topics.map(label => <button type="button" key={label} aria-pressed={topic === label} onClick={() => setTopic(label)}>{label}</button>)}</div>
      <div className={styles.tools}><label className={styles.search}><Search size={16} color="#929098" /><input aria-label="Search resources" placeholder="Search resources" value={query} onChange={event => setQuery(event.target.value)} />{query && <button type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={14} /></button>}</label><button type="button" className={styles.viewButton} aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => setView('grid')}><LayoutGrid size={17} /></button><button type="button" className={styles.viewButton} aria-label="List view" aria-pressed={view === 'list'} onClick={() => setView('list')}><List size={18} /></button></div>
    </div>
    <p className="sr-only" role="status" aria-live="polite">{filtered.length} resources found</p>
    {filtered.length ? <div className={view === 'grid' ? styles.grid : styles.list}>{filtered.map(item => <ResourceCard key={item.slug} item={item} />)}</div> : <div className={styles.empty}><h3>No resources found.</h3><p className="mt-3">Try another topic or search term.</p><button className="pill pill-dark mt-6" type="button" onClick={() => { setQuery(''); setTopic('All'); }}>Reset filters</button></div>}
  </div>;
}
