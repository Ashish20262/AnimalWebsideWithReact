import '../styles/Hero.css';
import img from "../assets/images/Herosection.png";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100 g-4">
          {/* Left Column - Text */}
          <div className="col-lg-6 col-12 order-2 order-lg-1 ps-lg-5 pe-3 ps-3">
            <div className="hero-content">
              <h1 className="hero-title fw-bold mb-4">
                Where Every Pet Gets the Royal Treatment
              </h1>
              <p className="hero-description mb-5">
                Welcome to Paws & Play, where we believe every furry friend deserves pampering and care. Our expert groomers provide professional grooming services tailored to keep your pet looking and feeling their best.
              </p>
              <div className="hero-buttons d-flex flex-column flex-sm-row gap-3">
                <button className="btn btn-primary btn-lg btn-book rounded-pill px-5">
                  Book an Appointment
                </button>
                <button className="btn btn-outline-primary btn-lg rounded-pill px-5">
                  View Services
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 col-12 order-1 order-lg-2 pe-lg-5 px-3">
            <div className="hero-image-container">
              <img
                src={img}
                alt="Happy Dog"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
