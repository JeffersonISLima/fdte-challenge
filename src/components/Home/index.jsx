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
  modelFour: <img src={modelFour} alt={modelFour} />,
  modelFive: <img src={modelFive} alt={modelFive} />,
  earringsGold: <img src={earringsGold} alt={earringsGold} />,
  ring: <img style={{ width: "55%" }} src={ring} alt={ring} />,
  necklace: <img style={{ width: "80%" }} src={necklace} alt={necklace} />,
  earrings: <img style={{ width: "80%" }} src={earrings} alt={earrings} />
};

const lastCarousel = [
  "./images/img1.png",
  "./images/img2.png",
  "./images/img3.png",
  "./images/img4.png",
  "./images/img5.png",
  "./images/img6.png",
];

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

      <main className="main">
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

          <div className="main__jewel--errings">
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

        <div className="launch">
          <img src={line} alt="Linha Lançamentos" />
          <h2>LANÇAMENTOS</h2>
        </div>

        <section className="launch__row">
          <i
            className="fas fa-chevron-left"
            style={{
              marginTop: "20%",
              fontSize: "40px"
            }}
          >
          </i>
          <div className="launch__column">
            <figure className="launch__column--img">
              <img
                src={fingerRing}
                alt="Ring on a finger"
                className="launch__column--img"
              />
              <div className="launch__column--img-offer">
                <h3>50%</h3>
                <h4>OFF</h4>
              </div>
              <div className="launch__column--img-bgcolor-opacity"></div>
              <div className="launch__column--img-spy">
                <h3>
                  <i className="fas fa-eye"></i>ESPIAR
                </h3>
              </div>
            </figure>

            <h2 className="launch__column--title">
              LOREM IPSUM DOLOR SIT AMET <br /> CLARITAS ADHEMAS
            </h2>
            <div className="launch__column--price-container">
              <h4 style={{ textDecoration: "line-through" }}> R$ 1040.00</h4>
              <h3>R$ 900.00</h3>
            </div>
            <div>
              <h6 className="launch__column--payment-method">
                {" "}
                2x de R$ 450,00 sem juros
              </h6>
            </div>
            <Button className="launch__column--btn">COMPRAR</Button>
          </div>

          <div className="launch__column">
            <figure className="launch__column--img">
              <img src={fingerRing} alt="Ring on a finger" />
              <div className="launch__column--img-bgcolor-opacity"></div>

              <div className="launch__column--img-spy">
                <h3>
                  <i className="fas fa-eye"></i>ESPIAR
                </h3>
              </div>
            </figure>

            <h2 className="launch__column--title">
              LOREM IPSUM DOLOR SIT AMET <br /> CLARITAS ADHEMAS
            </h2>
            <div className="launch__column--price-container">
              <h4 style={{ textDecoration: "line-through" }}> R$ 1040.00</h4>
              <h3>R$ 900.00</h3>
            </div>
            <div>
              <h6 className="launch__column--payment-method">
                {" "}
                2x de R$ 450,00 sem juros
              </h6>
            </div>
            <Button className="launch__column--btn">COMPRAR</Button>
          </div>

          <div className="launch__column">
            <figure className="launch__column--img">
              <img src={fingerRing} alt="Ring on a finger" />
              <div className="launch__column--img-bgcolor-opacity"></div>
              <div className="launch__column--img-spy">
                <h3>
                  <i className="fas fa-eye"></i>ESPIAR
                </h3>
              </div>
            </figure>

            <h2 className="launch__column--title">
              LOREM IPSUM DOLOR SIT AMET <br /> CLARITAS ADHEMAS
            </h2>
            <div className="launch__column--price-container">
              <h4 style={{ textDecoration: "line-through" }}> R$ 1040.00</h4>
              <h3>R$ 900.00</h3>
            </div>
            <div>
              <h6 className="launch__column--payment-method">
                {" "}
                2x de R$ 450,00 sem juros
              </h6>
            </div>
            <Button className="launch__column--btn">COMPRAR</Button>
          </div>
          <i
            className="fas fa-chevron-right"
            style={{
              marginTop: "20%",
              fontSize: "40px"
            }}
          >
          </i>
        </section>

        <section className="launch__models">
          <div className="launch__models--image-size launch__models--img-main">
            <figure>{img.modelFour}</figure>
          </div>

          <div className="launch__models--img-second">
            <div className="launch__models--image-size">
              <figure>{img.modelFive}</figure>
            </div>

            <div className="launch__models--image-size">
              <figure>{img.earringsGold}</figure>
            </div>
          </div>
        </section>
      </main>

      <div style={{
        margin: '80px 0 80px 0',
        border: '0.5px solid var(--second-gray)'
      }}>
      </div>

      <section className="instagram">
        <div>
          <img src={instaIcon} alt="Icon Instagram" />
        </div>
        <h2 className="instagram__title">@NAYARAMARRA</h2>
      </section>

      <section className="lastCarousel">
        <i
          className="fas fa-chevron-left"
          style={{
            fontSize: "30px"
          }}
        >
        </i>
        <div className="lastCarousel__carousel">

          {
            [...lastCarousel].map((e, idx) => {
              return (
                <div key={idx} className=" lastCarousel__carousel--item">
                  <img src={e} alt="dasdasdsa" />
                </div>
              );
            })
          }

        </div>
        <i
          className="fas fa-chevron-right"
          style={{
            fontSize: "30px",
          }}
        >
        </i>

      </section>

      <div style={{
        margin: '80px 0 80px 0',
        border: '0.5px solid var(--second-gray)'
      }}>
      </div>
    </>
  );
};

export default Home;