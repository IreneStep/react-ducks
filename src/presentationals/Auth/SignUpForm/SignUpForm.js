import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "../SignUpForm/SignUpForm.module.css";

const SignUpForm = () => {
    return (
      <div className="tab__form__up ">
        <input className={s.input} type="email" placeholder="Email adress" />
        <input className={s.input} type="text" placeholder="Enter your name" />
        <input
          className={s.input}
          type="password"
          placeholder="Create a password"
        />
        <Link to="/products">
          <button className={s.button}>Registration</button>
        </Link>
      </div>
    );
  }

export default SignUpForm;
