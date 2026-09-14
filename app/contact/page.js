import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Talk to Melorite" };
export default function ContactPage() { return <section className="page-hero"><div className="container"><Reveal as="div" className="contact-form-block"><div><span className="eyebrow">Melorite</span><h1>Talk to us</h1><p className="lede">Tell us about the parts of your business you want to connect. We will help you identify a focused starting point and a path to expand.</p></div><ContactForm /></Reveal></div></section>; }
