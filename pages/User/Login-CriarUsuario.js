import React from "react";
import Input from "../../src/Components/Forms/Input";
import Button from "../../src/Components/Forms/Button";
import useForm from "../../src/Components/Hooks/useForm";
import { USER_POST } from "../../src/Components/api";

import Head from "next/head";
const LoginCriarUsuario = ({ userLogin, loading }) => {
  const email = useForm("email");
  const username = useForm();
  const password = useForm(false);
  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validade() && username.validade() && password.validade()) {
      const { url, options } = USER_POST({
        username: username.value,
        password: password.value,
        email: email.value,
      });
      const response = await fetch(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head>
        <title>Login | CriarUsuario</title>
      </Head>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>carregando...</Button>
        ) : (
          <Button>Cadastre-se</Button>
        )}
      </form>
    </section>
  );
};

export default LoginCriarUsuario;
