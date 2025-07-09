import { Book } from "../types";

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/books`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 }, // 1 hour cache
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}
