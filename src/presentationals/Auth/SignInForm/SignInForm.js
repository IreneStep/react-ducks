import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "../SignInForm/SignInForm.module.css";
import {fetchProducts} from '../../../ducks/actions';

const SignInForm = () => {
  return (
    <div className="tab__form__in">
      <input className={s.input} type="email" placeholder="Email" />
      <input className={s.input} type="password" placeholder="Password" />
      <Link to="/products">
        <button className={s.button} onClick={() => fetchProducts}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default SignInForm;
