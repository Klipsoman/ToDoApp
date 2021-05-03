import React from "react";
import css from './Logo.module.css'

export const Logo = () => {
  return (
    <div>
      <p className={css.logoTitle}>
        напиши свой <span className={css.logo}>To do list</span>
      </p>
    </div>
  );
};
