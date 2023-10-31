import { NextResponse } from "next/server";
import testimonies from "./data.json";

export async function GET() {
  return NextResponse.json(testimonies);
}
