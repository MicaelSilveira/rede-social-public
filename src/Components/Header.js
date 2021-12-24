import Link from "next/link";
import styles from "./Header.module.css";
import React from "react";
import Image from "next/image";
import Logo from "../Assets/dogs.svg";
import Button from "./Forms/Button";

const Header = ({ data, userLogout }) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a>
            <Image src={Logo} className={styles.logo} />
          </a>
        </Link>
        {data ? (
          <Link href={`/Account/${data.nome}`}>
            <a className={styles.login}>
              <strong>@{data.nome}</strong>
            </a>
          </Link>
        ) : (
          <Link href="/User/Login-Home">
            <a className={styles.login}>Login / Criar</a>
          </Link>
        )}
        {data && <Button onClick={userLogout}>Sair</Button>}
      </nav>
    </header>
  );
};

export default Header;
