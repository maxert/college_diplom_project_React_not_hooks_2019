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
    };

    this.sort = {
      textURl: 'http://localhost:1337/Videos',
      constURL: 'http://localhost:1337/Videos',
      isFalse: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleChangeFilterTovar = this.handleChangeFilterTovar.bind(this);
    // Request API.
  }
  //Сортировка и тддд

  checkbox(checkboxTrue, checkboxValue) {
    var massive = checkboxTrue.slice();
    // convert node list to an array

    // extract only the checked
    let allCheckbox = document.getElementsByClassName('checboxName');

    return massive.filter(input => {
      for (var prop in input) {
        for (let j = 0; j < allCheckbox.length; j++) {
          if (input[prop] === checkboxValue[j]) {
            return input[prop];
          } else if (checkboxValue.length === 0) {
            return input.SortItems === Number(allCheckbox[j].children[0].dataset.index);
          }
        }
      }
    });
  }
  isFilter(allFilter) {
    let tmp = {};
    let massive = [];
    for (let i = 0; i < allFilter.length; i++) {
      massive.push(allFilter[i]);
    }
    return massive
      .sort((a, b) => {
        return a.id - b.id || b.rating.average - a.rating.average;
      })
      .filter(a => {
        return a.TypeTitle in tmp ? 0 : (tmp[a.TypeTitle] = 1);
      });
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
    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const name = this.form;

    // convert node list to an array
    const checkboxArray = Array.prototype.slice.call(name);

    // extract only the checked checkboxes
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    console.log('checked array:', checkedCheckboxes);

    // use .map() to extract the value from each checked checkbox
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.parentNode.innerText);
    console.log('checked array values:', checkedCheckboxesValues);

    this.setState({
      massive: this.checkbox(this.state.massiveTwo, checkedCheckboxesValues),
    });
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
        this.setState({ allText: this.isFilter(this.state.massive) });
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
        <p>{massive.Title}</p>
        <div className="col-md-12">
          <span>Цена</span>
          <span>{massive.itemsattributs.price}</span>
          грн
        </div>
      </div>
    ));
    const filterTovar = this.state.allText.map((allText, i) => (
      <label className="checboxName" key={i}>
        <input
          type="checkbox"
          onChange={this.handleChangeCheckbox}
          data-index={allText.SortItems}
          id="scales"
          name={'name'}
          className="mr-2"
        />
        {allText.proizvoditel}
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
