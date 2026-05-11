import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },        // ← ADD THIS
  { label: 'About', to: '/about' },      // ← ADD THIS
  { label: 'Contact', to: '/contact' },  // ← Already there
  { label: 'Cart', to: '/cart' },        // ← ADD THIS
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' }
];

const Footer = () => (
  <footer>
    <div className="footer-content">
      <h3>
        Book<span>Haven</span>
      </h3>
      <p>Your sanctuary for the world's most inspiring stories.</p>
      <div className="footer-links">
        {footerLinks.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 BookHaven Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;