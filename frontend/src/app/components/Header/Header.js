import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className="p-5 mt-5 transparent nohighlight">
      <Row>
        <div className="col-sm text-center" />
        <div className="col-sm text-center h1 ">
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
};

export default Header;
