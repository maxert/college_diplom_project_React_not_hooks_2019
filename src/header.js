import React, { Component } from "react";
import { Link } from "react-router-dom";





class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [{ ValueTovar: 0 }]
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }


  // Вызывается после удаления компонента из DOM

  // Вызывается до рендера
  componentWillMount() {
    document.addEventListener("click", this.handleClickOutside, false);
  }

  handleClickOutside(event) {
    let TovarBasket = document.getElementsByClassName("tovar_basket")[0];
    const domNode = document.querySelectorAll(".icon-shopping")[0];
    if (domNode.contains(event.target.parentNode) === false) {
      if (TovarBasket.contains(event.target.parentNode) === false) {
        TovarBasket.classList.remove("active");
        TovarBasket.classList.remove("active-left");
      }
    }
  }
  clickResult(e) {
    let TovarBasket = document.getElementsByClassName("tovar_basket")[0];
    let ResultText = document.getElementsByClassName("result_Text ")[0];

    TovarBasket.classList.remove("active-left");
    TovarBasket.classList.add("active");
    if (TovarBasket.children.length === 1) {
      ResultText.classList.add("active");
    } else {
      ResultText.classList.remove("active");
    }
  }

  render() {
    return (
      <header className="header_menu">
        <nav className="navbar navbar-expand-lg navbar-light green">
          <div className="container">
            <Link className="navbar-brand link_logo" to="/">
              Computer
              <br />
              <small>BOX</small>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-flex justify-content-around w-100 ml-4 mr-4">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Главная <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">
                    Каталог
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    О Нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Контакты
                  </Link>
                </li>
              </ul>
              <div className="ml-4 mr-4 icon-phone">
                <img src="../img/phone.png" className="white_img" alt="" />
              </div>
              <div
                className="ml-4 mr-4 icon-shopping"
                onClick={this.clickResult.bind(this)}
              >
                <img
                  src="../img/shopping-cart.png"
                  className="white_img"
                  alt=""
                />
                <div className="ellipse">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="tovar_basket" onClick={this.handleClickOutside}>
          <div className="result_Text m-2 price">
            <span>Итого:</span>
            <span className="result green_color"></span>
            <span className="green_color">грн</span>
            <div className="basket_none">Ваша Корзина Пуста</div>
          </div>
          <div className="container_tovar_basket" />
        </div>
      </header>
    );
  }
}

export default  Header;
