"use client";

import { useMemo, useState } from "react";

const TIERS = {
  "Below 300": 12,
  "300–3000": 9,
  "Above 3000": 6,
};

export default function PricingCalculator() {
  const [tier, setTier] = useState("");

  const price = useMemo(() => (tier ? TIERS[tier] : null), [tier]);

  return (
    <div className="pricing-calculator">
      <div>
        <div className="calc-field">
          <label htmlFor="users">Number of users</label>
          <select id="users" value={tier} onChange={(e) => setTier(e.target.value)}>
            <option value="">Select an option</option>
            {Object.keys(TIERS).map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <p style={{ fontSize: "1.4rem", color: "var(--darkergrey)" }}>
          Per-user pricing varies by volume. Tailored pricing available for non-desk users.
        </p>
        <a href="#" className="btn" style={{ marginTop: "1.6rem" }}>Book an intro</a>
      </div>
      <div className="calc-result">
        {price ? (
          <>
            <div className="amount">${price}</div>
            <div className="note">indicative, per user / month</div>
          </>
        ) : (
          <div className="note">Select an option above to see indicative pricing</div>
        )}
      </div>
    </div>
  );
}
