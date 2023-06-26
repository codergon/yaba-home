import { useGoogleLogin } from "@react-oauth/google";
import Icons from "./Icons";

interface SignInButtonProps {
  setStatus: (status: string) => void;
}

function SignInButton({ setStatus }: SignInButtonProps) {
  const googleLogin = useGoogleLogin({
    flow: "implicit",
    // Get othercontacts and profile scope
    scope:
      "https://www.googleapis.com/auth/contacts.other.readonly https://www.googleapis.com/auth/userinfo.profile",
    onSuccess: async codeResponse => {
      const accessToken = codeResponse?.access_token;

      if (accessToken) {
        const fetchOtherContacts = fetch(
          "https://people.googleapis.com/v1/otherContacts?readMask=emailAddresses,names,photos",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const fetchUserProfile = fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        Promise.all([fetchOtherContacts, fetchUserProfile])
          .then(([otherContactsResponse, userProfileResponse]) =>
            Promise.all([
              otherContactsResponse.json(),
              userProfileResponse.json(),
            ])
          )
          .then(([otherContactsData, userProfileData]) => {
            window.postMessage(
              { type: "LOGIN_DATA", otherContactsData, userProfileData },
              "*"
            );
          })
          .catch(e => setStatus("error"));
      }
    },

    onError: e => setStatus("error"),
  });

  return (
    <button
      className="yaba-auth-signin-btn"
      onClick={() => {
        googleLogin();
      }}
    >
      <Icons.GoogleLogo />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
