import React, { Component } from 'react';
import axios from 'axios';
class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massive: [],
      massiveTwo: [],
      value: 'http://localhost:1337/Items?_sort=top:ASC',
      valueFilter: 'http://localhost:1337/Items?_sort=top:ASC',
    };
    this.sort = {
      textURl: 'http://localhost:1337/Items?_sort=price:DESC&SortItems=0',
      constURL: 'http://localhost:1337/Items',
      isFalse: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFilterTovar = this.handleChangeFilterTovar.bind(this);
    // Request API.
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    for (var i = 0; i < this.state.massive.length; i++) {
      if (event.target.value === 'По новинкам') {
        this.sort.textURl = this.sort.constURL + '?_sort=new&SortItems=' + this.state.massive[i].SortItems;
      } else if (event.target.value === 'По популярности') {
        this.sort.textURl = this.sort.constURL + '?_sort=top&SortItems=' + this.state.massive[i].SortItems;
      } else if (event.target.value === 'По возростанию цены') {
        this.sort.textURl = this.sort.constURL + '?_sort=price:DESC&SortItems=' + this.state.massive[i].SortItems;
      } else {
        this.sort.textURl = this.sort.constURL + '?_sort=price:ASC&SortItems=' + this.state.massive[i].SortItems;
      }
    }
    this.componentDidMount();
  }
  handleChangeFilterTovar(event) {
    this.setState({ valueFilter: event.target.value });
    for (var i = 0; i < this.state.massiveTwo.length; i++) {
      if (Number(event.target.value) === this.state.massiveTwo[i].SortItems) {
        this.sort.textURl = this.sort.constURL + '?_sort=top&SortItems=' + this.state.massiveTwo[i].SortItems;
      }
    }
    this.componentDidMount();
  }
  filterfill() {
    var filter_TitleName = document.getElementsByClassName('filter_TitleName')[0];
    if (filter_TitleName) {
      if (this.sort.isFalse === false) {
        this.sort.isFalse = true;
        for (var j = 0; j < this.state.massiveTwo.length; j++) {
          var option = document.createElement('option');
          for (var r = 0; r < this.state.massiveTwo.length; r++) {
            if (j === this.state.massiveTwo[r].SortItems) {
              filter_TitleName.appendChild(option);
            }
          }
        }
        for (var i = 0; i < filter_TitleName.children.length; i++) {
          filter_TitleName.children[i].value = i;
          for (var k = 0; k < this.state.massiveTwo.length; k++) {
            if (Number(filter_TitleName.children[i].value) === this.state.massiveTwo[k].SortItems) {
              filter_TitleName.children[i].innerHTML = this.state.massiveTwo[k].TypeTitle;
            }
          }
        }
      }
    }
  }
  componentDidMount() {
    axios
      .get(this.sort.textURl)
      .then(response => {
        // Handle success.
        this.setState({ massive: response.data });
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  }
  componentDidMountTwo() {
    if (this.sort.isFalse === false) {
      axios
        .get(this.sort.constURL)
        .then(response => {
          // Handle success.
          this.setState({ massiveTwo: response.data });
          this.sort.isFalse = true;
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    }
  }
  render() {
    this.componentDidMountTwo();
    this.filterfill();
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
            <div className="filter_tovar">
              <select
                className="filter_TitleName"
                value={this.state.valueFilter}
                onChange={this.handleChangeFilterTovar}
              />
            </div>
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
