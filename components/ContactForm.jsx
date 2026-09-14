"use client";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="work-email">Work email*</label>
      <div className="contact-form-row">
        <input id="work-email" type="email" required placeholder="name@work-email.com" />
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
  );
}
