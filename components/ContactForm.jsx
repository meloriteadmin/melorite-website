"use client";

export default function ContactForm({ demo = false }) {
  return <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
    <div className="contact-form-grid"><label>First name<input required name="firstName" autoComplete="given-name" /></label><label>Last name<input required name="lastName" autoComplete="family-name" /></label></div>
    <label>Work email<input required name="email" type="email" autoComplete="email" placeholder="name@company.com" /></label>
    <div className="contact-form-grid"><label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label><label>Company<input required name="company" autoComplete="organization" /></label></div>
    <div className="contact-form-grid"><label>Company size<select name="companySize"><option>1-50</option><option>51-200</option><option>201-1,000</option><option>1,001+</option></select></label><label>Industry<select name="industry"><option>Choose an industry</option><option>Real estate</option><option>Healthcare</option><option>Professional services</option><option>Retail</option><option>Manufacturing</option><option>Other</option></select></label></div>
    <label>{demo ? "What would you like to manage?" : "What are you looking for?"}<textarea name="message" rows="4" placeholder={demo ? "CRM, Finance, HR, Projects, Operations, or multiple areas" : "Tell us a little about your requirements"} /></label>
    <button type="submit" className="btn">{demo ? "Get started" : "Contact Melorite"}</button>
  </form>;
}
