import React from "react";
import Input from "../../src/Components/Forms/Input";
import Button from "../../src/Components/Forms/Button";
import useForm from "../../src/Components/Hooks/useForm";
import { USER_POST } from "../../src/Components/api";
import styles from "../../styles/Login-Criar.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import useFetch from "../../src/Components/Hooks/useFetch";
import Error from "../../src/Components/Helper/Error";
const LoginCriarUsuario = ({ userLogin, login, data }) => {
  const { loadingFetch, error, request } = useFetch();
  const router = useRouter();
  if (login) router.push(`/Account/@${data.username}`);
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
      const { response } = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  }
  return (
    <div className={`${styles.cadastro} margin `}>
      <section className="animeLeft">
        <Head>
          <title>Login | CriarUsuario</title>
        </Head>
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username} />
          <Input label="Email" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loadingFetch ? (
            <Button disabled>carregando...</Button>
          ) : (
            <Button>Cadastre-se</Button>
          )}
        </form>
        <Error error={error} />
      </section>
    </div>
  );
};

export default LoginCriarUsuario;
