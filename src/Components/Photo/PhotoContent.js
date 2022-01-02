import Link from "next/link";
import React from "react";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className={`${styles.photo} animeLeft`}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link href={`/Perfil/@${photo.author}`}>
              <a>@{photo.author}</a>
            </Link>
            <span className={styles.visualizaçao}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/Foto/${photo.id}`}>
              <a>{photo.title}</a>
            </Link>
          </h1>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
