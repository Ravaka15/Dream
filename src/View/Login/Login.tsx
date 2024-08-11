import React, { useState } from "react";
import "../../Assets/style/Login.css";
import { Link } from 'react-router-dom';
import LoginViewModel from "../../ViewModel/LoginViewModel";
import { checkUser } from "../../Model/Api/Login";


export default function Login() {
  const defaultPayload:checkUser = {
    email:"",
    password:""
  } 
  const [payload,setPayload] = useState<checkUser>(defaultPayload);
  console.log(payload);
  const { login } = LoginViewModel();

  return (
    <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={()=> login(payload)}>
            <h2>Se connecter</h2>
            <div className="inputBox">
                <input 
                 type="text"
                 required={true} 
                 onChange={(e:any) => setPayload({...payload, email: e.target.value})}/>
                <span>E-mail</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" 
                  required={true} 
                  onChange={(e:any) => setPayload({...payload, password: e.target.value})}/>
                <span>Mot de passe</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Mot de passe oublier</a>
                <Link to="./Registre">Creér un compte</Link>
            </div>
            <input type="submit" value="Login" />
            </form>
             
    </div>
  );
}
