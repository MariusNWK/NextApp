import { cookies } from "next/headers";
import ErrorPage from "../error/page";
import Navbar from "../navbar";

export default function Profil() {
  const nextCookies = cookies();
  const user = nextCookies.get('user');

  if (!user?.value) {
    return <ErrorPage />
  }

  return <div>
    <Navbar user={user}/>
    <code>Mon profil</code>
  </div>
}
