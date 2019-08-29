import React from "react";
import elo from "./images/elo.png";
import FormField from "../FormField";
import visa from "./images/visa.png";
import amex from "./images/amex.png";
import safety from "./images/safety.gif";
import bankSlip from "./images/boleto.png";
import dinners from "./images/dinners.png";
import icoPhone from "./images/ico-tele.png";
import mastercard from "./images/mastercard.png";
import rakatenLogo from "./images/logo_rakuten.webp";

const Footer = () => {
  return (
    <>
      <header>
        <h2>
          <i className="far fa-envelope"></i>
          CADASTRE-SE E RECEBA OFERTAS EXCLUSIVAS
        </h2>
        <FormField
          name="email"
          type="email"
          placeholder="E-mail"
          className="email-input"
        />
        <div>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest-p"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </header>

      <section>
        <div>
          <h3>CENTRAL DE AJUDA</h3>
          <h4>Central de Atendimento</h4>
          <h4>Envio e Entrega</h4>
          <h4>Navegando e Comprando</h4>
          <h4>Trocas e Devoluções</h4>
          <h4>Fale Conosco</h4>
          <h4>Mapa do Site</h4>
        </div>

        <div>
          <h3>INSTITUCIONAL</h3>
          <h4>Quem Somos</h4>
          <h4>Nossas Lojas</h4>
          <h4>Política de Privacidade</h4>
          <h4>Afiliados</h4>
        </div>

        <div>
          <h3>ATENDIMENTO</h3>
          <img src={icoPhone} alt="Ícone de um telefone" />
          <h3>TELEVENDAS 0800 - 0000 | SAC 0800 - 0000</h3>
          <h4>Horário de atendimento</h4>
          <h4>De segunda a sexta das 00 às 00</h4>
        </div>

        <div>
          <h3>CERTIFICADOS</h3>
          <img src={safety} alt="Verificado e Protegido por GoDaddy" />
        </div>
      </section>

      <footer>
        <div>
          <h3>FORMAS DE PAGAMENTO</h3>
          <img src={amex} alt="Amex" />
          <img src={bankSlip} alt="Boleto Bancário" />
          <img src={dinners} alt="Dinners" />
          <img src={elo} alt="Elo" />
          <img src={mastercard} alt="Mastercard" />
          <img src={visa} alt="Visa" />
        </div>

        <div>
          <div>
            <p>
              Lorem Ipsum Dolor Sit - CNPJ 60.306.289/0007-99 - Av.Lorem Ipsum,
              3103 - lj 74/74 a / Piso Campo Belo - CEP 04029-902 - Indianópolis
              - São Paulo - SP
            </p>
            <p>Nayara Marra. &copy; 2018 - Todos os direitos reservados.</p>
          </div>

          <div>
            <img src={rakatenLogo} alt="Logo Rakaten" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
