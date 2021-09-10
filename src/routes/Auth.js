import { authService, firebaseInstance } from "fbase";
import React from "react";
import AuthForm from "components/AuthForm";
import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubeAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="container">
      <FontAwesomeIcon icon={faTwitter} size="3x" color="#0fbcf9" />
      <AuthForm />
      <div className="socialBtn">
        <button onClick={onSocialClick} name="google">
          Continue with Google
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with GitHub
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};

export default Auth;
