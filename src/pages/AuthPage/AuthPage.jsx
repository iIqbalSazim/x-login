import { StyledAuthPageContainer, StyledHeroContainer } from "./AuthPageStyles";
import AuthContainer from "./Components/AuthContainer/AuthContainer";
import Footer from "./Components/Footer/Footer";
import Logo from "./Components/Logo/Logo";

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
