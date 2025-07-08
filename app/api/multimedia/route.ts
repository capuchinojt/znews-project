import { multimediaArticles } from '@/lib/data/mockMultimedia';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(multimediaArticles);
}