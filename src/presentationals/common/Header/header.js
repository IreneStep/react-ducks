import React from "react";
import sell_it_logo from "../../../assets/sell-it.png";
import SearchBar from "../SearchBar/searchbar";
import Account from "../Account/account";
import s from "../Header/header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img src={sell_it_logo} alt="Logo" />
      </div>
      <SearchBar />
      <Account />
    </header>
  );
};

export default Header;
