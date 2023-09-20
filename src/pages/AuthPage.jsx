import x from "../assets/x.png";
import Footer from "../components/Footer";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <main>
        <div className="x-wrapper">
          <img src={x} alt="x-logo" />
        </div>
        <section className="auth-container">
          <h1>Happening now</h1>
          <h2>Join today.</h2>
          <div className="button-group">
            <button>Sign up with Google</button>
            <button>Sign up with Apple</button>
            <div className="or-divider">
              <span className="line" />
              or
              <span className="line" />
            </div>
            <button className="create-account">Create account</button>
            <p className="terms-of-service">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <h3>Already have an account?</h3>
            <button className="sign-in">Sign in</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
