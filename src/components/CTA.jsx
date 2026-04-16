import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <h2 className="cta-title fw-bold mb-4">Ready to Pamper Your Pet?</h2>
        <p className="cta-description mb-5">
          Give your beloved companion the spa experience they deserve. Book your appointment today and let our expert groomers work their magic!
        </p>
        <button className="btn btn-cta rounded-pill fw-bold px-5 py-3">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default CTA;
