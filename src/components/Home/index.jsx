import "./Home.css";
import React from "react";
import Button from "../Button";
import Carousel from "../Carousel";
import ring from "./images/ring.jpg";
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

const img = {
  line: <img src={line} alt={line} />,
  modelFour: <img src={modelFour} alt={modelFour} />,
  modelFive: <img src={modelFive} alt={modelFive} />,
  instaIcon: <img src={instaIcon} alt={instaIcon} />,
  fingerRing: <img src={fingerRing} alt={fingerRing} />,
  earringsGold: <img src={earringsGold} alt={earringsGold} />,
  ring: <img style={{ width: "55%" }} src={ring} alt={ring} />,
  necklace: <img style={{ width: "80%" }} src={necklace} alt={necklace} />,
  earrings: <img style={{ width: "80%" }} src={earrings} alt={earrings} />,
};

const Home = () => {
  return (
    <>
      <section className="">
        <Carousel />
      </section>

      <section>
        <div className="payments__background">
          <div className="payments__container">
            <h6>
              <i className="fas fa-truck"></i>FRETE GRÁTIS ACIMA DE R$ 200,00
            </h6>
            <h6>
              <i className="fas fa-money-check-alt"></i>ATÉ 10X SEM JUROS
            </h6>
            <h6>
              <i className=" payments__container--circle-percent fas fa-percent"></i>
              10% OFF À VISTA NO CARTÃO OU BOLETO
            </h6>
            <h6>
              <i className="fas fa-lock"></i>SEGURANÇA EM TODAS ETAPAS DA COMPRA
            </h6>
          </div>
        </div>
      </section>

      <figure className="figure__models__main">
        <img src={modelOne} alt="Model Claritas Irium" />
        <img src={modelTwo} alt="Model Adhemas Ades" />
      </figure>

      <main className="main border">
        <figure>
          <img
            src={modelTree}
            alt="Domenico Dhe"
            className="main__model--domenico-dhe"
          />
        </figure>

        <div className="main__jewel">
          <div className="main__jewel--ring">
            <figure>{img.ring}</figure>
            <div className="main__shop">
              <h2>ANÉIS</h2>
              <Button className="main__btn">SHOP NOW</Button>
            </div>
          </div>

          <div className="main__jewel--errings border">
            <figure>{img.earrings}</figure>
            <div className="main__shop">
              <h2>BRINCOS</h2>
              <Button className="main__btn">SHOP NOW</Button>
            </div>
          </div>

          <div className="main__jewel--necklace">
            <figure>{img.necklace}</figure>
            <div className="main__shop">
              <h2>COLARES</h2>
              <Button className="main__btn">SHOP NOW</Button>
            </div>
          </div>
        </div>

        <div>
          <img src={img.line} alt="Linha Lançamentos" />
          <h2>LANÇAMENTOS</h2>
        </div>

        <div>
          <div>
            <figure>
              <img src={img.fingerRing} alt="Ring on a finger" />
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
              <img src={img.fingerRing} alt="Ring on a finger" />
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
              <img src={img.fingerRing} alt="Ring on a finger" />
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

        <section>
          <div>
            <figure>{img.modelFour}</figure>
          </div>

          <div>
            <figure>{img.modelFive}</figure>
            <figure>{img.earringsGold}</figure>
          </div>
        </section>

        <section>
          <img src={img.instaIcon} alt="Icon Instagram" />
          <h2>@NAYARAMARRA</h2>
        </section>

        <section>
          <h1>CAROUSEL HEREEE</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
         