import React from 'react';


import  '../../Assets/style/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
      </h1>
      <div className="row">
        <form action="row">
          <input type="text" placeholder="nom" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="numéro" className="box" />
          <textarea name="" className="box" placeholder="message" id="" cols={30} rows={10}></textarea>
          <input type="submit" value="envoyer message" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
