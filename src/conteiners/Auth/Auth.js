import React, { Component } from "react";
import s from "../Auth/Auth.module.css";
import sell_it_logo_white from "../../assets/sell-it-logo-white.png";
import Form from "../../presentationals/Auth/Form/Form";

class Auth extends Component {
  render() {
    return (
      <div className={s.section}>
        <div className={s.section__left} />
        <div className={s.section__right}>
          <div>
            <img
              className={s.right__logo}
              src={sell_it_logo_white}
              alt="Logo"
            />
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Auth;

