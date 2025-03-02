import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importedNames
      }
    }

    // This function will filter the names array based on the search input
    handleSearch = (event) => {
        this.setState({
            names: importedNames.filter(name => name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>matching names found:{this.state.names.length}</p>
        <form>
            <input
                onChange={this.handleSearch}
                type="text" 
                placeholder="search names..." 
            />
        </form>
        <div style={{margin: 'auto'}}>
            {this.state.names.map((name => {
                return <p key={name}>{name}</p>
            }))}
        </div>
      </div>
    )
  }
}

export default SearchBar