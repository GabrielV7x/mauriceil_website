import "../styles/services.scss";

export default function Services() {
  return (
    <section id="services" className="services">
      {/* Top image */}
      <div className="services-image">
        <img src="/services.jpg" alt="Services" />
      </div>

      {/* Content */}
      <div className="services-content">
        <h1>What We Offer</h1>
        <ul>
          <li>False Ceilings</li>
          <li>Gypsum & PVC Partitions</li>
          <li>Interior Renovation</li>
          <li>Decorative Ceiling Designs</li>
          <li>Acoustic Ceilings</li>
          <li>Lighting Integration</li>
          <li>Painting & Finishing</li>
        </ul>
      </div>
    </section>
  );
}
