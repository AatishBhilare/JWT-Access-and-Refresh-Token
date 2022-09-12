import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      {/* <p>LOGIN Page</p>
      <form classNameName="login-form" onSubmit={loginUser}>
        <input classNameName="inputBox" type="text" name="username" placeholder="Enter Username" />
        <input classNameName="inputBox" type="password" name="password" placeholder="Enter Password" />

        <input type="submit" />
      </form> */}

    <section className="main">
        <div className="login-container">
            <p className="title">Login Here</p>

            <div className="separator"></div><br/>

            <form className="login-form" onSubmit={loginUser}>
               
                <div className="form-control">
                    <input type="text" placeholder="Username" name="username" required />
                    <i className="fas fa-user"></i>
                </div>
                <div className="form-control">
                    <input type="password" placeholder="Password" name="password" required />
                    <i className="fas fa-lock"></i>
                </div>

                <button className="submit">Login</button>
            </form>          

        </div>
    </section>
    </div>
  );
};

export default LoginPage;
