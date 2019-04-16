import React, { Component } from "react";
import axios from "axios";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massive: [],
      src:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.639855624334!2d36.2414375669214!3d49.999361227974006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e85c877deb%3A0x5082f114ee61dd71!2z0KXQsNGA0YzQutC-0LLRgdC60LjQuSDQutC-0LzQv9GM0Y7RgtC10YDQvdC-LdGC0LXRhdC90L7Qu9C-0LPQuNGH0LXRgdC60LjQuSDQutC-0LvQu9C10LTQtg!5e0!3m2!1sru!2sua!4v1549909170786"
    };
  }

  componentDidMount() {
    axios.all([this.getText()]).then(axios.spread(function(massive, perms) {}));
  }
  getText() {
    return axios.get(`https://collegediplome.herokuapp.com/blockeds?id=4`).then(response => {
      this.setState({ massive: response.data });
    });
  }
  render() {
    const textAbout = this.state.massive.map((input, i) => (
      <div key={i} className="container background_container ">
        <div className="text_oglav">{input.title}</div>
        <div className="container_all d-flex">
          <div className="container_contacts">
            <div className="text_top">{input.oglav} </div>
            <div className="text_border">{input.text_one}</div>
            <div className="text_top">{input.text_two} </div>
            <div className="text_border"><a href="http://ct-college.net/">{input.text_three}</a> </div>
            <div className="text_top">{input.text_four} </div>
            <div className="text_border">{input.text_five} </div>
            <div className="text_top">{input.text_seven} </div>
            <div className="text_border">{input.text_six} </div>
          </div>
          <div className="google_maps h-100 w-100">
            <iframe title="google" src={this.state.src} />
          </div>
        </div>
      </div>
    ));
    return (
      <div className="section_center l_container">
        <div className="container col-md-12">{textAbout}</div>
      </div>
    );
  }
}
export default Contacts;
