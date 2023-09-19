import "./App.css";
import x from "./assets/x.png";

function App() {
  return (
    <body>
      <main className="auth-page">
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
              <span className="line"></span>
              or
              <span className="line"></span>
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
      <footer>This is the footer</footer>
    </body>
  );
}

export default App;
