"use client";

import { useEffect, useState } from "react";
import DataButton from "./dataButton";
import Image from "next/image";
import Navbar from "../navbar";

export class UserType {
  id: number = 0;
  name: string = "";
  username: string = "";
  email: string = "";
  phone: string = "";
  website: string = "";
  objectId: number = 0;
}

export class PhotoType {
  objectID: number = 0;
  primaryImage: string = "";
  objectName: string = "";
  title: string = "";
}

export async function getData(url: string) {
  console.log(url);
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const revalidate = 60; // refresh toutes les 60 secondes

export default function Data() {
  const [photo, setPhoto] = useState(new PhotoType());
  const defaultData: UserType[] = [];
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      const idPhotos = [
        10923, 25965, 45321, 34738, 51234, 61234, 23721, 11893, 29645, 29453,
      ];
      let data: UserType[] = await getData(
        "https://jsonplaceholder.typicode.com/users"
      );
      data = data.map((element, index) => {
        element.objectId = idPhotos[index];
        return element;
      });
      setData(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      {data.map((element) => {
        return (
          <DataButton
            key={element.id}
            element={element}
            setPhoto={setPhoto}
            setLoading={setLoading}
          />
        );
      })}
      {(photo.primaryImage || loading) && (
        <div style={{ border: "solid", borderWidth: "1px", padding: "15px" }}>
          {loading ? (
            <div>chargement...</div>
          ) : (
            <div>
              <h1>{photo.title}</h1>
              <Image
                alt="avatarurl"
                src={photo.primaryImage}
                width={300}
                height={300}
              />
              <div>{photo.objectName}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
