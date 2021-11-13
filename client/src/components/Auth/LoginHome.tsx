import React from "react";
import { GoogleLogin } from "react-google-login";

const ClientId = "";

interface Props {
  login: any;
}

export const LoginHome: React.FC<Props> = (props: Props) => {
  const OnSuccess = (res: any): void => {
    console.log("Login Success....", res);
    props.login(true);
  };

  const OnFailure = (res: any): void => {
    console.log("Login Failes....");
  };

  return (
    <div>
      <GoogleLogin
        clientId={ClientId}
        buttonText="Login"
        onSuccess={OnSuccess}
        onFailure={OnFailure}
        cookiePolicy="single_host_origin"
        style={{ margin: "200px" }}
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
};
