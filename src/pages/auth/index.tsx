import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import SignInButton from "../../components/SignInButton";

function AuthPage() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    window.addEventListener("message", async event => {
      if (
        event.source === window &&
        (event.data.type === "LOGIN_ERROR" ||
          event.data.type === "LOGIN_SUCCESS" ||
          event.data.type === "NO_USER")
      ) {
        setStatus(
          event.data.type === "LOGIN_ERROR"
            ? "error"
            : event.data.type === "LOGIN_SUCCESS"
            ? "success"
            : "no-user"
        );
      }
    });
  }, []);
  return (
    <>
      <div className="yaba-auth">
        <div className="yaba-auth-container">
          <div
            className={`yaba-auth__header ${
              status === "success" ? "centered" : ""
            }`}
          >
            {status !== "success" && (
              <div className="yaba-auth__header-logo">
                <Logo color="#fff" bg="#1e1e1e" />
              </div>
            )}

            <div className="yaba-auth__header-text">
              <h1>
                {status === "success" ? "You are logged in" : "Welcome to Yaba"}
              </h1>
              <p>
                {status === "success"
                  ? "Yaba is now ready to use."
                  : "Sign in to continue"}
              </p>
            </div>
          </div>

          <div className="yaba-auth__description">
            <p>
              Set reminders, create bookmarks, collaborate through your
              workspaces, and more.
            </p>
          </div>
          {status === "success" ? (
            <button
              onClick={() =>
                window.postMessage({ type: "CLOSE_YABA_AUTH" }, "*")
              }
              className="yaba-auth-closeTab-btn"
            >
              Close Tab
            </button>
          ) : (
            <SignInButton setStatus={setStatus} />
          )}

          {status === "error" && (
            <p className="error-message">
              Something went wrong. Please try again
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
