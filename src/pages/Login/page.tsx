import { Link } from 'react-router-dom';

const Login = () => (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Welcome Back</h2>
      <p>Login to your account</p>
      <form className="auth-form">
        <div className="form-field">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn auth-btn">
          Login
        </button>
      </form>
      <div className="auth-footer">
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  </div>
);

export default Login;
