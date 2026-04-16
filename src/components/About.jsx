import { FaCheckCircle, FaShieldAlt, FaLeaf, FaHeart } from 'react-icons/fa';
import '../styles/About.css';
import img1 from "../assets/images/About.jpg"

const About = () => {
  const features = [
    {
      id: 1,
      icon: FaCheckCircle,
      title: 'Certified Groomers',
      description: 'Our team consists of certified professional groomers with years of experience in pet care.'
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: 'Safe & Clean',
      description: 'We maintain the highest hygiene standards with sanitized equipment and clean facilities.'
    },
    {
      id: 3,
      icon: FaLeaf,
      title: 'Premium Products',
      description: 'All grooming products are gentle, organic, and safe for your beloved pet\'s skin.'
    },
    {
      id: 4,
      icon: FaHeart,
      title: 'Personalized Care',
      description: 'Each pet receives individualized attention tailored to their unique needs and personality.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Column - Image */}
          <div className="col-lg-6 col-12 order-2 order-lg-1">
            <div className="about-image-container">
              <img
                src={img1}
                alt="Professional Pet Grooming"
                className="about-image"
              />
              <div className="about-image-badge">15+ Years of Excellence</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 col-12 order-1 order-lg-2 ps-lg-4">
            <div className="about-content">
              {/* Label */}
              <span className="about-label">About Us</span>

              {/* Main Heading */}
              <h2 className="about-title fw-bold mb-4">
                We Treat Your Pets Like Family
              </h2>

              {/* Description Paragraphs */}
              <p className="about-paragraph">
                At Paws & Play, we believe every pet deserves the best care and attention. With over 15 years of experience in professional pet grooming, our team is dedicated to making your furry friends look and feel their absolute best.
              </p>

              <p className="about-paragraph">
                We combine expert grooming techniques with a gentle, compassionate approach. Our state-of-the-art facilities and premium products ensure that your pet receives safe, comfortable, and enjoyable grooming experience every single time.
              </p>

              <p className="about-paragraph">
                Our mission is simple: to provide exceptional pet care services that exceed your expectations and strengthen the bond between you and your beloved companion.
              </p>

              {/* Features Grid */}
              <div className="features-grid mt-5">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={feature.id} className="feature-box">
                      <div className="feature-icon-wrapper">
                        <IconComponent className="feature-icon" />
                      </div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
