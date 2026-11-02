const features = [
  { icon: '🔥', title: 'Roasted to order', text: 'Every bag is roasted the week it ships, never sitting on a shelf.' },
  { icon: '🌍', title: 'Direct from farms', text: 'We pay farmers above fair-trade prices and share every origin story.' },
  { icon: '📦', title: 'Flexible delivery', text: 'Weekly, bi-weekly or monthly. Change it in two clicks, anytime.' },
  { icon: '♻️', title: 'Compostable bags', text: 'Plastic-free packaging that goes straight into your compost bin.' },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Brewly</span>
          <h2>Better coffee, without the effort</h2>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <article key={f.title} className="feature">
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
