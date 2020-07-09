import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <WorkExperience />
        <Projects />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
