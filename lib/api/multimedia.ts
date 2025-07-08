import { Multimedia } from "../types";

export async function getMultimedia(): Promise<Multimedia[]> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/multimedia`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch multimedia");
  }

  return res.json();
}
