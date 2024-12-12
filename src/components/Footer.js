import AboutClass from "./AboutClass";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">Copyright 2024</div>
      <div className="social-media">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
        <AboutClass />
      </div>
    </div>
  );
};

export default Footer;
