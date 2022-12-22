"use client";

import Head from "next/head";
import Link from "next/link";

export default function TestHome() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="hero">
        <h1 className="title">Bienvenue sur la page daccueil</h1>
        <p className="description">
          To get started, click on <code>Users</code> or <code>Login</code>
        </p>

        <div className="row">
          <Link href="/users">
            <h3>Users &rarr;</h3>
            <p>Accéder aux utilisateurs</p>
          </Link>
          <Link href="/login">
            <h3>Login &rarr;</h3>
            <p>Se connecter</p>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
}
