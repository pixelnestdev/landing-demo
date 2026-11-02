import { useState } from 'react';

const faqs = [
  { q: 'Can I pause or cancel my subscription?', a: 'Yes. Pause, skip a delivery or cancel anytime from your account, with no fees.' },
  { q: 'Do you offer ground coffee?', a: 'Yes. Choose whole beans or a grind for espresso, filter, French press or moka pot.' },
  { q: 'How fresh is the coffee?', a: 'We roast every Monday and ship within 48 hours, so beans reach you within days of roasting.' },
  { q: 'Where do you deliver?', a: 'We currently ship across the country with free standard delivery on every plan.' },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions? We've got answers</h2>
        </div>
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-a" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
