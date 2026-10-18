import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageTransition } from "@/components/animation/PageTransition";
import styles from "./ContactMinimal.module.css";

export function ContactEditorial() {
  return <PageTransition><div className={styles.page}><Breadcrumbs items={[{name:"Contact"}]}/><div className={styles.wrap}>
    <header className={styles.header}><p>Contact Melorite</p><h1>Let’s talk about<br/>what comes next.</h1><span>A question, an idea or a process you’d like to improve.<br/>We’d love to hear about it.</span></header>
    <section className={styles.layout} id="contact" aria-label="Contact our team">
      <aside className={styles.aside}><h2>A direct line<br/>to our team.</h2><p>Tell us what you’re working on. We’ll help you find the right place to start.</p>
        <div className={styles.details}>{site.contact.email&&<a href={`mailto:${site.contact.email}`}><Mail size={19}/><span><small>Email</small>{site.contact.email}</span><ArrowUpRight size={17}/></a>}{site.contact.phone&&<a href={`tel:+91${site.contact.phone}`}><Phone size={19}/><span><small>Phone</small>+91 {site.contact.phone}</span><ArrowUpRight size={17}/></a>}</div>
        <div className={styles.social}><h3>Elsewhere</h3>{site.social.map(s=><a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}<ArrowUpRight size={14}/></a>)}</div>
        <div className={styles.demo}><span>Prefer a walkthrough?</span><Link href="/book-demo">Book a product demo<ArrowUpRight size={16}/></Link></div>
      </aside>
      <div className={styles.form}><div className={styles.formHeading}><span>01 / Start a conversation</span></div><ContactForm defaultType="sales"/></div>
    </section>
    <footer className={styles.note}><span>Products & demos</span><span>Custom workflows</span><span>Partnerships & enquiries</span></footer>
  </div></div></PageTransition>;
}
