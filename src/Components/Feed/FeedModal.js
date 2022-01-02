import React from "react";
import { PHOTO_GET } from "../api";
import useFetch from "../Hooks/useFetch";
import styles from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";
const FeedModal = ({ photo, setModalPhoto }) => {
  const { dataFetch, error, loadingFetch, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, []);
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }
  return (
    <div className={`${styles.modal}`} onClick={handleOutsideClick}>
      {loadingFetch && <p className="loading">Carregando</p>}
      {error && <Error error={error} />}
      {dataFetch && <PhotoContent data={dataFetch} />}
    </div>
  );
};

export default FeedModal;
