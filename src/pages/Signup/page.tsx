import { Link } from 'react-router-dom';

const Signup = () => (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Create Account</h2>
      <p>Join BookHaven today</p>
      <form className="auth-form">
        <div className="form-field">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-field">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <div className="form-field">
          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn auth-btn">
          Sign Up
        </button>
      </form>
      <div className="auth-footer">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  </div>
);

export default Signup;
