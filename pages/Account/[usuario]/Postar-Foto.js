import { useRouter } from "next/router";
import React from "react";
import { PHOTO_POST } from "../../../src/Components/api";
import Button from "../../../src/Components/Forms/Button";
import Input from "../../../src/Components/Forms/Input";
import useFetch from "../../../src/Components/Hooks/useFetch";
import useForm from "../../../src/Components/Hooks/useForm";
import styles from "../../../styles/Post-Foto.module.css";
const PostarFoto = ({ data }) => {
  const router = useRouter();
  const nome = useForm();
  const [img, setImg] = React.useState({});
  const { dataFetch, error, loadingFetch, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", "10");
    formData.append("idade", "10");
    const username = data.username;
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    const { response } = await request(url, options);
    if (response.ok) router.push(`/Account/@${username}/Minhas-Fotos`);
  }
  function handleChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  if (data) {
    return (
      <div className="animeLeft">
        <h1 className="title">Postar Foto</h1>
        <section className={`${styles.photoPost}`}>
          <form onSubmit={handleSubmit}>
            <Input label="Nome" type="text" name="name" {...nome} />
            <input
              className={styles.file}
              type="file"
              name="img"
              id="img"
              onChange={handleChange}
            />
            {loadingFetch ? (
              <Button disabled>Enviando</Button>
            ) : (
              <Button>Enviar</Button>
            )}
          </form>
          <div>
            {img.preview && (
              <div
                className={styles.preview}
                style={{ backgroundImage: `URL(${img.preview})` }}
              ></div>
            )}
          </div>
        </section>
      </div>
    );
  } else return null;
};

export default PostarFoto;
