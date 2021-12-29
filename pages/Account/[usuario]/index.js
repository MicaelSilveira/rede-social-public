import React from "react";
import Head from "next/head";

const usuario = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft">
        <Head>
          <title>{`Conta | @${userName}`}</title>
        </Head>
        <h1>Bem vindo: {userName}</h1>
      </div>
    );
  } else return null;
};

export default usuario;
