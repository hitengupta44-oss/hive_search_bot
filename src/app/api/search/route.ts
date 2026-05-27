import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = body.query || "";

    if (!query.trim()) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const hfResponse = await fetch(
      "https://beastzzz-hive-search-bot.hf.space/run/predict",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [query] }),
      }
    );

    if (!hfResponse.ok) {
      throw new Error(`HuggingFace API error: ${hfResponse.status}`);
    }

    const data = await hfResponse.json();
    const answer = data?.data?.[0] || "Sorry, I could not find an answer. Please try rephrasing your question.";

    return NextResponse.json({ answer });
  } catch (error: any) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Failed to get answer. Please try again." },
      { status: 500 }
    );
  }
}
