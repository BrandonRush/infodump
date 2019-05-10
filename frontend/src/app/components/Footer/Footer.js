import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="mt-5 mb-3">
        <Row className="justify-content-center align-items-end">
          <footer className="footer">
            <div className="text-light h1 justify-content-center align-items-center text-center">
              <a
                href="https://github.com/BrandonRush/infodump"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="logo icon ion-logo-github mr-2" />
              </a>
            </div>
            <span className="text-light">Brandon Rush © 2019</span>
          </footer>
        </Row>
      </Container>
    );
  }
}

export default Header;
