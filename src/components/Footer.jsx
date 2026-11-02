export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">☕</span> Brewly
        </a>
        <nav className="footer-links">
          <a href="#features">Why Brewly</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <p className="footer-note">
          Demo landing page built by{' '}
          <a href="https://pixelnestdev.github.io/portfolio/" target="_blank" rel="noreferrer">PixelNest</a>.
          Brewly is a fictional brand.
        </p>
      </div>
    </footer>
  );
}
