import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import "../../Assets/style/Home.css";
import myVideo from "../../Assets/style/ba.mp4";
import telma from "../../Assets/img/Telma.jpg";
import ingonesya from "../../Assets/img/ingenosya.png";
import ibonia from "../../Assets/img/Ibonia.png";
import pulse from "../../Assets/img/Pulse.png";
import Modal from "../Modal/Modal";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const modalContenu = (
    <>
      <h1>Mon contenu de modal</h1>
      <button onClick={handleCloseModal}>Fermer</button>
    </>
  );
  return (
    <><div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        children={modalContenu} />
    </div><div className="homes">
        <section className="home" id="home">
          <div className="content">
            <h3> Bienvenue chez Onirix </h3>
            <span>Dans notre site de prédiction de rêve..</span>
            <p>
              Le rêve est une « disposition de l'esprit généralement nocturne,
              survenant au cours du sommeil, et qui procure à l'individu éveillé
              des souvenirs nommés eux aussi rêves ».
            </p>
            <button className="btn" onClick={handleOpenModal}>
              Commencer
            </button>
          </div>
          {/* Add the video tag here */}
          <video className="video-container" autoPlay loop muted>
            <source src={myVideo} type="video/mp4" />
          </video>
        </section>

        <section className="about" id="about">
          <h1 className="heading">A propos</h1>
          <div className="row">
            <div className="video-container">
              <h3>Meilleur video</h3>
            </div>
            <div className="content">
              <h3>Pourquoi nous choisir?</h3>
              <p>
                Au cours de l'histoire et des civilisations, le rêve a été un
                moyen de s'affranchir du temps et de l'espace ordinaires, pour
                accéder au surnaturel, aux ancêtres, au divin, ou encore comme un
                moyen de guérison, de connaissance et de révélation.
              </p>
              <p>
                L'approche rationnelle et scientifique en fait un processus ancré
                dans le corps et lié à l'activité cérébrale au cours du sommeil.
                Le rêve pose toujours la question de son sens et de sa
                signification, ou de son rôle et de sa fonction (approches
                philosophique, psychodynamique, neurobiologique…).
              </p>
              <Link to="/" className="btn">
                Apprendre mieux
              </Link>
            </div>
          </div>
        </section>
        <section className="icons-container">
          <div className="icons">
            <img src={pulse} alt="Pulse" />
            <div className="info">
              <h3>Pulse</h3>
              <span>Antananarivo</span>
            </div>
          </div>

          <div className="icons">
            <img src={ingonesya} alt="Ingonesya" />
            <div className="info">
              <h3>Ingonesya</h3>
              <span>Antananarivo</span>
            </div>
          </div>

          <div className="icons">
            <img src={telma} alt="Telma" />
            <div className="info">
              <h3>Telma</h3>
              <span>Madagscar</span>
            </div>
          </div>

          <div className="icons">
            <img src={ibonia} alt="Ibonia" />
            <div className="info">
              <h3>Ibonia</h3>
              <span>Antananarivo</span>
            </div>
          </div>
        </section>
        <section className="card" id="card">
          <h1 className="heading">Poster Vos rêves</h1>
          <div className="box-container">
            <div className="box">
              <div className="content">
                <Link to="/Historique">
                  <h3>De votre cauchemar...</h3>
                </Link>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <Link to="/Historique">
                  <h3>De votre peur..</h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div></>
  );
};

export default Home;
