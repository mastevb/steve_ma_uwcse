import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <p className="greeting-text-p subTitle">I'm a 4th year B.S./M.S. student in the
              <a href={"https://www.cs.washington.edu"}> Paul G. Allen School of Computer Science & Engineering </a>
                at the University of Washington, Seattle.
            </p>
            <p className="greeting-text-p subTitle">
              I work under Prof. <a href={"https://mse.washington.edu/facultyfinder/mehmet-sarikaya"}> Mehmet Sarikaya </a>
                and Jacob Louis Rodriguez on developing computational methods for identifying the similarities between
              biological structures.
            </p>
            <p className="greeting-text-p subTitle">
              I am widely interested in Computational Biology, Virtual Reality Applications, Database Systems and Computer
              Science education.
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="sma" src={require("../../assets/images/circle-cropped.png")} width="414" height="414"/>
        </div>
      </div>
    </div>
    </Fade>
  );
}
