import { StyledAuthPageContainer, StyledHeroContainer } from "./AuthPageStyles";
import AuthContainer from "./AuthContainer/AuthContainer";
import Footer from "./Footer/Footer";
import Logo from "./Logo/Logo";

const AuthPage = () => {
  return (
    <StyledAuthPageContainer>
      <StyledHeroContainer>
        <Logo />
        <AuthContainer />
      </StyledHeroContainer>
      <Footer />
    </StyledAuthPageContainer>
  );
};

export default AuthPage;
