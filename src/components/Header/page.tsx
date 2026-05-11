import { Link } from 'react-router-dom';

type HeaderProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

const Header = ({ title, subtitle, buttonText, buttonLink }: HeaderProps) => (
  <div className="hero">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <Link to={buttonLink} className="btn">
      {buttonText}
    </Link>
  </div>
);

export default Header;
