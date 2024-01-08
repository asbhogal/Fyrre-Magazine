import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const news: string[] = [
    "Christopher Vaccaro reports on the latest street art festival",
    "A look back at the events which defined Berlin's cultural landscape",
    "Episode 5 of Fyrre Magazine's podcast series is out now",
  ];
  return NextResponse.json(news, { status: 200 });
}
