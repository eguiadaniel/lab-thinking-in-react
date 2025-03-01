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
    this.triggerFiltering({
      search: search,
      stockCheck: this.state.stockCheck,
    });
  };

  checkStockOnly = (value) => {
    this.setState({
      stockCheck: value,
    });
    this.triggerFiltering({
      search: this.state.search,
      stockCheck: value,
    });
  };

  triggerFiltering = ({ search, stockCheck }) => {
    const filteredList = this.state.list.filter((product) => {
      if (stockCheck && !product.stocked) {
        return false;
      }
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      filteredList: filteredList,
    });
  };

  render() {
    return (
      <div>
        <h1>FilterableProductTable</h1>
        <SearchBar
          onSearchBar={this.updateListonSearch}
          onCheckbox={this.checkStockOnly}
        />
        <ProductTable products={this.state.filteredList} />
      </div>
    );
  }
}

export default FilterableProductTable;
