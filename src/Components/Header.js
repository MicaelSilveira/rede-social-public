import Link from "next/link";
import styles from "./Header.module.css";
import React from "react";
import Image from "next/image";
import Logo from "../Assets/Test.svg";
import HeaderUser from "./HeaderUser";
const Header = ({ data, headerUser, setHeaderUser, userLogout, loading }) => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a>
            <Image src={Logo} className={styles.logo} />
          </a>
        </Link>
        {loading && <h1 className="loading animeLeft">Aguarde...</h1>}
        {data ? (
          <>
            <Link href={`/Account/@${data.nome}`}>
              <a onClick={() => setHeaderUser(true)} className={styles.login}>
                <strong>{`@${data.nome}`}</strong>
              </a>
            </Link>

            <HeaderUser userName={data.nome} userLogout={userLogout} />
          </>
        ) : (
          <Link href="/User/Login-Formulario">
            <a className={styles.login}>Login / Criar</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
