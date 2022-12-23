"use client";

import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 32px;
  text-align: center;
  margin: 50px;
`;

const ErrorDecoration = styled.div`
  width: 100%;
  height: 100px;
  background-color: #eee;
  border: 5px solid #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Erreur - Vous n{"'"}avez pas accès à cette page</title>
      </Head>
      <ErrorDecoration>
        <ErrorMessage>Vous n{"'"}avez pas accès à cette page</ErrorMessage>
      </ErrorDecoration>
      <Link href="/">
        <button>Retourner à l{"'"}accueil</button>
      </Link>
    </>
  );
}
