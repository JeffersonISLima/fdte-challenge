import "./Home.css";
import React from "react";
import Button from "../Button";
import Carousel from '../Carousel';
import ring from "./images/ring.png";
import earrings from "./images/earrings.png";
import necklace from "./images/necklace.png";
import line from "./images/detail_title.png";
import instaIcon from "./images/ico-insta.png";
import modelTwo from "./images/adhemas-ades.png";
import modelTree from "./images/domenico-dhe.png";
import fingerRing from "./images/finger-ring.png";
import modelOne from "./images/claritas-irium.png";
import earringsGold from "./images/otera-norem.png";
import modelFive from "./images/adhemas-ades-02.png";
import modelFour from "./images/claritas-irium-02.png";


const Home = () => {
  return (
    <>
      <section className="">
        <Carousel />
      </section>

      <section>
        <div className="payments">
          <h6>
            <i className="fas fa-truck"></i>FRETE GRÁTIS ACIMA DE R$ 200,00
          </h6>
          <h6>
            <i className="fas fa-money-check-alt"></i>ATÉ 10X SEM JUROS
          </h6>
          <div id="burst-12">
            <i className="fas fa-percent"></i>
          </div>{" "}
          <h6>10% OFF À VISTA NO CARTÃO OU BOLETO</h6>
          <h6>
            <i className="fas fa-lock"></i>SEGURANÇA EM TODAS ETAPAS DA COMPRA
          </h6>
        </div>

        <figure>
          <img src={modelOne} alt="Model Claritas Irium" />
          <img src={modelTwo} alt="Model Adhemas Ades" />
        </figure>

        <figure>
          <img src={modelTree} alt="Domenico Dhe" />
        </figure>

        <div>
          <div>
            <figure>{ring}</figure>
            <h2>ANÉIS</h2>
            <Button className="">SHOP NOW</Button>
          </div>

          <div>
            <figure>{earrings}</figure>
            <h2>BRINCOS</h2>
            <Button className="">SHOP NOW</Button>
          </div>

          <div>
            <figure>{necklace}</figure>
            <h2>COLARES</h2>
            <Button className="">SHOP NOW</Button>
          </div>
        </div>

        <div>
          <img src={line} alt="Linha Lançamentos" />
          <h2>LANÇAMENTOS</h2>
        </div>

        <div>
          <div>
            <figure>
              <img src={fingerRing} alt="Ring on a finger" />
            </figure>
            <h2>LOREM IPSUM DOLOR SIT AMET</h2>
            <h2>CLARITAS ADHEMAS</h2>
            <div>
              <h4> R$ 1040.00</h4>
              <h3>R$ 900.00</h3>
            </div>
            <div>
              <h6> 2x de R$ 450,00 sem juros</h6>
            </div>
            <Button className="">COMPRAR</Button>
          </div>

          <div>
            <figure>
              <img src={fingerRing} alt="Ring on a finger" />
            </figure>
            <h2>LOREM IPSUM DOLOR SIT AMET</h2>
            <h2>CLARITAS ADHEMAS</h2>
            <div>
              <h4> R$ 1040.00</h4>
              <h3>R$ 900.00</h3>
            </div>
            <div>
              <h6> 2x de R$ 450,00 sem juros</h6>
            </div>
            <Button className="">COMPRAR</Button>
          </div>

          <div>
            <figure>
              <img src={fingerRing} alt="Ring on a finger" />
            </figure>
            <h2>LOREM IPSUM DOLOR SIT AMET</h2>
            <h2>CLARITAS ADHEMAS</h2>
            <div>
              <h4> R$ 1040.00</h4>
              <h3>R$ 900.00</h3>
            </div>
            <div>
              <h6> 2x de R$ 450,00 sem juros</h6>
            </div>
            <Button className="">COMPRAR</Button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <figure>{modelFour}</figure>
        </div>

        <div>
          <figure>{modelFive}</figure>
          <figure>{earringsGold}</figure>
        </div>
      </section>

      <section>
        <img src={instaIcon} alt="Icon Instagram" />
        <h2>@NAYARAMARRA</h2>
      </section>

      <section>
        <h1>CAROUSEL HEREEE</h1>
      </section>
    </>
  );
};

export default Home;
