import React from "react";

function Header() {
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Магазинчик
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>Dimboss</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
