import Link from "next/link";

export default function Navbar() {
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
      </ul>
    </nav>
  );
}
