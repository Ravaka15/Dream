import React from "react";
import "../../Assets/style/Registre.css";

export default function Registre() {
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form>
        <h2>Création de compte</h2>
        <div className="inputBoxs">
          <div className="inputBox">
            <input type="text" />
            <span>Nom</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required={true} />
            <span>Prénom</span>
            <i></i>
          </div>
        </div>
        <div className="inputBoxs">
          <div className="inputBox">
            <input type="date" required={true} />
            <span>Date naissance</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required={true} />
            <span>E-mail</span>
            <i></i>
          </div>
        </div>
        <div className="inputBoxs">
          <div className="inputBox">
            <input type="password" required={true} />
            <span>Mot de passe</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required={true} />
            <span>Confirmer mot de passe</span>
            <i></i>
          </div>
        </div>
        <div className="inputBoxImage">
          <input type="file" required={true} className="inputImage"/>
          <div>
          <span className="imagespan">Confirmer mot de passe</span>
          </div>
          <i></i>
        </div>
        <div className="links">
          <input type="submit" value="Creér" />
          <div className="links">
            <a href="./login.html">Se connecter</a>
          </div>
        </div>
      </form>
    </div>
  );
}
