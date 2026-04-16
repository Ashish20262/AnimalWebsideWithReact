import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaUser, FaTag } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petType: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      petName: '',
      petType: '',
      service: '',
      message: ''
    });
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const newClientCards = [
    {
      id: 1,
      icon: FaCheckCircle,
      title: 'Vaccination Records',
      description: 'Please bring or provide your pet\'s vaccination and medical records for their first visit.'
    },
    {
      id: 2,
      icon: FaClock,
      title: 'Arrive 15 Minutes Early',
      description: 'Please arrive 15 minutes early to complete necessary paperwork and settle your pet in.'
    },
    {
      id: 3,
      icon: FaTag,
      title: 'New Client Discount',
      description: 'Enjoy 15% off your first grooming service as a new client. Use code: PAWSPLAY15'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How long does a typical grooming appointment take?',
      answer: 'A standard grooming appointment typically takes 2-4 hours depending on your pet\'s breed, coat condition, and the services requested. We\'ll provide you with a more accurate time estimate based on your pet\'s specific needs.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, cash, and digital payment methods like Apple Pay and Google Pay. We also offer convenient online booking and payment through our website.'
    },
    {
      id: 3,
      question: 'Do you offer boarding services?',
      answer: 'Yes! We offer premium boarding services with comfortable accommodations, regular feeding, playtime, and individual attention. Our facility is climate-controlled and monitored 24/7 for your peace of mind.'
    },
    {
      id: 4,
      question: 'What should I do if my pet has special health conditions?',
      answer: 'Please inform us about any health conditions, allergies, or special needs when booking. We recommend providing medical documentation and discussing the best grooming approach with our professional groomers during your consultation.'
    },
    {
      id: 5,
      question: 'Can I stay with my pet during grooming?',
      answer: 'For most pets, we recommend allowing them to adjust to our professional groomers. However, anxious or aggressive pets may need special handling. Please discuss your pet\'s temperament with us when booking so we can provide the best experience.'
    },
    {
      id: 6,
      question: 'How often should my pet be groomed?',
      answer: 'Grooming frequency depends on your pet\'s breed and coat type. Generally, most pets benefit from grooming every 4-8 weeks. Long-haired breeds may need more frequent grooming. Our experts can recommend a schedule during your first visit.'
    }
  ];

  return (
    <section id="contact">
    <div className="contact-page">
      {/* SECTION 1: Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you! Reach out to us for any questions, bookings, or special requests.
          </p>
        </div>
      </section>

      {/* SECTION 2: Contact Section - 2 Columns */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Column - Form */}
            <div className="col-lg-6 col-md-12">
              <div className="contact-form-wrapper">
                <h2 className="form-title fw-bold mb-4">Book an Appointment</h2>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Pet Name Field */}
                  <div className="mb-4">
                    <label htmlFor="petName" className="form-label">Pet's Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      placeholder="Enter your pet's name"
                      required
                    />
                  </div>

                  {/* Pet Type Dropdown */}
                  <div className="mb-4">
                    <label htmlFor="petType" className="form-label">Pet Type</label>
                    <select
                      className="form-select form-select-lg"
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select Pet Type --</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="bird">Bird</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Service Dropdown */}
                  <div className="mb-4">
                    <label htmlFor="service" className="form-label">Service Interested In</label>
                    <select
                      className="form-select form-select-lg"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select Service --</option>
                      <option value="grooming">Full Grooming</option>
                      <option value="bath">Bath & Dry</option>
                      <option value="nails">Nail Trim</option>
                      <option value="daycare">Daycare</option>
                      <option value="boarding">Boarding</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Additional Information</label>
                    <textarea
                      className="form-control form-control-lg"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us anything specific about your pet or request..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-submit rounded-pill fw-bold px-5 py-3 w-100">
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="col-lg-6 col-md-12">
              {/* Contact Information Card */}
              <div className="contact-info-card mb-5">
                <h2 className="info-title fw-bold mb-4">Contact Information</h2>

                {/* Email */}
                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label fw-bold">Email</h4>
                    <p className="contact-value">
                      <a href="mailto:info@pawsandplay.com">info@pawsandplay.com</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label fw-bold">Phone</h4>
                    <p className="contact-value">
                      <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label fw-bold">Hours</h4>
                    <p className="contact-value">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="map-wrapper mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601492346874!3d40.71282511110279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e6d312d1%3A0xf0631ff928467c8c!2s123%20Pet%20Street%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Address */}
              <div className="address-text text-center">
                <p className="text-muted">
                  <strong>123 Pet Street</strong><br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: New Client Information */}
      <section className="new-client-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold mb-3">Welcome New Clients!</h2>
            <p className="section-subtitle">
              Here's what you need to know before your first visit
            </p>
          </div>

          {/* Cards Grid */}
          <div className="row g-4">
            {newClientCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div key={card.id} className="col-lg-4 col-md-6 col-12">
                  <div className="new-client-card">
                    <div className="card-icon">
                      <IconComponent />
                    </div>
                    <h4 className="card-title fw-bold">{card.title}</h4>
                    <p className="card-description">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <div className="accordion accordion-custom" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${faq.id}`}
                        aria-expanded={index === 0 ? true : false}
                        aria-controls={`faq${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`faq${faq.id}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Box */}
      <section className="final-cta-section py-5">
        <div className="container">
          <div className="cta-box">
            <h3 className="cta-title fw-bold mb-3">Still Have Questions?</h3>
            <p className="cta-text mb-4">
              Don't hesitate to reach out. Our friendly team is here to help answer any questions you may have.
            </p>
            <button className="btn btn-cta-contact rounded-pill fw-bold px-5 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
};

export default Contact;
