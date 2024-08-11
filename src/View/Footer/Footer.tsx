import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineLock, AiOutlineFileText } from 'react-icons/ai';
import '../../Assets/style/Footer.css';

interface FooterProps {
    // Définissez ici les props spécifiques à votre pied de page
  }
  
  const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
        <div>
          <h3>Informations de contact</h3>
          <p><FaEnvelope />user@example.com</p>
          <p><FaPhone />+2610020131</p>
        </div>
        <div>
          <h3>Liens utiles</h3>
          <ul>
            <li><AiOutlineInfoCircle /> <a href="/about">À propos</a></li>
            <li><AiOutlineLock /> <a href="/privacy">Politique de confidentialité</a></li>
            <li><AiOutlineFileText /> <a href="/terms">Conditions d'utilisation</a></li>
          </ul>
        </div>
        <div>
          <p>© 2023 Notre Institut Indépendance . Tous droits réservés.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
