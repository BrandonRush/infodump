import React, { Component } from 'react';

const TileContext = React.createContext();

class TileProvider extends Component {
  state = {
    selected: '',
    title: '',
    updateTitle: newTitle => {
      this.setState = { title: newTitle };
      alert(this.state.title);
    },
    testfunc: () => {
      console.log('test');
    },
  };

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
      <div className="container-fluid" style={{ maxWidth: '1650px' }}>
        <div className="row  justify-content-center ">
          <TileProvider>
            <React.Fragment>{this.props.children}</React.Fragment>
          </TileProvider>
        </div>
      </div>
    );
  }
}

export const TileConsumer = TileContext.Consumer;
export default TileManager;
