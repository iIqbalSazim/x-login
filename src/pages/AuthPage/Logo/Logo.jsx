import { LogoImage, LogoWrapper } from "./Logo.styles";
import x from "./Assets/x.png";

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={x} alt="x-logo" />
    </LogoWrapper>
  );
};

export default Logo;
