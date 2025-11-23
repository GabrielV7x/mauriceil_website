import "../styles/contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h1>Ready to Upgrade Your Space?</h1>
        <h2>Tell us about your project and get a personalised quotation.</h2>
        <a
          href="https://wa.me/23057359640?text=Hello!%20I%20would%20like%20to%20request%20a%20quotation."
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
