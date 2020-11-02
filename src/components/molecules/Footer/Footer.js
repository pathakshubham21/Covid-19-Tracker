import React from "react";

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <footer className="bd-footer text-muted">
        <div className="p-3 p-md-5 description">
         gitin
          <p className="m-0">
            Designed and built by{" "}
              @Shubham Pathak
          </p>
         
          <ul className="d-flex d-flex ml-0 pl-0 mb-0">
            <li>
              <a href="https://github.com/pathakshubham21">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shubham-pathak-b84532170/">LinkedIn</a>
            </li>
          </ul>
          <p className="p-0 mb-0">
            Currently v2.0.0  
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;