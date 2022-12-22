"use client";

import { useState } from "react";

export default function InfoUser() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleOnChangeLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value);
  }
  function handleOnChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div>
        <input placeholder="Login" onChange={handleOnChangeLogin} />
        <div>{login}</div>
      </div>
      <div>
        <input placeholder="Password" onChange={handleOnChangePassword} />
        <div>{password}</div>
      </div>
      {login && password && <button>Se connecter</button>}
    </div>
  );
}
