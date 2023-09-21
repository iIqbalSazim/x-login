import { footerData } from "./Data/Data.js";
import { StyledFooterItem, StyledFooter } from "./FooterStyles";

const Footer = () => {
  return (
    <StyledFooter>
      {footerData.map((el) => (
        <StyledFooterItem key={el.title}>{el.title}</StyledFooterItem>
      ))}
    </StyledFooter>
  );
};

export default Footer;
