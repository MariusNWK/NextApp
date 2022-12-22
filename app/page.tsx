import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Data from "./data";

export default function Home() {
  return (
    <main>
      <div>Next.js</div>
      <Data></Data>
    </main>
  );
}
