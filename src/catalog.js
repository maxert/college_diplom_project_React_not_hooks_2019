import React, { Component } from "react";
import axios from "axios";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massive: [],
      massiveTwo: [],
      value: "https://collegediplome.herokuapp.com/Videos",
      valueFilter: "https://collegediplome.herokuapp.com/Videos",
      allText: [],
      checkbox: [],
      ItemsSort: [],
      Catalog: [],
      CatalogLinks: "Videos",
      selectedOption: null,
      Proisvoditel: [],
      isTrue: true,
      TypeMassiv: [],
      ValueMemory: [],
      ShinuMemory: [],
      Interface: [],
      DopPower: [],
      Razemy: [],
      chastotaout: [],
      familyprocessor: [],
      pokolenyyprocessor: [],
      basket: [],
      constant: 1
    };

    this.sort = {
      textURl: "https://collegediplome.herokuapp.com/Videos",
      constURL: "https://collegediplome.herokuapp.com/Videos",
      isFalse: false,
      newMasive: [],
      price: 0
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

  checkbox(checkboxTrue, checkboxValue, valueNew, isTrue) {
    var ArraysMassive = checkboxValue;
    var massive = checkboxTrue;
    var massivElem = [];
    if (checkboxValue.length === 0) {
      return massive;
    }
    if (isTrue === 1) {
      let filters = massive.filter(item => {
        for (var Newprops in item) {
          if (Newprops === "proisvoditename") {
            for (var props in ArraysMassive) {
              if (Newprops === "proisvoditename") {
                if (item[Newprops].Name.indexOf(ArraysMassive[props]) === 0) {
                  massivElem.push(item);
                  this.setState({ ItemsSort: massivElem });
                  var massiveElemets = item;
                }
              }
            }
          }
        }
        return massiveElemets;
      });

      return filters;
    } else {
      if (valueNew.length === 0) {
        let filters = massive.filter(item => {
          for (var Newprops in item) {
            if (typeof item[Newprops] === "string") {
              for (var props in ArraysMassive) {
                if (item[Newprops].indexOf(ArraysMassive[props]) === 0) {
                  var massiveElemets = item;
                }
              }
            }
          }

          return massiveElemets;
        });
        return filters;
      } else {
        let filtesss = valueNew.filter(item => {
          for (var Newprops in item) {
            if (typeof item[Newprops] === "string") {
              for (var props in ArraysMassive) {
                if (item[Newprops].indexOf(ArraysMassive[props]) === 0) {
                  var massiveNew = item;
                }
              }
            }
          }
          return massiveNew;
        });
        return filtesss;
      }
    }

    // extract only the checked
  }

  isSortingMassive(SortingAll, target) {
    let massive = [];
    for (let i = 0; i < SortingAll.length; i++) {
      massive.push(SortingAll[i]);
    }

    for (var i = 0; i < this.state.massive.length; i++) {
      if (target === "По новинкам") {
        this.setState({ value: target });
        return massive.sort((a, b) => {
          return b.itemsattributs.new - a.itemsattributs.new;
        });
      } else if (target === "По популярности") {
        return massive.sort((a, b) => {
          this.setState({ value: target });
          return b.itemsattributs.top - a.itemsattributs.top;
        });
      } else if (target === "По возростанию цены") {
        return massive.sort((a, b) => {
          this.setState({ value: target });
          return (
            b.itemsattributs.price - a.itemsattributs.price ||
            b.rating.average - a.rating.average
          );
        });
      } else {
        return massive.sort((a, b) => {
          this.setState({ value: target });
          return (
            a.itemsattributs.price - b.itemsattributs.price ||
            b.rating.average - a.rating.average
          );
        });
      }
    }
  }
  //Клик
  handleChange(event) {
    this.setState({
      massive: this.isSortingMassive(this.state.massive, event.target.value)
    });
  }

  handleChangeCheckbox(e) {
    var massiveelem = [];
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      if (e.currentTarget.children[i].nodeName === "LABEL") {
        massiveelem.push(e.currentTarget.children[i].children[0]);
      }
    }

    const checkboxArray = Array.prototype.slice.call(massiveelem);
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    console.log("checked array:", checkedCheckboxes);
    const checkedCheckboxesValues = checkedCheckboxes.map(
      input => input.parentNode.innerText
    );
    console.log("checked array values:", checkedCheckboxesValues);
    this.setState({
      massive: this.checkbox(
        this.state.massiveTwo,
        checkedCheckboxesValues,
        this.state.ItemsSort,
        e.currentTarget.value
      )
    });
  }

  isfilterDelete(allMasive, value) {
    var tmp = {};
    return allMasive.filter(a => {
      return a[value] in tmp ? 0 : (tmp[a[value]] = 1);
    });
  }
  getlinks() {
    return axios.get("https://collegediplome.herokuapp.com/startlinks/1").then(response => {
      this.setState({ CatalogLinks: this.getVideocard(response.data.linkspost)});
    });
  }

  getVideocard(CatalogLinks) {
    if (this.sort.isFalse === false) {
      this.sort.isFalse = true;
      CatalogLinks = "Videos";
    }
    return axios.get("https://collegediplome.herokuapp.com/" + CatalogLinks).then(response => {
      this.setState({ massive: response.data });
      this.setState({ massiveTwo: response.data });
      console.log(this.state.massive);

      this.state.massive.forEach(element => {
        console.log(Object.keys(element));

        this.setState({
          allText: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[3]
          )
        });
        this.setState({
          TypeMassiv: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[6]
          )
        });

        this.setState({
          ValueMemory: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[4]
          )
        });

        this.setState({
          ShinuMemory: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[3]
          )
        });
        this.setState({
          Interface: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[7]
          )
        });
        this.setState({
          DopPower: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[9]
          )
        });
        this.setState({
          Razemy: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[9]
          )
        });

        this.setState({
          chastotaout: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[6]
          )
        });
        this.setState({
          familyprocessor: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[2]
          )
        });
        this.setState({
          pokolenyyprocessor: this.isfilterDelete(
            this.state.massive,
            Object.keys(element)[7]
          )
        });
      });
    });
  }

  getCatalog() {
    return axios.get("https://collegediplome.herokuapp.com/categories").then(response => {
      this.setState({ Catalog: response.data });
    });
  }
  getProisvoditel() {
    return axios
      .get("https://collegediplome.herokuapp.com/proisvoditenames")
      .then(response => {
        this.setState({ Proisvoditel: response.data });
      });
  }

  componentDidMount() {
    axios
      .all([
        this.getlinks(),
        this.getVideocard(),
        this.getCatalog(),
        this.getProisvoditel(),
        this.getbasket()
      ])
      .then(axios.spread(function(massive, perms) {}));
  }

  componentDidUpdate() {
    let checboxName = document.querySelectorAll(".filter_all > li label");
    if (checboxName) {
      for (let i = 0; i < checboxName.length; i++) {
        if (checboxName[i].innerText === "") {
          checboxName[i].parentNode.classList.add("none");
        } else {
          checboxName[i].parentNode.classList.remove("none");
        }
      }
    }
  }

  handleClickOutside(event) {
    this.setState({ CatalogLinks: this.getVideocard(event.target.value) });
  }

  getbasket() {
    return axios.get("https://collegediplome.herokuapp.com/baskets").then(response => {
      this.setState({ baskets: response.data });
    });
  }

  clickFunction(e) {
    let ellipse = document.getElementsByClassName("ellipse")[0];
    this.setState({ constant: this.state.constant + 1 });

    this.sort.price =
      this.sort.price +
      Number(e.currentTarget.parentNode.previousSibling.children[1].innerText);
    let MassiveArray = [];
    let TovarBasket = document.getElementsByClassName("tovar_basket")[0];
    let ContainerTovarBasket = document.getElementsByClassName(
      "container_tovar_basket"
    )[0];
    var result = document.getElementsByClassName("result")[0];
    let ResultText = document.getElementsByClassName("result_Text")[0];

    ContainerTovarBasket.appendChild(
      e.currentTarget.parentNode.parentNode.cloneNode(true)
    );
    if (ContainerTovarBasket.children.length === 0) {
      ResultText.classList.add("active");
    } else {
      ResultText.classList.remove("active");
      ellipse.children[0].innerText = this.state.constant;
      result.innerText = this.sort.price;
      /*this.postCatalog(this.state.constant);*/
    }
    for (let i = 0; i < ContainerTovarBasket.children.length; i++) {
      MassiveArray.push(ContainerTovarBasket.children[i].cloneNode(true));
    }
    var arr = [];
    for (let i = 0, ref = (arr.length = MassiveArray.length); i < ref; i++) {
      arr[i] = MassiveArray[i];
    }
    ContainerTovarBasket.innerHTML = "";
    let tmp = [];
    let resultat = arr.filter(a => {
      return a.innerHTML in tmp ? 0 : (tmp[a.innerHTML] = 1);
    });
    resultat.forEach(element => {
      ContainerTovarBasket.appendChild(element.cloneNode(true));
    });

    TovarBasket.classList.remove("active-left");
    TovarBasket.classList.add("active");
  }
  render() {
    const itemProduct = this.state.massive.map((massive, i) => (
      <div className="item_block d-flex flex-column m-2 p-3" key={i}>
        <div className="image_product d-flex align-items-center justify-content-center">
          <img
            src={"../img/" + massive.image.name}
            className="img-fluid mt-2 mb-2"
            alt="Картинка"
          />
        </div>
        <p className="text_item">{massive.Title}</p>
        <div className="p-0 price_list">
          <span className="mr-0">Цена:</span>
          <span className="price green_color">
            {massive.itemsattributs.price}
          </span>
          <span className="green_color">грн</span>
        </div>
        <div className="button_price d-flex">
          <button
            onClick={this.clickFunction.bind(this)}
            className="btn-primary"
          >
            Купить
          </button>
          <button className="btn-success">Добавить в корзину</button>
        </div>
      </div>
    ));
    const filterTovar = this.state.Proisvoditel.map((massive, i) => (
      <label className="checboxName" key={i}>
        <input
          type="checkbox"
          data-index={massive.Name}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {massive.Name}
      </label>
    ));
    const FilterGrafChips = this.state.allText.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.graficchips}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.graficchips}
      </label>
    ));
    const filtersNew = this.state.TypeMassiv.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.TypeMemory}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.TypeMemory}
      </label>
    ));
    const filtersThree = this.state.ValueMemory.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.ValueMemory}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.ValueMemory}
      </label>
    ));
    const filtersfour = this.state.ShinuMemory.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.ShinuMemory}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.ShinuMemory}
      </label>
    ));
    const filtersfive = this.state.Interface.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.Interface}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.Interface}
      </label>
    ));
    const filterssix = this.state.DopPower.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.DopPower}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.DopPower}
      </label>
    ));
    const filtersseven = this.state.Razemy.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.Razemy}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.Razemy}
      </label>
    ));

    const filtersProsesorOne = this.state.chastotaout.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.chastotaout}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.chastotaout}
      </label>
    ));
    const filtersProsesorTwo = this.state.familyprocessor.map((input, i) => (
      <label className="checkboxName" key={i}>
        <input
          type="checkbox"
          data-index={input.familyprocessor}
          id="scales"
          name={"name"}
          className="mr-2"
        />
        {input.familyprocessor}
      </label>
    ));
    const filtersProsesorThree = this.state.pokolenyyprocessor.map(
      (input, i) => (
        <label className="checkboxName" key={i}>
          <input
            type="checkbox"
            data-index={input.pokolenyyprocessor}
            id="scales"
            name={"name"}
            className="mr-2"
          />
          {input.pokolenyyprocessor}
        </label>
      )
    );
    const catalog = this.state.Catalog.map((massive, i) => {
      return (
        <option value={massive.Links} key={i}>
          {massive.CategoryName}
        </option>
      );
    });
    const catalogValue = this.state.massive.map((massive, i) => {
      return <span key={i}>{massive.category.CategoryName}</span>;
    });
    return (
      <div className="section_center catalog ">
        <div className="container d-flex flex-row container_catalog">
          <div className="col-md-3 ml-1 mr-1">
            <div className="col-md-12 text_catalog">Фильтр</div>
            <div className="filter_tovar mt-2">
              <div className="filter_proisvoditel">
                <select
                  className="browser-default custom-select"
                  onChange={this.handleClickOutside}
                >
                  {catalog}
                </select>
              </div>

              <ul className="filter_all">
                <li
                  value={1}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameProizovoditel  flex-column"
                >
                  <div className="text_Top">Производитель:</div>
                  {filterTovar}
                </li>
                <li
                  value={2}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameChips  flex-column"
                >
                  <div className="text_Top">Графический чип:</div>
                  {FilterGrafChips}
                </li>
                <li
                  value={3}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameTypeMemory  flex-column"
                >
                  <div className="text_Top">Тип Памяти:</div>
                  {filtersNew}
                </li>
                <li
                  value={4}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameValueMemory  flex-column"
                >
                  <div className="text_Top">Объем памяти:</div>
                  {filtersThree}
                </li>
                <li
                  value={5}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameShinuMemory  flex-column"
                >
                  <div className="text_Top">Разрядность шины памяти:</div>
                  {filtersfour}
                </li>
                <li
                  value={6}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameInterface  flex-column"
                >
                  <div className="text_Top">Интерфейс:</div>
                  {filtersfive}
                </li>
                <li
                  value={7}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameDopPower flex-column"
                >
                  <div className="text_Top">Дполнительное питание:</div>
                  {filterssix}
                </li>
                <li
                  value={8}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameRazemy flex-column"
                >
                  <div className="text_Top">Разъем:</div>
                  {filtersseven}
                </li>
                <li
                  value={9}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="Namechastotaout  flex-column"
                >
                  <div className="text_Top">Частота:</div>
                  {filtersProsesorOne}
                </li>
                <li
                  value={10}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="NameFamily  flex-column"
                >
                  <div className="text_Top">Семейство процессора:</div>
                  {filtersProsesorTwo}
                </li>
                <li
                  value={11}
                  onClick={value => this.handleChangeCheckbox(value)}
                  className="Namepokolenyyprocessor  flex-column"
                >
                  <div className="text_Top">Поколение процессора:</div>
                  {filtersProsesorThree}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 ml-1 mr-1">
            <div className="col-md-12 text_catalog d-flex">
              Каталог - {catalogValue}
              <div className="Select_header mr-2 ml-2">
                <select
                  className="browser-default custom-select"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option>По популярности</option>
                  <option>По новинкам</option>
                  <option>По возростанию цены</option>
                  <option>По убыванию цены</option>
                </select>
              </div>
            </div>
            <div
              ref={div => {
                this.div = div;
              }}
              className="col-md-12 container_items flex-wrap d-flex p-0"
            >
              {itemProduct}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
