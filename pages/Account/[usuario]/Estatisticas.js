import Head from "next/head";
import React from "react";

const Estatisticas = ({ login }) => {
  if (login)
    return (
      <div>
        <Head>
          <title> | Estatisticas</title>
        </Head>
        <h1 className="title">Estatisticas</h1>
      </div>
    );
  else return null;
};

export default Estatisticas;
