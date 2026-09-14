"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem("cookie-consent", "1");
    } catch {}
    setShow(false);
  };

  return (
    <div className={`cookie-consent${show ? " show" : ""}`}>
      <div className="cookie-modal">
        <div className="emoji">🍪</div>
        <h4>Cookies</h4>
        <p>
          We and selected partners use cookies or similar technologies as specified in the cookie policy.
          You can consent to the use of such technologies by closing this notice, by interacting with any
          link or button outside of this notice or by continuing to browse otherwise. <a href="#">Learn more</a>
        </p>
        <a href="#" className="btn" onClick={(e) => { e.preventDefault(); dismiss(); }}>Accept</a>
        <a href="#" className="necessary-only" onClick={(e) => { e.preventDefault(); dismiss(); }}>Only necessary cookies</a>
      </div>
    </div>
  );
}
