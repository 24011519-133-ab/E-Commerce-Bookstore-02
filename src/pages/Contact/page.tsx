const Contact = () => (
  <div className="contact-page">
    <div className="contact-hero">
      <h1>Get In Touch</h1>
      <p>We&apos;d love to hear from you</p>
    </div>

    <div className="contact-layout">
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Book inquiry" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} placeholder="Tell us what you think..." />
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <span>📍</span>
          <div>
            <h4>Visit Us</h4>
            <p>123 Book Street<br />New York, NY 10001</p>
          </div>
        </div>
        <div className="info-item">
          <span>📧</span>
          <div>
            <h4>Email Us</h4>
            <p>hello@bookhaven.com</p>
          </div>
        </div>
        <div className="info-item">
          <span>📞</span>
          <div>
            <h4>Call Us</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
