import React from "react";
import FeedModal from "../Feed/FeedModal";
import FeedPhotosPublic from "./FeedPhotosPublic";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotosPublic setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
