export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="pill">🌱 Ethically sourced · Roasted weekly</span>
          <h1>
            Fresh coffee,
            <br />
            <em>delivered</em> to your door.
          </h1>
          <p className="lead">
            Specialty beans from small farms, roasted to order and shipped within 48 hours.
            Pause, skip or cancel anytime.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn">Choose your plan</a>
            <a href="#how" className="btn btn-outline">How it works</a>
          </div>
          <ul className="hero-stats">
            <li><strong>12k+</strong><span>happy sippers</span></li>
            <li><strong>4.9★</strong><span>average rating</span></li>
            <li><strong>30+</strong><span>partner farms</span></li>
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="bag">
            <span className="bag-label">BREWLY</span>
            <span className="bag-sub">Ethiopia · Yirgacheffe</span>
            <span className="bag-notes">jasmine · peach · honey</span>
          </div>
          <div className="cup">☕</div>
          <div className="badge-float">Free shipping</div>
        </div>
      </div>
    </section>
  );
}
