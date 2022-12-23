import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";
import LinkButton from "./linkbutton";
import TestHome from "./testHome";
import { cookies } from "next/headers";

export default function Home() {
  const nextCookies = cookies();
  const user = nextCookies.get('user');

  const linkpages = [
    {
      id: 1,
      title: "Se rendre vers Users",
      url: "/users",
    },
    {
      id: 2,
      title: "Se connecter",
      url: "/login",
    },
  ];

  return (
    <main>
      <Navbar user={user}/>
      <h1>Bienvenue</h1>
      {linkpages.map((link) => {
        return <LinkButton key={link.id} title={link.title} url={link.url} />;
      })}
      <TestHome />
    </main>
  );
}
