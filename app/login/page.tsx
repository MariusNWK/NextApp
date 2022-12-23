import Navbar from "../navbar";
import InfoUser from "./infoUser";
import { cookies } from 'next/headers';

export default function Login() {
  const nextCookies = cookies();
  const user = nextCookies.get('user');

  return (
    <div>
      <Navbar />
      <InfoUser user={user}/>
    </div>
  );
}
