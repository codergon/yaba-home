import Logo from "../../components/Logo";
import SignInButton from "../../components/SignInButton";

function AuthPage() {
  return (
    <>
      <div className="yaba-auth">
        <div className="yaba-auth-container">
          <div className="yaba-auth__header">
            <div className="yaba-auth__header-logo">
              <Logo color="#fff" bg="#1e1e1e" />
            </div>

            <div className="yaba-auth__header-text">
              <h1>
                Welcome to{" "}
                <span className="yaba-auth__header-text--bold">Yaba</span>
              </h1>
              <p>Sign in to continue</p>
            </div>
          </div>

          <div className="yaba-auth__descrption">
            <p>
              Enhance your browsing experience with feature-rich bookmark
              management.
            </p>
          </div>
          <SignInButton />
        </div>
      </div>
    </>
  );
}

export default AuthPage;
