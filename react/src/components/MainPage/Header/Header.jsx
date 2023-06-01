

import React ,{useRef}from "react";
import{ Container } from 'reactstrap';
import './header.css';

const Header = () => {
    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    return (
      <header className="header">

      </header>
    );
  };

  export default Header;
