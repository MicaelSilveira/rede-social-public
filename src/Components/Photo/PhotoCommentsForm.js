import React from "react";
import EnviarInput from "../../Assets/EnviarInput.svg";
import { COMMENT_POST } from "../api";
import Image from "next/image";
import useFetch from "../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";
const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error, loadingFetch } = useFetch();
  const [comment, setComment] = React.useState("");
  const inputRef = React.useRef();
  async function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current.value === "") {
      inputRef.current.placeholder = "Preencha um valor";
      return false;
    }
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((cmm) => [...cmm, json]);
      inputRef.current.placeholder = "Comente";
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textArea}
        id="comment"
        name="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        ref={inputRef}
      />

      <button name="button" className={styles.button}>
        {loadingFetch ? "Enviando" : <Image src={EnviarInput} />}
      </button>

      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
