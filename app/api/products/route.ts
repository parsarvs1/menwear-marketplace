import { NextResponse } from "next/server";
import db from "@/app/Database/db.json";

export async function GET() {
  return NextResponse.json(db.products);
}