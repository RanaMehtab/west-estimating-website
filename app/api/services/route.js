import { NextResponse } from 'next/server';
import { services } from '../../../lib/services.js';

/**
 * GET /api/services            → all services
 * GET /api/services?category=  → filtered
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const data = category
    ? services.filter((s) => s.category.toLowerCase() === category.toLowerCase())
    : services;

  return NextResponse.json(data, {
    headers: { 'cache-control': 'public, max-age=300' }
  });
}
