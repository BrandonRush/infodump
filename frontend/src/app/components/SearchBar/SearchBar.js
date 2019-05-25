import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form data-js-search-form="" className="search" action="." method="get">
        <label nesting="" id="" className="search-box ">
          <span className="prefix">infodump.io</span>
          <span className="sep" />
          <input
            name="q"
            type="text"
            data-js-search-input=""
            placeholder="Search..."
          />
        </label>
      </form>
    );
  }
}
export default SearchBar;
