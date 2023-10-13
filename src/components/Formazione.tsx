import React from "react";

const Formazione: React.FC = () => {
  return (
    <div id="formazione">
      <h1>STUDI</h1>
      <p>
        <b>Corso Software Development</b>(2022- attuale) <br />
        <a href="sitojac">
          https://jac-its.it/corso/software-development/
        </a>{" "}
        <br />
        Fondazione JobsAcademy - San Paolo d'Argon (BG)
      </p>
      <p>
        <b>Diploma di maturità Liceo delle Scienze Umane</b> (A.S. 2020/2021)
        <br />
        Istituto David Maria Turoldo - Zogno
      </p>

      <hr />
      <h1>COMPETENZE INFORMATICHE</h1>
      <ul>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>React</li>
        <li>Python</li>
        <li>Visual Basic e excel</li>
      </ul>

      <hr />
      <h1>SKILLS</h1>
      <ul>
        <li>Inglese B1</li>
        <li>team working</li>
        <li>problem solving</li>
        <li>lavoro con i bambini</li>
      </ul>
    </div>
  );
};

export default Formazione;
