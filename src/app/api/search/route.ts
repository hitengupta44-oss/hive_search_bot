import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = body.query || "";

    if (!query.trim()) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const hfResponse = await fetch(
      "https://beastzzz-hive-search-bot.hf.space/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Origin": "https://hiverift.com",
        },
        body: JSON.stringify({ message: query }),
      }
    );

    if (!hfResponse.ok) {
      const errText = await hfResponse.text();
      throw new Error(`Bot API error ${hfResponse.status}: ${errText}`);
    }

    const data = await hfResponse.json();
    const answer = data?.answer || "Sorry, I could not find an answer. Please try rephrasing.";

    return NextResponse.json({ answer, session_id: data?.session_id });
  } catch (error: any) {
    console.error("Search API error:", error.message);
    return NextResponse.json(
      { error: "Failed to get answer. Please try again." },
      { status: 500 }
    );
  }
}
