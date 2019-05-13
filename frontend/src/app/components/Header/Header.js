import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <Container fluid className="p-5 mt-5 transparent nohighlight">
        <Row>
          <div className="col-sm text-center text-light" />
          <div className="col-sm text-center text-light h1 font-weight-bold">
            <div
              href="/#"
              role="link"
              className="noselect canselect text-light logo"
              style={{ cursorDecoration: 'none' }}
            >
              <i className="icon ion-md-information-circle mr-2" />
              infodump
            </div>
          </div>
          <div className="col-sm text-center text-light font-weight-normal" />
        </Row>
      </Container>
    );
  }
}

export default Header;
