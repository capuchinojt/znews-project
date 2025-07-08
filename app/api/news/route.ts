import { mockNews } from "@/lib/data/mockNews";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockNews);
}
