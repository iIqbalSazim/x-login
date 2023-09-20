import x from "./Assets/x.png";
import { StyledAuthPageContainer, StyledHeroContainer } from "./AuthPageStyles";
import AuthContainer from "./AuthContainer/AuthContainer";
import Footer from "./Footer/Footer";

const AuthPage = () => {
  return (
    <StyledAuthPageContainer>
      <StyledHeroContainer>
        <div>
          <img src={x} alt="x-logo" />
        </div>
        <AuthContainer />
      </StyledHeroContainer>
      <Footer />
    </StyledAuthPageContainer>
  );
};

export default AuthPage;
