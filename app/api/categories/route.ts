import { NextResponse } from 'next/server';
import { categories } from '@/lib/data/mockNews';

export async function GET() {
  return NextResponse.json({
    data: categories,
    status: 'success',
    total: categories.length
  });
}