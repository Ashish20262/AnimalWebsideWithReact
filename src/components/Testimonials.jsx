import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { testimonialsData } from '../testimonialsData';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const itemsPerView = 3;

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % (testimonialsData.length - itemsPerView + 1 || 1)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonialsData.length - itemsPerView
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % (testimonialsData.length - itemsPerView + 1 || 1)
    );
  };

  const handleMouseEnter = () => setIsAutoPlay(false);

  const handleMouseLeave = () => setIsAutoPlay(true);

  const getVisibleTestimonials = () => {
    if (testimonialsData.length <= itemsPerView) {
      return testimonialsData;
    }
    return testimonialsData.slice(currentIndex, currentIndex + itemsPerView);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`star-icon ${index < rating ? 'star-filled' : 'star-empty'}`}
      />
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title fw-bold mb-3">What Pet Parents Say</h2>
          <p className="section-subtitle">
            Hear from our happy clients and their beloved pets
          </p>
        </div>

        {/* Testimonials Container */}
        <div
          className="testimonials-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Button - Previous */}
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            &#10094;
          </button>

          {/* Testimonials Grid */}
          <div className="testimonials-wrapper">
            <div className="row g-4">
              {getVisibleTestimonials().map((testimonial) => (
                <div key={testimonial.id} className="col-lg-4 col-md-6 col-12">
                  <div className="testimonial-card">
                    {/* Rating */}
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="testimonial-review">{testimonial.review}</p>

                    {/* Divider */}
                    <div className="testimonial-divider"></div>

                    {/* Author Info */}
                    <div className="testimonial-author">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="author-image"
                      />
                      <div className="author-info">
                        <h5 className="author-name">{testimonial.name}</h5>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Button - Next */}
          <button
            className="carousel-btn carousel-btn-next"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            &#10095;
          </button>
        </div>

        {/* Carousel Indicators */}
        {testimonialsData.length > itemsPerView && (
          <div className="carousel-indicators mt-4">
            {Array.from({
              length: testimonialsData.length - itemsPerView + 1
            }).map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${
                  index === currentIndex ? 'active' : ''
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
