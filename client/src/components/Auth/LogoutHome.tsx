import { GoogleLogout } from "react-google-login";

export const LogoutHome: React.FC<any> = () => {
  const ClientId =
    "405202156046-ebo84inhdjh5ljigfvgj6t0t9ag3ilh4.apps.googleusercontent.com";

  const OnSucces = (): void => {
    alert("Loged Out Successfully....");
  };

  return (
    <div>
      <GoogleLogout
        clientId={ClientId}
        buttonText="Logout"
        onLogoutSuccess={OnSucces}
      ></GoogleLogout>
    </div>
  );
};
