import { NextRequest, NextResponse } from "next/server";

// 群仙殿香火计数器中转：workers.dev 在国内无法直连，
// 由 Vercel 服务端转发到 Cloudflare Worker（服务器间不受影响）。
const UPSTREAM = "https://cyber-shrine.lyq017.workers.dev";

async function proxy(req: NextRequest, path: string[] | undefined) {
  const url = `${UPSTREAM}/${(path ?? []).join("/")}`;
  const init: RequestInit = {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  };
  if (req.method === "POST") init.body = await req.text();
  try {
    const res = await fetch(url, init);
    const body = await res.text();
    return new NextResponse(body, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return NextResponse.json({ error: "upstream unreachable" }, { status: 502 });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  return proxy(req, params.path);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  return proxy(req, params.path);
}
