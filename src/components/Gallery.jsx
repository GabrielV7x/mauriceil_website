import "../styles/gallery.scss";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h1>Our Recent Work</h1>
        <h2>A glimpse of the spaces we’ve designed and transformed.</h2>
      </div>
      <div className="gallery-images">
        <div className="gallery-item">
          <img src="/gallery1.jpg" alt="Project 1" />
        </div>
        <div className="gallery-item gal2">
          <img src="/gallery2.jpg" alt="Project 2" />
        </div>
        <div className="gallery-item">
          <img src="/gallery3.jpg" alt="Project 3" />
        </div>
      </div>
    </section>
  );
}
