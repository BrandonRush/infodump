import React from 'react';

const Header = () => {
  return (
    <header className="container container-fluid p-5 mt-5 transparent nohighlight">
      <div className="row">
        <div className="col-sm text-center" />
        <div className="col-sm text-center h1 ">
          <div
            href="/#"
            role="link"
            className="noselect canselect text-light title"
            style={{ cursorDecoration: 'none' }}
          >
            <i className="icon ion-md-information-circle mr-2" />
            <span id="info">info</span>
            <span id="dump">dump</span>
            {/* <span className="tiny-text theme-switch" role="img">
                🌗
              </span> */}
          </div>
        </div>
        <div className="col-sm text-center text-light font-weight-normal" />
      </div>
    </header>
  );
};

export default Header;
