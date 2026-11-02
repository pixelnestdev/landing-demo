import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | done

  function handleSubmit(e) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? 'done' : 'error');
    if (valid) setEmail('');
  }

  return (
    <section id="newsletter" className="section">
      <div className="container">
        <div className="cta">
          <h2>Get 20% off your first bag</h2>
          <p>Join our newsletter for brewing tips, new origins and members-only offers.</p>
          {status === 'done' ? (
            <p className="cta-done" role="status">🎉 You're in! Check your inbox for your discount code.</p>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                aria-invalid={status === 'error'}
                aria-describedby="email-error"
              />
              <button type="submit" className="btn btn-light">Claim discount</button>
            </form>
          )}
          {status === 'error' && (
            <p id="email-error" className="cta-error" role="alert">Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </section>
  );
}
