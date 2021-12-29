import React from "react";
import useFetch from "../../../src/Components/Hooks/useFetch";
import { API_URL } from "../../../src/Components/api";
import Error from "next/error";
const MinhasFotos = ({ data }) => {
  const userID = data.id;
  const { dataFetch, error, loading, request } = useFetch();
  function _GET({ page, total }) {
    return {
      url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${userID}`,
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  }
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = _GET({ page: 1, total: 5 });
      console.log(url);
      await request(url, options);
    }
    fetchPhotos();
  }, []);

  // React.useEffect(() => {
  //   async function fetchPhotos() {
  //     const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 6199 });
  //     const { json } = await request(url, options);
  //     console.log(json);
  //   }
  //   fetchPhotos();
  // }, []);
  if (error) <Error error={error} />;

  if (dataFetch) {
    console.log(dataFetch);
    return (
      <>
        <h1 className="title">Minhas fotos</h1>
        <ul className={`animeLeft`}>
          <li></li>
          {dataFetch.map((photo) => {
            return (
              <li key={photo.id}>
                <img src={photo.src} alt={photo.id} />
                <span>{photo.title}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else return null;
};

export default MinhasFotos;
