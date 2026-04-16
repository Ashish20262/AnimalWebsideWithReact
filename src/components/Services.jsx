import { services } from '../data';
import '../styles/Services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title fw-bold mb-3">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive grooming and care services tailored to keep your beloved pet happy and healthy
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12">
              <div className="service-card">
                {/* Image Container */}
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-price-badge">{service.price}</div>
                </div>

                {/* Card Content */}
                <div className="service-content">
                  <h3 className="service-title fw-bold mb-2">{service.title}</h3>
                  <p className="service-description mb-4">{service.description}</p>

                  {/* Features List */}
                  <ul className="service-features mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="btn btn-service-cta w-100 rounded-pill fw-bold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
