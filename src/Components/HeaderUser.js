import React from "react";
import Link from "next/link";
import styles from "./HeaderUser.module.css";
import Image from "next/image";
import Feed from "../Assets/Feed.svg";
import AdicionarFoto from "../Assets/Adicionar.svg";
import Sair from "../Assets/Sair.svg";
import Estatic from "../Assets/Estatisticas.svg";
const HeaderUser = ({ userName, userLogout }) => {
  function MobileEvent({ target }) {
    target.classList.toggle("mobileActive");
    target.nextElementSibling.classList.toggle("mobileActive");
  }
  return (
    <>
      <button className="mobileButton" onClick={MobileEvent}></button>
      <nav className={`navHeaderUser animeDown`}>
        <ul>
          <li>
            <Link href={`/Account/@${userName}/Minhas-Fotos`}>
              <a>
                <Image src={Feed} />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Account/@${userName}/Postar-Foto`}>
              <a>
                <Image src={AdicionarFoto} />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Account/@${userName}/Estatisticas`}>
              <a>
                <Image src={Estatic} />
              </a>
            </Link>
          </li>
          <li>
            <button onClick={userLogout}>
              <Image src={Sair} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderUser;
