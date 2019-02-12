import React, { Component } from "react";
import axios from "axios";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massive: []
    };
  }

  componentDidMount() {
    axios.all([this.getText()]).then(axios.spread(function(massive, perms) {}));
  }
  getText() {
    return axios.get(`http://localhost:1337/blockeds?id=3`).then(response => {
      this.setState({ massive: response.data });
    });
  }
  render() {
    const textAbout = this.state.massive.map((input, i) => (
      <div key={i} className="container background_container">
        <div className="text_oglav">{input.title}</div>
        <div className="image_about"><img className="img-fluid" src="https://newsone.ua/img/article/857/82_original.jpg" alt="Картинка"></img></div>

        <div className="text_border">{input.oglav} </div>
        <div className="text_top">{input.text_two} </div>
        <div className="text_border">{input.text_one} </div>
        <div className="text_top">{input.text_three} </div>
        <div className="text_border">{input.text_four} </div>
      </div>
    ));
    return (
      <div className="section_center">
        <div className="container col-md-12">{textAbout}</div>
      </div>
    );
  }
}
export default About;
