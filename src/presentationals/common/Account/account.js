import React from 'react';
import avatar from '../../../assets/91.png';
import icon from '../../../assets/sign-out-icon.png';
import s from '../Account/account.module.css';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className={s.wrapper__account}>
      <div className={s.account__avatar}>
        <div className={s.avatar__icon}>
          <img src={avatar} alt="Avatar" />
        </div>

        <div className={s.account__nickname}>Kim Evans</div>

        <div className={s.account__sign__out}>
          <Link to="/auth/sign-in">
            <img src={icon} alt="Sign out icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;