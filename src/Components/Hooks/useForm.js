import React from "react";

const regex = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email invalido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha presisa ter 1 caracter maisculo, 1 minusculo e 1 digito. Com no minimo 8 caracteres",
  },
};
const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);
  function validade() {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (regex[type] && !regex[type].regex.test(value)) {
      setError(regex[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  function onChange({ target }) {
    if (error) validade();
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    validade: validade,
    error,
  };
};

export default useForm;
