import React from "react";
import { Link } from "react-router-dom";

import { Tooltip } from "antd";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Connect from "../../components/Contact";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Services from "../../components/Services";
import Skills from "../../components/Skills";
import About from "../About/index";

import Profile from "../../img/profile.png";

import "./style.css";

const Home = () => {
  return (
    <div id="home">
      <Nav />
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>Gabriel Coimbra</h1>
            <h4>FullStack Developer & Freelancer</h4>
            <Link to="./contact" className="btn hero-btn">
              Contrate-me
            </Link>
            <ul className="social-icons hero-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/coimbrawebs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Tooltip title="Linkedin">
                    <FaLinkedin style={{ fontSize: 30 }} />
                  </Tooltip>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/coimbrox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Tooltip title="Github">
                    <FaGithub style={{ fontSize: 30 }} />
                  </Tooltip>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/coimbrox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Tooltip title="Twitter">
                    <FaInstagram style={{ fontSize: 30 }} />
                  </Tooltip>
                </a>
              </li>
            </ul>
          </article>
          <article className="hero-img">
            <img src={Profile} className="hero-photo" alt="carlos" />
          </article>
        </div>
      </header>

      <About />
      <Services />
      <Connect />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
