import React from 'react'
import {Component} from 'react'
import './../App.css';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


class FilterableProductTable extends Component {

  constructor (props) {
    super (props);
    this.state = {
      search:'',
      stockCheck: false,
      filteredList: this.props.products,
      list : this.props.products,
    }
  }
  
  updateListonSearch = (search) => {
    if(search !== ''){
      const filteredList = this.state.list.filter((product) => { 
        if (this.state.stockCheck && !product.stocked) {
          return false;
        } return product.name.toLowerCase().includes(search.toLowerCase())       
      });    
  
      this.setState({
        filteredList: filteredList,
        search: search
      })
    } else {
      this.setState({
        filteredList: this.props.products,
    })
  } 
  }

  checkStockOnly = (value) => {
    this.setState({
     stockCheck: value
  })
}
  
  render() {
    return (
      <div>
      <h1>FilterableProductTable</h1>
      <SearchBar onSearchBar={this.updateListonSearch} onCheckbox={this.checkStockOnly}/>
      <ProductTable products={this.state.filteredList}/>
    </div>
    )
  }
}

export default FilterableProductTable
