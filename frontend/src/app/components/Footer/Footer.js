import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mb-4">
      <address className=" h1 justify-content-center align-items-center text-center">
        <a
          href="https://github.com/BrandonRush"
          aria-label="Check out the Github repository for this app."
          rel="noreferrer noopener"
          target="_blank"
        >
          <i className="logo icon ion-logo-github" />
        </a>
      </address>
      <summary className="signature bold-text">
        Brandon Rush © 2019
        <span
          className="canselect nohighlight emoji"
          role="img"
          aria-label="Sparkling"
        >
          ✨
        </span>
      </summary>
    </footer>
  );
};

export default Footer;
