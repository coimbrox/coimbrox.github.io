import React from "react";

import Profile from "../../img/profile.svg";

import "./style.css";

const About = () => {
  return (
    <div className="about_section" id="about">
      <section className="section about">
        <div className="section-center about-center">
          <article>
            <img src={Profile} className="hero-photo" alt="about img" />
          </article>

          <article className="about-info">
            <div className="about-title">
              <h2>sobre</h2>
              <div className="underline"></div>
            </div>

            <p>
              Olá, meu nome é Gabriel Coimbra de Oliveira da Silva e sou um
              desenvolvedor FullStack.
            </p>
            <p>
              Sou natural de Salvador-BA e atualmente moro em Caxias do Sul -
              RS. Sou formado em Análise e Desenvolvimento de Sistemas e
              Pós-graduado em Analise de Dados e Big Data.
            </p>
            <p>
              Gosto de programar e do desafio de aprender algo novo todos os
              dias.
            </p>
            <a href="about.html" className="btn">
              sobre mim
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
