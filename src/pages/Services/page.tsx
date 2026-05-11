import { Link } from 'react-router-dom';
import Header from '../../components/Header/page';

const services = [
  { icon: '📚', title: 'Curated Collections', description: 'Expert book selections for every mood.' },
  { icon: '🚚', title: 'Fast Delivery', description: 'Quick shipping across the United States.' },
  { icon: '🎁', title: 'Gift Wrapping', description: 'Perfect presentation for every gift.' },
  { icon: '💬', title: 'Personal Recommendations', description: 'Custom reading suggestions.' }
];

const Services = () => (
  <>
    <Header
      title="Services That Help You Read More"
      subtitle="From curated selections to express delivery, find the service that fits your reading life."
      buttonText="Contact Support →"
      buttonLink="/contact"
    />

    <div className="features-grid">
      {services.map((item) => (
        <div key={item.title} className="feature-card">
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>

    <div className="about-home">
      <div className="about-image">
        <img src="/images/books1.jpeg" alt="Reading services" />
      </div>
      <div className="about-text">
        <h2>Why BookHaven Services?</h2>
        <p>
          We blend thoughtful book curation with modern convenience. Whether you want a surprise recommendation, express delivery, or a wrapped gift set, we make it easy.
        </p>
        <Link to="/contact" className="btn">
          Talk to Us →
        </Link>
      </div>
    </div>
  </>
);

export default Services;
