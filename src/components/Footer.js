import React from "react";
import "../styles/components/footer.scss";
import logo from "../assets/images/logo.png";
import eighteen from "../assets/images/18plus.png";
import gamecare from "../assets/images/gamecare.png";
import gt from "../assets/images/gt.png";
import whatsapp from "../assets/images/whatsapp.png";
import fb from "../assets/images/facebook.png";
import insta from "../assets/images/instagram.png";
import telegram from "../assets/images/telegram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid container-fluid-5">
        <div className="row row5">
          <div className="col-12 col-md-3 text-center">
            <img src={logo} alt="logo" className="img-logo" />
          </div>
          <div className="col-12 col-sm footer-link">
            <h4>Menu</h4>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
            </div>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Game Rules
              </a>
            </div>
          </div>
          <div className="col-12 col-sm gt">
            <h4>Game Therapy</h4>
            <div className="game--therapy">
              <img src={eighteen} alt="18+" />
              <a
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gamecare} alt="gamecare" />
              </a>
              <a
                href="https://www.gamblingtherapy.org/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gt} alt="gt" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm footer-social">
            <h4>Follow Us</h4>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="fb" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="insta" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="footer-bottom text-center">
              <div className="copyright text-center mt-2">
                © Copyright 2021. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
