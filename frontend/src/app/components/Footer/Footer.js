import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5 mb-3">
        <div className="row  justify-content-center align-items-end">
          <footer className="footer">
            <div className="text-light h1 justify-content-center align-items-center text-center">
              <a href="https://github.com/BrandonRush/infodump">
                <i className="logo icon ion-logo-github mr-2" />
              </a>
            </div>
            <span className="text-light">Brandon Rush © 2019</span>
          </footer>
        </div>
      </div>
    );
  }
}

export default Header;
