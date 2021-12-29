import React from "react";
import Head from "next/head";
import FeedPhotos from "../../../src/Components/Feed/FeedPhotos";
const MinhasFotos = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft">
        <Head>
          <title> @{userName}| Minhas Fotos</title>
        </Head>
        <h1 className="title">Minhas fotos</h1>
        <section>
          <FeedPhotos />
        </section>
      </div>
    );
  } else return null;
};

export default MinhasFotos;
