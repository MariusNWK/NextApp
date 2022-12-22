"use client";

import { useRouter } from "next/navigation";

interface LinkButtonProps {
  url: string;
  title: string;
}

export default function LinkButton({ url, title }: LinkButtonProps) {
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.push(url)}>
        <h2>{title}</h2>
      </button>
    </div>
  );
}
