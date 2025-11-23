import "../styles/hero.scss";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay">
        <h1>Transforming Spaces with Precision</h1>
        <h2>Ceilings, Partitions. Excellence.</h2>
        <p>
          We create modern, durable and perfectly finished interiors for homes,
          offices and commercial spaces.
        </p>
        <button className="hero-btn" onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}>
          Request a Quote
        </button>
      </div>
    </section>
  );
}
