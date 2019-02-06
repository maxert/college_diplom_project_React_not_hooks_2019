import React, { Component } from 'react';
import axios from 'axios';
class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massive: [],
      massiveTwo: [],
      value: 'http://localhost:1337/Videos',
      valueFilter: 'http://localhost:1337/Videos',
      allText: [],
      checkbox: [],
      ItemsSort: [],
      Catalog: [],
      CatalogLinks: 'Videos',
      selectedOption: null,
      Proisvoditel: [],
    };

    this.sort = {
      textURl: 'http://localhost:1337/Videos',
      constURL: 'http://localhost:1337/Videos',
      isFalse: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    // Request API.
  }
  //Сортировка и тддд
  filterCatalog(massive, valueCatalog) {
    this.setState({ CatalogLinks: this.getVideocard(valueCatalog) });
    return massive;
  }
  checkbox(checkboxTrue, checkboxValue) {
    var massive = checkboxTrue.slice();
    // convert node list to an array

    // extract only the checked
    if (checkboxValue.length === 0) {
      return massive;
    } else {
      return massive.filter(input => {
        for (var prop in checkboxValue) {
          return input.proisvoditename.Name === checkboxValue[prop];
        }
        /*for (var prop in input) {
    let allCheckbox = document.getElementsByClassName('checboxName');
        for (let j = 0; j < allCheckbox.length; j++) {
          if (input[prop] === checkboxValue[j]) {
            return input[prop];
          } else if (checkboxValue.length === 0) {
           
          }
        }
      }*/
      });
    }
  }

  isSortingMassive(SortingAll, target) {
    let massive = [];
    for (let i = 0; i < SortingAll.length; i++) {
      massive.push(SortingAll[i]);
    }

    for (var i = 0; i < this.state.massive.length; i++) {
      if (target === 'По новинкам') {
        this.setState({ value: target });
        return massive.sort((a, b) => {
          return b.itemsattributs.new - a.itemsattributs.new;
        });
      } else if (target === 'По популярности') {
        return massive.sort((a, b) => {
          this.setState({ value: target });
          return b.itemsattributs.top - a.itemsattributs.top;
        });
      } else if (target === 'По возростанию цены') {
        return massive.sort((a, b) => {
          this.setState({ value: target });
          return b.itemsattributs.price - a.itemsattributs.price || b.rating.average - a.rating.average;
        });
      } else {
        return massive.sort((a, b) => {
          this.setState({ value: target });
          return a.itemsattributs.price - b.itemsattributs.price || b.rating.average - a.rating.average;
        });
      }
    }
  }
  //Клик
  handleChange(event) {
    this.setState({ massive: this.isSortingMassive(this.state.massive, event.target.value) });
  }

  handleChangeCheckbox(e) {
    const name = this.form;
    const checkboxArray = Array.prototype.slice.call(name);
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    console.log('checked array:', checkedCheckboxes);
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.parentNode.innerText);
    console.log('checked array values:', checkedCheckboxesValues);
    this.setState({
      massive: this.checkbox(this.state.massiveTwo, checkedCheckboxesValues),
    });
  }

  getVideocard(CatalogLinks) {
    if (this.sort.isFalse === false) {
      this.sort.isFalse = true;
      var CatalogLinks = 'Videos';
    }
    return axios.get('http://localhost:1337/' + CatalogLinks).then(response => {
      this.setState({ massive: response.data });
      this.setState({ massiveTwo: response.data });
    });
  }

  getCatalog() {
    return axios.get('http://localhost:1337/categories').then(response => {
      this.setState({ Catalog: response.data });
    });
  }
  getProisvoditel() {
    return axios.get('http://localhost:1337/proisvoditenames').then(response => {
      this.setState({ Proisvoditel: response.data });
    });
  }

  componentDidMount() {
    axios
      .all([this.getVideocard(), this.getCatalog(), this.getProisvoditel()])
      .then(axios.spread(function(massive, perms) {}));
  }

  handleClickOutside(event) {
    this.setState({ CatalogLinks: this.getVideocard(event.target.value) });
  }
  render() {
    const itemProduct = this.state.massive.map((massive, i) => (
      <div className="item_block m-2 p-3" key={i}>
        <img src={'../img/' + massive.image.name} className="img-fluid mt-2 mb-2" alt="Картинка" />
        <p>{massive.Title}</p>
        <div className="col-md-12">
          <span>Цена</span>
          <span>{massive.itemsattributs.price}</span>
          грн
        </div>
      </div>
    ));
    const filterTovar = this.state.Proisvoditel.map((massive, i) => (
      <label className="checboxName" key={i}>
        <input
          type="checkbox"
          onChange={this.handleChangeCheckbox}
          data-index={massive.Name}
          id="scales"
          name={'name'}
          className="mr-2"
        />
        {massive.Name}
      </label>
    ));
    const FilterGrafChips = this.state.allText.map((allText, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          onChange={this.handleChangeCheckbox}
          data-index={allText.SortItems}
          id="scales"
          name={'name'}
          className="mr-2"
        />
        {allText.graficChip}
      </label>
    ));
    const catalog = this.state.Catalog.map((massive, i) => {
      return (
        <option value={massive.Links} key={i}>
          {massive.CategoryName}
        </option>
      );
    });

    return (
      <div className="section_center catalog">
        <div className="container d-flex flex-row">
          <div className="col-md-3 ml-1 mr-1">
            <div className="col-md-12 text_catalog">Фильтр</div>
            <div className="filter_tovar mt-2">
              <div className="filter_proisvoditel">
                <select className="browser-default custom-select" onChange={this.handleClickOutside}>
                  {catalog}
                </select>
              </div>
              <form ref={form => (this.form = form)} className="ItemsSelect">
                <ul>
                  <li className="NameProizovoditel  d-flex flex-column">
                    <div className="text_Top">Производитель</div>
                    {filterTovar}
                  </li>
                  <li className="NameChips  d-flex flex-column">
                    <div className="text_Top">Графический чип</div>
                    {FilterGrafChips}
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="col-md-9 ml-1 mr-1">
            <div className="col-md-12 text_catalog d-flex">
              Каталог - <span>Видеокарты</span>
              <div className="Select_header mr-2 ml-2">
                <select className="browser-default custom-select" value={this.state.value} onChange={this.handleChange}>
                  <option>По популярности</option>
                  <option>По новинкам</option>
                  <option>По возростанию цены</option>
                  <option>По убыванию цены</option>
                </select>
              </div>
            </div>
            <div className="col-md-12 container_items flex-wrap d-flex p-0">{itemProduct}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
