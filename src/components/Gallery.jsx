import { galleryData } from '../galleryData';
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title fw-bold mb-3">Our Happy Clients</h2>
          <p className="section-subtitle text-">
            Meet the adorable pets who trust us with their grooming and care
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {galleryData.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-12">
              <div className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay"></div>
                  <h3 className="gallery-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
