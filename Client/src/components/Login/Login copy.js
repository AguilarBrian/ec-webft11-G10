import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app,{facebookAuthProvider} from "./base.js";
import { AuthContext } from "./Auth.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      console.log(email,password)
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  
  const handleFaceAuth = () => {
    app
    .auth()
    .signInWithPopup(facebookAuthProvider)
    .then(({ user }) => {
      console.log(user)
      history.push("/");

    })
    .catch((e) => {
      alert(e);
    });
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <button
        onClick={handleFaceAuth}
      >

        Iniciar sesión con Facebook
            </button>
      
    </div>
  );
};

export default withRouter(Login);
