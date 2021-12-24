import React from "react";

const usuario = ({ data }) => {
  if (data)
    return (
      <div className="animeLeft">
        <h1>Bem vindo: {data.username}</h1>
      </div>
    );
  else return null;
};

export default usuario;
