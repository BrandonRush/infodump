import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="search" method="get" onSubmit={e => e.preventDefault()}>
        <label className="search-bar">
          <span className="prefix">infodump.io</span>
          <span className="sep">/</span>
          <input
            autoFocus
            value={this.props.value}
            onChange={this.props.onChange}
            type="text"
            placeholder="Search..."
            spellCheck="false"
          />
          {this.props.value && (
            <i
              className="ion-md-close-circle canselect"
              onClick={this.props.clearSearch}
              role="button"
              aria-label="Clear search"
            />
          )}
        </label>
      </form>
    );
  }
}
export default SearchBar;
