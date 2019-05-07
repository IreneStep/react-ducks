import React from "react";
import s from "../Form/Form.module.css";
import { Switch, Route, Link } from "react-router-dom";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const Form = () => {
  return (
    <div className={s.tabs__form}>
      <div className={s.btn}>
        <Link className={s.link} to="/auth/sign-in">
          <button className={s.button}>Sign in</button>
        </Link>

        <Link className={s.link} to="/auth/sign-up">
          <button className={s.button}>Sign up</button>
        </Link>
        </div>
        <Switch>
          <Route path="/auth/sign-in" component={SignInForm} />

          <Route path="/auth/sign-up" component={SignUpForm} />
        </Switch>
      
    </div>
  );
};

export default Form;
