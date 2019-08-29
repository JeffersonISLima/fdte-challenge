import "./Navbar.css";
import React from "react";
import logo from "./images/logo.png";
import FormField from "../FormField";

const image = {
  logo: <img className="mainsection__img-logo" src={logo} alt="Nayara Marra" />
};

const Navbar = () => {
  return (
    <>
      <header className="header">
        <strong>MEUS PEDIDOS</strong>
        <strong>ENTRAR / CADASTRE-SE</strong>
      </header>

      <section className="mainsection">
        <div className="mainsection__search">
          <FormField
            type="search"
            placeholder="Digite o que você procura..."
            className="mainsection__search__form-field"
          />
          <i className="fas fa-search"></i>
        </div>

        <div>
          <figure>{image.logo}</figure>
        </div>

        <div className="mainsection__list-wish">
          <i className="fas fa-heart"></i>
          <h4>LISTA DE DESEJOS</h4>
          <i className="fas fa-shopping-bag"></i>
          <h5>02 Items</h5>
        </div>
      </section>

      <section>
        <nav>
          <ul className="secondsection">
            <li>NOVIDADE</li>
            <li>ANÉIS</li>
            <li>BRINCOS</li>
            <li>COLARES</li>
            <li>CONJUNTOS</li>
            <li className="secondsection__sales">SALES</li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
