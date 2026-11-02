import { useState } from 'react';

const plans = [
  { name: 'Taster', monthly: 14, bags: '1 bag / month', perks: ['250g specialty beans', 'Tasting notes card', 'Free shipping'] },
  { name: 'Daily', monthly: 26, bags: '2 bags / month', perks: ['2 × 250g beans', 'Choose grind size', 'Free shipping', 'Skip anytime'], popular: true },
  { name: 'Office', monthly: 48, bags: '4 bags / month', perks: ['4 × 250g beans', 'Mix of origins', 'Priority delivery', 'Team brew guide'] },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = (m) => (yearly ? Math.round(m * 0.8) : m);

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans, no surprises</h2>
          <div className="toggle" role="group" aria-label="Billing period">
            <button className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>
              Yearly <span className="save">−20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((p) => (
            <article key={p.name} className={`plan ${p.popular ? 'plan-popular' : ''}`}>
              {p.popular && <span className="plan-tag">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="plan-bags">{p.bags}</p>
              <p className="plan-price">
                <span>${price(p.monthly)}</span>/month
              </p>
              <ul>
                {p.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <a href="#newsletter" className={`btn ${p.popular ? '' : 'btn-outline'}`}>
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
