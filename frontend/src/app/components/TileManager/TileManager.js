import React, { Component } from 'react';

const TileContext = React.createContext();

class TileProvider extends Component {
  state = {
    selected: '',
    changeSelection: newTitle => {
      this.setState({ selected: newTitle });
    },
  };

  componentDidUpdate() {
    console.log(`Selected ${this.state.selected} `);
  }

  render() {
    return (
      <TileContext.Provider value={this.state}>
        {this.props.children}
      </TileContext.Provider>
    );
  }
}

class TileManager extends Component {
  state = { tiles: [] };

  render() {
    return (
      <TileProvider>
        <nav className="navbar navbar-dark bg-primary">
          <a
            className="navbar-brand justify-content-center align-items-center"
            href="#"
          >
            Sticky top
          </a>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </nav>
        <div className="container-fluid" style={{ maxWidth: '1650px' }}>
          <div className="row  justify-content-center ">
            <React.Fragment>{this.props.children}</React.Fragment>
          </div>
        </div>
      </TileProvider>
    );
  }
}

export const TileConsumer = TileContext.Consumer;
export default TileManager;
