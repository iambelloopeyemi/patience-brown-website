import { NextResponse } from "next/server";
import processes from "./data.json";

export async function GET() {
  return NextResponse.json(processes);
}
