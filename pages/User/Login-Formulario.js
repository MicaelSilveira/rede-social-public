import React from "react";
import Button from "../../src/Components/Forms/Button";
import Input from "../../src/Components/Forms/Input";
import useForm from "../../src/Components/Hooks/useForm";
import Error from "../../src/Components/Helper/Error";
import styles from "../../styles/Login-Form.module.css";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const LoginForm = ({ userLogin, loading, erro, login, data }) => {
  const router = useRouter();
  if (login) router.push(`/Account/@${data.username}`);
  const username = useForm();
  const password = useForm();
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validade() && password.validade()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div className={`${styles.login} margin`}>
      <Head>
        <title>Login | Formulario</title>
      </Head>
      <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="usuario" {...username} />
          <Input label="Senha" type="password" name="senha" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={erro} />
        </form>
        <Link href="/User/Login-SenhaPerdida">
          <a className={styles.perdeu}>Perdeu a Senha?</a>
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta ?</p>
          <Link href="/User/Login-CriarUsuario">
            <a>
              <Button>Cadastro</Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
