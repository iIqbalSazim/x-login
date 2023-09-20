import { footerData } from "../data/data.js";

const Footer = () => {
  return (
    <footer>
      {footerData.map((el) => (
        <div key={el.title}>{el.title}</div>
      ))}
    </footer>
  );
};

export default Footer;
