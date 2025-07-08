import { Book } from "../types";

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/books`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}
