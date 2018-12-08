import React, { Component } from "react";
import { BrowserRouter , Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header className="header_menu">
        <nav className="navbar navbar-expand-lg navbar-light green">
          <div className="container">
            <BrowserRouter>
              <Link className="navbar-brand link_logo" to="#">
                Computer<br></br>
                <small>BOX</small>
              </Link>
            </BrowserRouter>
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
                  <BrowserRouter>
                    <Link className="nav-link" to="#">
                     Главная <span className="sr-only">(current)</span>
                    </Link>
                  </BrowserRouter>
                </li>
                <li className="nav-item dropdown">
                  <BrowserRouter>
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Каталог
                    </Link>
                  </BrowserRouter>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <BrowserRouter>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </BrowserRouter>
                    <BrowserRouter>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </BrowserRouter>
                    <div className="dropdown-divider" />
                    <BrowserRouter>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </BrowserRouter>
                  </div>
                </li>
                <li className="nav-item">
                  <BrowserRouter>
                    <Link className="nav-link" to="#">
                      О Нас
                    </Link>
                  </BrowserRouter>
                </li>
                <li className="nav-item">
                <BrowserRouter>
                  <Link className="nav-link disabled" to="#">
                    Контакты
                  </Link>
                  </BrowserRouter>
                </li>
              </ul>
              <div className="ml-4 mr-4 icon-phone">
             <img src="../img/phone.png"  className="white_img" alt=""></img>
              </div>
              <div className="ml-4 mr-4 icon-shopping">
              <img src="../img/shopping-cart.png" className="white_img" alt=""></img>
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
