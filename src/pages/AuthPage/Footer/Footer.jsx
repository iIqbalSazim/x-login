import { footerData } from "./Data/Data.js";
import { FooterDiv, StyledFooter } from "./Footer.styles.jsx";

const Footer = () => {
  return (
    <StyledFooter>
      {footerData.map((el) => (
        <FooterDiv key={el.title}>{el.title}</FooterDiv>
      ))}
    </StyledFooter>
  );
};

export default Footer;
