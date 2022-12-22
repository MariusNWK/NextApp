import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";
import LinkButton from "./linkbutton";
import TestHome from "./testHome";

export default function Home() {
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
      <Navbar />
      <h1>Bienvenue</h1>
      {linkpages.map((link) => {
        return <LinkButton key={link.id} title={link.title} url={link.url} />;
      })}
      <TestHome />
    </main>
  );
}
