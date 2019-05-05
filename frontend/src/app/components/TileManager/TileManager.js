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
        <nav className="navbar navbar-light justify-content-center p-3 bg-primary">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control rounded mr-sm-2 p-3"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
              style={{ maxWidth: '1650px', background: '#0067d5' }}
            />
          </form>
        </nav>
        <div className="container-fluid" style={{ maxWidth: '1650px' }}>
          <div className="row justify-content-center ">
            <React.Fragment>{this.props.children}</React.Fragment>
          </div>
        </div>
      </TileProvider>
    );
  }
}

export const TileConsumer = TileContext.Consumer;
export default TileManager;
