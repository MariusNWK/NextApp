"use client";

import { Dispatch, SetStateAction } from "react";
import { UserType, getData, PhotoType } from "./page";
import { Inter, Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

interface dataButtonsProps {
  element: UserType;
  setPhoto: Dispatch<SetStateAction<PhotoType>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function DataButton({
  element,
  setPhoto,
  setLoading,
}: dataButtonsProps) {
  async function handleOnClick(id: number) {
    setLoading(true);
    const url =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      element.objectId;
    const data: PhotoType = await getData(url);
    setPhoto(data);
    setLoading(false);
  }

  return (
    <button
      onClick={() => handleOnClick(element.id)}
      className={montserrat.className}
    >
      <h1>{element.name}</h1>
      <h2>{element.email}</h2>
    </button>
  );
}
