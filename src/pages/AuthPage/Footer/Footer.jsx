import { footerData } from "./Data/Data.js";
import { StyledDiv, StyledFooter } from "./Footer.styles.jsx";

const Footer = () => {
  return (
    <StyledFooter>
      {footerData.map((el) => (
        <StyledDiv key={el.title}>{el.title}</StyledDiv>
      ))}
    </StyledFooter>
  );
};

export default Footer;
