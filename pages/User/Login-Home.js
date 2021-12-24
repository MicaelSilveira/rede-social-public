import React from "react";
import LoginFormulario from "./Login-Formulario";
import Head from "next/head";
import Link from "next/link";
import Button from "../../src/Components/Forms/Button";
import styles from "../../styles/Login-Home.module.css";
const Login = ({ userLogin, loading, erro }) => {
  return (
    <div>
      <Head>
        <title>Login | Home </title>
      </Head>
      {/* <Header /> */}
      <LoginFormulario userLogin={userLogin} loading={loading} erro={erro} />
      {/* <Footer /> */}
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta ?</p>
        <Link href="/User/Login-CriarUsuario">
          <Button>Cadastro</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
