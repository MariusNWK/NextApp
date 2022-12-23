"use client";

import { RequestCookie } from "next/dist/server/web/spec-extension/cookies/types";
import Link from "next/link";

interface LoggedNavbarProps {
  user: RequestCookie | undefined;
}

export default function LoggedNavbar({ user }: LoggedNavbarProps) {
  if (user?.value) {
    return (
      <>
        <li>
          <Link href="/messages">
            <button>Messages</button>
          </Link>
        </li>
        <li>
        <Link href="/profil">
            <button>Profil</button>
          </Link>
        </li>
      </>
    )
  }
  return <></>;
}