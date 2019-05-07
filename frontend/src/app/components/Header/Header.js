import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron fluid className="p-5 border-bottom border-dark bg-primary">
        <div className="col-sm text-center text-light" />
        <div className="col-sm text-center text-light h2 font-weight-bold">
          <div
            href="/#"
            role="link"
            className="noselect canselect text-light"
            style={{ cursorDecoration: 'none' }}
          >
            <i className="icon ion-md-information-circle mr-2" />
            infodump
          </div>
        </div>
        <div className="col-sm text-center text-light font-weight-normal">
          <a className="text-light font-weight-normal" href="/options/">
            <i className="icon ion-md-settings mr-2" />
            Options
          </a>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;
