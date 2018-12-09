import React, { Component } from "react";
import "./css/start.css";
import DoorUI from "./js/button";
import axios from 'axios';

const blockedsId = 1; // Replace with one of your posts id.

class Start extends Component {
  constructor(props) {
    super(props);
    this.state={
        masive:[]
    }
    // Request API.
axios
.get(`http://localhost:1337/blockeds/${blockedsId}`)
.then(response => {
  // Handle success.
 this.setState({masive:response.data});
})
.catch(error => {
  // Handle error.
  console.log('An error occurred:', error);
});
 }
 
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
            <p>{this.state.masive.title}</p>
          </div>
          <DoorUI></DoorUI>
        </div>
      </div>
    );
  }
}
export default Start;
