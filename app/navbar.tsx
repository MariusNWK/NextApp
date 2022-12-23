import { RequestCookie } from "next/dist/server/web/spec-extension/cookies/types";
import Link from "next/link";
import LoggedNavbar from "./loggednavbar";

interface NavbarProps {
  user: RequestCookie | undefined;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <button>Users</button>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </li>
        <LoggedNavbar user={user}/>
      </ul>
    </nav>
  );
}
