import React from "react";
import search_icon from "../../../assets/search-icon.png";
import s from "../SearchBar/SearchBar.module.css";
import { connect } from "react-redux";
import { changeSearchValue } from "../../../ducks/actions";

const mapStateToProps = state => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = dispatch => ({
  changeSearchValue: event => {
    dispatch(changeSearchValue(event.target.value));
  }
});

const SearchBar = ({ searchValue, changeSearchValue }) => {
  return (
    <div className={s.header__search}>
      <button className={s.button}>
        <img src={search_icon} alt="Search" />
      </button>
      <input
        className={s.input}
        type="text"
        value={searchValue}
        onChange={e => changeSearchValue(e)}
        placeholder="Try find something"
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
