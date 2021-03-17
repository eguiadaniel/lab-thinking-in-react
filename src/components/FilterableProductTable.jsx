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
      list : this.props.products,
    }
  }
  
  updateListonSearch = (search) => {
    const filteredList = this.state.list.filter((product) => { 
      return product.name.toLowerCase().includes(search.toLowerCase())       
    });    

    this.setState({
      list: filteredList,
      search: search
    })

  }
  

  render() {
    return (
      <div>
      <h1>FilterableProductTable</h1>
      <SearchBar onSearchBar={this.updateListonSearch} onCheckbox={this.updateListonCheck}/>
      <ProductTable products={this.state.list}/>
    </div>
    )
  }
}

export default FilterableProductTable
