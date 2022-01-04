import React from "react";
import useFetch from "../Hooks/useFetch";
import { API_URL } from "../api";
import styles from "./FeedPhotos.module.css";
import FeedPhotoItem from "./FeedPhotoItem";
const FeedPhotos = ({ setModalPhoto }) => {
  const userID = window.localStorage.getItem("userID");
  const { dataFetch, error, loadingFetch, request } = useFetch();
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
      const { url, options } = _GET({ page: 1, total: 0 });

      await request(url, options);
    }
    fetchPhotos();
  }, []);

  if (loadingFetch) return <p className="loading">Carregando</p>;
  if (dataFetch) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {dataFetch.map((photo) => {
          return (
            <FeedPhotoItem
              photo={photo}
              setModalPhoto={setModalPhoto}
              key={photo.id}
            />
          );
        })}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
