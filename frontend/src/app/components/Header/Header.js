import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

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
              className="noselect canselect text-light title"
              style={{ cursorDecoration: 'none' }}
            >
              <i className="icon ion-md-information-circle mr-2" />
              infodump
              {/* <span className="tiny-text theme-switch" role="img">
                🌗
              </span> */}
            </div>
          </div>
          <div className="col-sm text-center text-light font-weight-normal" />
        </Row>
      </Container>
    );
  }
}

export default Header;
