import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Cart', to: '/cart' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' }
];

const Navbar = () => (
  <nav>
    <Link to="/">
      <h2>
        Book<span>Haven</span>
      </h2>
    </Link>
    <ul>
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
