import x from "./Assets/x.png";
import { AuthPageContainer, HeroContainer } from "./AuthPage.styles";
import Footer from "./Footer/Footer";

const AuthPage = () => {
  return (
    <AuthPageContainer>
      <HeroContainer>
        <div>
          <img src={x} alt="x-logo" />
        </div>
        <section>
          <h1>Happening now</h1>
          <h2>Join today.</h2>
          <div>
            <button>Sign up with Google</button>
            <button>Sign up with Apple</button>
            <div>
              <span />
              or
              <span />
            </div>
            <button>Create account</button>
            <p>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <h3>Already have an account?</h3>
            <button>Sign in</button>
          </div>
        </section>
      </HeroContainer>
      <Footer />
    </AuthPageContainer>
  );
};

export default AuthPage;
