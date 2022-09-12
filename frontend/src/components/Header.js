import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      {/* <Link to="/">Home</Link>
      {user ? <p onClick={logoutUser}>Logout</p> : <Link to="/login">Login</Link>}
       {user ? <p onClick={logoutUser}>Logout, {user.username}</p> : <Link to="/login" />} */}
      {user ? (
        <nav className="navbar">
          <div>
            <img className="logo" src="./assets/images/pc.png" />

            <div className="navbar-right">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <p onClick={logoutUser}>Logout, {user.username}</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <Link to="/login" />
      )}
    </div>
  );
};

export default Header;
