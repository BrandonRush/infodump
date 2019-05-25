import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mb-4">
      <div className=" h1 justify-content-center align-items-center text-center">
        <a
          href="https://github.com/BrandonRush/infodump"
          rel="noreferrer noopener"
          target="_blank"
        >
          <i className="logo icon ion-logo-github" />
        </a>
      </div>
      <div className="signature bold-text">
        Brandon Rush © 2019
        <span
          className="canselect nohighlight emoji"
          role="img"
          aria-label="Sparkling"
        >
          ✨
        </span>
      </div>
    </footer>
  );
};

export default Footer;
