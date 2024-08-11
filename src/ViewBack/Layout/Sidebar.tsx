import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/style/Sidebar.css";


import logo from "../../Assets/img/Logo.png";
const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">  
     <img src={logo} alt="Logo" className="logo_img" />
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <Link to="/" className="sidebar-nav-link">
            Accueil
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/users" className="sidebar-nav-link">
            Utilisateurs
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/posts" className="sidebar-nav-link">
            Articles
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/comments" className="sidebar-nav-link">
            Commentaires
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/settings" className="sidebar-nav-link">
            Paramètres
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
