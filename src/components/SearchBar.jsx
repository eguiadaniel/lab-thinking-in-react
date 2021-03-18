import React, { Component } from 'react'
import './../App.css';

export class SearchBar extends Component {

  state= {
    search:'',
    stockCheck: false
  }

  handleSearchInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      search : value
      
    })
    this.props.onSearchBar(e.target.value)
  }
  
  handleCheckboxInputChange = (e) => {
    const checked = e.target.checked;
    console.log(checked)
    this.setState({
      stockCheck : checked
    });
    this.props.onCheckbox(e.target.checked)
  }

  render() {
    return (
      <div>
        <input
          name="q"
          value={this.state.search}
          placeholder={"Search product"}
          onChange={this.handleSearchInputChange}
        />
        <div  className="checkbox">
        <input 
        type="checkbox"
        id="stockCheck" 
        name="stockCheck" 
        checked={this.state.stockCheck}
        onChange={this.handleCheckboxInputChange} /> 
        <label htmlFor="stockCheck" >Only show products in stock</label>     

        </div>
      </div>
    )
  }
}

export default SearchBar
