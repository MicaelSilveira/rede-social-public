import React from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTOS_GET } from "../api";
import styles from "../Feed/FeedPhotos.module.css";
import FeedPhotoItem from "../Feed/FeedPhotoItem";
const FeedPhotos = ({ setModalPhoto }) => {
  const { dataFetch, loadingFetch, request } = useFetch();
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET();
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
