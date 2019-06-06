import React from 'react';

const Header = () => {
  return (
    <header className="transparent nohighlight">
      <div role="link" className="noselect canselect title">
        <i className="icon ion-md-information-circle mr-2" />
        <span id="info">info</span>
        <span id="dump">dump</span>
        {false && <span id="beta">beta</span>}
        {/* <span className="tiny-text theme-switch" role="img">
                🌗
              </span> */}
      </div>
    </header>
  );
};

export default Header;
