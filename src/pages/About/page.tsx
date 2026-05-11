import { Link } from 'react-router-dom';

const About = () => (
  <>
    <div className="hero">
      <h1>About BookHaven</h1>
      <p>Your sanctuary for the world's most inspiring stories</p>
      <Link to="/shop" className="btn">
        Browse Our Books →
      </Link>
    </div>

    <div className="about-mission">
      <div className="container">
        <div className="mission-icon">📚</div>
        <h2>Our Mission</h2>
        <p>
          At BookHaven, we believe that books have the power to change lives. Founded in 2026, our mission is to provide a curated selection of literature that inspires, educates, and entertains readers of all ages.
        </p>
      </div>
    </div>

    <div className="about-values">
      <div className="container">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">📖</div>
            <h3>Quality</h3>
            <p>Every book hand-picked by literary experts</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Community</h3>
            <p>Building a global family of book lovers</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Accessibility</h3>
            <p>Making great books affordable for everyone</p>
          </div>
        </div>
      </div>
    </div>

    <div className="about-story">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <img src="/images/books1.jpeg" alt="BookHaven Bookstore" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              BookHaven started as a small passion project and grew into a beloved online bookstore. We're committed to bringing the joy of reading to book lovers everywhere. What started in a small office has now become a thriving community of readers across the globe.
            </p>
            <Link to="/shop" className="btn">
              Start Reading Today →
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="about-stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Happy Readers</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">500+</div>
            <div className="stat-label">Books Available</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">25+</div>
            <div className="stat-label">Expert Authors</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Customer Rating</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
