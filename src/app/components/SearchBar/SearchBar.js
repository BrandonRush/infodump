import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="search" method="get">
        <label className="search-bar">
          <span className="prefix">infodump.io</span>
          <span className="sep">/</span>
          <input type="text" placeholder="Search..." />
        </label>
      </form>
    );
  }
}
export default SearchBar;
