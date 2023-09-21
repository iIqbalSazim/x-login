import { StyledLogoImage, StyledLogoWrapper } from "./LogoStyles";
import x from "./Assets/x.png";

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <StyledLogoImage src={x} alt="x-logo" />
    </StyledLogoWrapper>
  );
};

export default Logo;
