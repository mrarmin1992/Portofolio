import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => {
  return (
    <section id="footer" data-aos="zoom-in-up">
      <span className="bottom-tag">
        <a href="https://github.com/ristic93/portfolio-react" target="blank" >
          &nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </a>
      </span>
      <footer>
        <h2 style={{ margin: "0" }}>Armin Pezo</h2>
        <div className="footer_socials">
          <a href="" target="blank" title="Linkedin">
            <BsLinkedin />
          </a>
          <a href="https://github.com/ristic93" target="blank" title="GitHub">
            <BsGithub />
          </a>
          <a
            href="hhttps://www.instagram.com/mr.armin_1/"
            target="blank" title="Instagram"
          >
            <BsInstagram />
          </a>
        </div>
      </footer>
      <div className="bottom-bar">
        <p style={{ margin: "0" }}>
          &copy; All rights reserved - Armin Pezo <br />{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Footer;
