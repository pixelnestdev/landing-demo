const reviews = [
  { quote: 'I stopped buying café coffee. The Ethiopian roast is unreal.', name: 'Sara M.', role: 'Daily plan' },
  { quote: 'Our whole team looks forward to delivery day. Skipping a month is so easy.', name: 'Omar R.', role: 'Office plan' },
  { quote: 'Finally coffee that tastes like the tasting notes say. Fresh every time.', name: 'Lena K.', role: 'Taster plan' },
];

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Reviews</span>
          <h2>Loved by coffee people</h2>
        </div>
        <div className="review-grid">
          {reviews.map((r) => (
            <figure key={r.name} className="review">
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{r.name[0]}</span>
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
