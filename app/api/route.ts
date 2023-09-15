import { NextResponse } from "next/server";
import beneficiaries from "./data.json"

const Beneficiary: {} = beneficiaries;

export async function GET(request: Request) {
    return NextResponse.json(Beneficiary)
}