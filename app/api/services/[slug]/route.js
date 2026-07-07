import { NextResponse } from 'next/server';
import { services } from '../../../../lib/services.js';

/** GET /api/services/:slug → one service */
export async function GET(request, { params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  return NextResponse.json(service, {
    headers: { 'cache-control': 'public, max-age=300' }
  });
}
