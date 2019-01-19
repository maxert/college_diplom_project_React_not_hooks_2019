import React, { Component } from 'react';
class Catalog extends Component {
  render() {
    return (
      <div className="section_center catalog">
        <div className="container d-flex flex-row">
          <div className="col-md-4 ml-1 mr-1">
            <div className="col-md-12 mt-2 text_catalog">Фильтр</div>
          </div>
          <div className="col-md-8 ml-1 mr-1">
            <div className="col-md-12 mt-2 text_catalog">Каталог</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
