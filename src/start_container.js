import React, { Component } from "react";
import "./css/start.css";
import DoorUI from "./js/button";
class Start extends Component {
  render() {
    return (
      <div className="section_center">
        <div className="backgraund" />
        <div className="container">
          <p>
            <span>ComputerBOX </span>-&nbsp;это сервис,<br /> позволяющий быстро
            собрать компьютер
            <br />
            по своим критериям.
          </p>
          <div className="d-flex button_size">
            <p className="">Начинай собирать его прямо сейчас</p>
            <p>Нажимай</p>
          </div>
          <DoorUI></DoorUI>
        </div>
      </div>
    );
  }
}
export default Start;
