import React from "react";
import styles from "./Input.module.css";
const Input = ({ label, type, name, onChange, value, error, validade }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        onChange={onChange}
        value={value}
        onBlur={() => validade()}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
