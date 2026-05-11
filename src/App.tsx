import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Header from './components/Header/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Services from './pages/Services/page';
import Contact from './pages/Contact/page';
import Shop from './pages/Shop/page';
import Cart from './pages/Cart/page';
import About from './pages/About/page';

// ===== HOME COMPONENT DATA =====
const features = [
  { icon: '📦', title: 'Free Shipping', description: 'On all orders over $35' },
  { icon: '📖', title: 'Curated Choice', description: 'Hand-picked by experts' },
  { icon: '✨', title: 'New Releases', description: 'Get early access' }
];

const categories = [
  { icon: '📖', title: 'Fiction', subtitle: '120+ books' },
  { icon: '📜', title: 'Classics', subtitle: '85+ books' },
  { icon: '✨', title: 'Fantasy', subtitle: '65+ books' },
  { icon: '🔍', title: 'Mystery', subtitle: '45+ books' }
];

const bestsellers = [
  { image: '/images/1984.jpeg', title: '1984', author: 'George Orwell', price: '$12.99' },
  { image: '/images/alchemist.jpeg', title: 'The Alchemist', author: 'Paulo Coelho', price: '$14.99' },
  { image: '/images/mockingbird.jpeg', title: 'Mockingbird', author: 'Harper Lee', price: '$11.99' },
  { image: '/images/dune.jpeg', title: 'Dune', author: 'Frank Herbert', price: '$15.99' }
];

const testimonials = [
  { quote: 'Amazing collection! Fast shipping and great prices.', name: 'Sarah Johnson' },
  { quote: 'Best online bookstore! Found all my favorite classics.', name: 'Michael Chen' },
  { quote: 'Love the curated selections. Always find something great!', name: 'Emma Davis' }
];

// ===== HOME COMPONENT =====
const Home = () => (
  <>
    <Header
      title="Escape Into a New World"
      subtitle="From timeless classics to modern bestsellers, find your next favorite story."
      buttonText="Browse Services →"
      buttonLink="/services"
    />

    <div className="features-grid">
      {features.map((item) => (
        <div key={item.title} className="feature-card">
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>

    <div className="categories-section">
      <div className="container">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map((item) => (
            <Link key={item.title} to="/services" className="category-card">
              <span className="category-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

    <div className="bestsellers-section">
      <div className="container">
        <h2>📚 Best Sellers</h2>
        <div className="bestsellers-grid">
          {bestsellers.map((book) => (
            <div key={book.title} className="bestseller-card">
              <div className="bestseller-img">
                <img src={book.image} alt={book.title} />
              </div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <span className="bestseller-price">{book.price}</span>
              <button className="btn" type="button">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/services" className="btn">
            View All Books →
          </Link>
        </div>
      </div>
    </div>

    <div className="about-home">
      <div className="about-image">
        <img src="/images/books1.jpeg" alt="Bookstore" />
      </div>
      <div className="about-text">
        <h2>Our Story</h2>
        <p>
          BookHaven started as a small passion project and grew into a beloved online bookstore. We are committed to bringing the joy of reading to book lovers everywhere.
        </p>
        <Link to="/services" className="btn">
          Learn More →
        </Link>
      </div>
    </div>

    <div className="testimonials-section">
      <div className="container">
        <h2>What Readers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card">
              <div className="quote">"</div>
              <p>{item.quote}</p>
              <div className="customer">
                <strong>- {item.name}</strong>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="newsletter-section">
      <div className="container">
        <h2>Join Our Newsletter</h2>
        <p>Get 10% off your first order and exclusive book recommendations.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" aria-label="Email address" />
          <button className="btn" type="button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </>
);

// ===== MAIN APP COMPONENT =====
const App = () => (
  <>
    <Navbar />
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
    <Footer />
  </>
);

export default App;