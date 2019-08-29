import React from "react";
import logo from "./images/logo.png";
import FormField from "../FormField";

const image = {
  logo: <img src={logo} alt="Nayara Marra" />
};

const Navbar = () => {
  return (
    <>
      <header>
        <strong>MEUS PEDIDOS</strong>
        <strong>ENTRAR/CADASTRE-SE</strong>
      </header>

      <section>
        <div>
          <FormField placeholder="Digite o que você procura..." />
          <i className="fas fa-search"></i>
        </div>

        <div>
          <figure>{image.logo}</figure>
        </div>

        <div>
          <i className="fas fa-heart"></i>
          <h3>LISTA DE DESEJOS</h3>
          <i className="fas fa-shopping-bag"></i>
          <h5>02 Items</h5>
        </div>

        <div>
          <nav>
            <ul>
              <li>NOVIDADE</li>
              <li>ANÉIS</li>
              <li>BRINCOS</li>
              <li>COLARES</li>
              <li>CONJUNTOS</li>
              <li>SALES</li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
