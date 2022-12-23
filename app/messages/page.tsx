import { cookies } from "next/headers";
import ErrorPage from "../error/page";
import Navbar from "../navbar";

export default function Messages() {
  const nextCookies = cookies();
  const user = nextCookies.get('user');

  if (!user?.value) {
    return <ErrorPage />
  }

  return <div>
    <Navbar user={user}/>
    <code>Mes messages</code>
  </div>
}
