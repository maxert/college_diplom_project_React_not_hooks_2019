import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  <Link className="nav-link" to="#">
                    О Нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#">
                    Контакты
                  </Link>
                </li>
              </ul>
              <div className="ml-4 mr-4 icon-phone">
                <img src="../img/phone.png" className="white_img" alt="" />
              </div>
              <div className="ml-4 mr-4 icon-shopping">
                <img src="../img/shopping-cart.png" className="white_img" alt="" />
                <div className="ellipse">
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
