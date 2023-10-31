import { NextResponse } from "next/server";
import beneficiaries from "./data.json";

export async function GET() {
  return NextResponse.json(beneficiaries);
}
