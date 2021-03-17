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

    this.props.onSearchBar(this.state.search)
  }
  
  handleCheckboxInputChange = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    
    this.setState({
      stockCheck : checked
    })
    this.props.onCheckBox(this.state.stockCheck)

  }

  render() {
    return (
      <fieldset>
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
        value={this.state.stockCheck}
        onChange={this.handleCheckboxInputChange} /> 
        <label for="stockCheck" >Only show products in stock</label>     

        </div>
      </fieldset>
    )
  }
}

export default SearchBar
