import React, { Component } from 'react';
import axios from 'axios';
class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massive: [],
      textURl: 'http://localhost:1337/Items',
      value: 'http://localhost:1337/Items?top=1',
    };

    this.handleChange = this.handleChange.bind(this);
    // Request API.
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === 'По новинкам') {
      this.state.textURl = 'http://localhost:1337/Items?_sort=new';
    } else if (event.target.value === 'По популярности') {
      this.state.textURl = 'http://localhost:1337/Items?_sort=top';
    } else if (event.target.value === 'По возростанию цены') {
      this.state.textURl = 'http://localhost:1337/Items?_sort=price:DESC';
    } else {
      this.state.textURl = 'http://localhost:1337/Items?_sort=price:ASC';
    }
    this.componentDidMount();
  }
  componentDidMount() {
    axios
      .get(this.state.textURl)
      .then(response => {
        // Handle success.
        this.setState({ massive: response.data });
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  }
  render() {
    const itemProduct = this.state.massive.map((massive, i) => (
      <div className="item_block m-2 p-3" key={i}>
        <img src={'../img/' + massive.image.name} className="img-fluid mt-2 mb-2" alt="Картинка" />
        <p>{massive.NameItem}</p>
        <div className="col-md-12">
          <span>Цена</span>
          <span>{massive.price}</span>
          грн
        </div>
      </div>
    ));
    return (
      <div className="section_center catalog">
        <div className="container d-flex flex-row">
          <div className="col-md-3 ml-1 mr-1">
            <div className="col-md-12 mt-2 text_catalog">Фильтр</div>
          </div>
          <div className="col-md-9 ml-1 mr-1">
            <div className="col-md-12 mt-2 text_catalog">
              Каталог - <span>Видеокарты</span>
              <select className="m-2 filter_top" value={this.state.value} onChange={this.handleChange}>
                <option>По популярности</option>
                <option>По новинкам</option>
                <option>По возростанию цены</option>
                <option>По убыванию цены</option>
              </select>
            </div>
            <div className="col-md-12 container_items flex-wrap d-flex p-0">{itemProduct}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
