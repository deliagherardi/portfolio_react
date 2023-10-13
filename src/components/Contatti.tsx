import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contatti: React.FC = () => {
  return (
    <section id="contatti">
      <h1>CONTATTI</h1>
      <div className="contact-icons">
        <a href="mailto:delia.gherardi02@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/delia-gherardi-965365267/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/deliagherardi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/delia.gherardi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
};

export default Contatti;
