import React from "react";
import "../styles/globals.css";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "../src/Components/api";
import { useRouter } from "next/router";

function MyApp({ Component }) {
  const router = useRouter();
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const userLogout = React.useCallback(async function () {
    setLogin(false);
    setData(null);
    setError(null);
    setLoading(false);
    window.localStorage.removeItem("token");
    router.push("/User/Login-Home");
  }, []);
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    router.push(`/Account/@${json.username}`);
  }
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error("Usuario Invalido");
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header data={data} userLogout={userLogout} />
      <Component
        userLogin={userLogin}
        erro={error}
        login={login}
        loading={loading}
        data={data}
      />
      <Footer />
    </>
  );
}

export default MyApp;
