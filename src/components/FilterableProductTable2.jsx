import React from 'react';
import { Component } from 'react';
import './../App.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      stockCheck: false,
      filteredList: this.props.products,
      list: this.props.products,
    };
  }

  updateListonSearch = (search) => {
    this.setState({
      search: search,
    });
  };

  checkStockOnly = (value) => {
    this.setState({
      stockCheck: value,
    });
  };

  render() {
    let search = this.state.search;
    let filteredProducts = this.props.products;

    filteredProducts = this.props.products.filter((product) => {
      if (this.state.stockCheck && !product.stocked) {
        return false;
      }
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div>
        <h1>FilterableProductTable</h1>
        <SearchBar
          onSearchBar={this.updateListonSearch}
          onCheckbox={this.checkStockOnly}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
