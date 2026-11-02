const steps = [
  { title: 'Take the taste quiz', text: 'Tell us how you brew and what flavours you love. It takes 60 seconds.' },
  { title: 'We roast your beans', text: 'Your coffee is matched to your taste and roasted fresh that week.' },
  { title: 'Brew & enjoy', text: 'It arrives at your door. Rate each bag and we keep getting better.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps to your best cup</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
