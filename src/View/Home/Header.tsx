import React from 'react'
import { Link } from 'react-router-dom'
import "../../Assets/style/Home.css"
export default function Header() {
  return (
    <div>
        <section className="home" id="home">
        <div className="content">
            <h3>Bonjour, Bienvenue</h3>
            <span>Dans notre site de préduction de rêve..</span>
            <p>Le rêve est une « disposition de l'esprit généralement nocturne, survenant au cours du sommeil, et 
              qui procure à l'individu éveillé des souvenirs nommés eux aussi rêves ».</p>
            <Link to="/" className="btn">Explorer maintenant</Link>
        </div>
    </section>
    </div>
  )
}
