import React from "react";
import "./loginLogout.css";
import Input from "../../components/input";
import { Link } from "react-router-dom";

const LoginLogout = () => {
  return (
    <div className="login-container">
      <div className="content">
        <div className="main">
          <div className="title">
            <h1>Bienvenu !</h1>
            <span>Nous sommes tres ravi de vous revoir une fois de plus!</span>
          </div>
          <div className="body">
            <div className="input">
              <Input lblName="Nom d'utilisateur" name="user" />
            </div>
            <div className="input">
              <Input
                lblName="Mot de passe"
                name="user-password"
                type="password"
              />
              <Link to="#" className="forgotten">
                Mot de passe oublie ?
              </Link>
            </div>

            <div className="btn">
              <button className="submit-btn">Connexion</button>
            </div>
          </div>
        </div>
        <div className="aside">
          <div className="anim"></div>
          <span className="title">Gestion des eleves !</span>
          <span>La securite des eleves et ecoliers, notre priorite.</span>
        </div>
      </div>
    </div>
  );
};

export default LoginLogout;
