import { NextRequest, NextResponse } from "next/server";
import db from "@/app/Database/db.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get("title") || "";
  const category = searchParams.get("category") || "";
  const price = searchParams.get("price") || "";

  const page = Number(searchParams.get("_page") || "1");
  const perPage = Number(searchParams.get("_per_page") || "4");

  let products = [...db.products];

  // سرچ عنوان
  if (title) {
    products = products.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  // فیلتر دسته بندی
  if (category) {
    products = products.filter((item) => item.category === category);
  }

  // فیلتر قیمت
  if (price) {
    products = products.filter((item) => item.price <= Number(price));
  }

  const totalItems = products.length;

  const start = (page - 1) * perPage;
  const end = start + perPage;

  return NextResponse.json({
    data: products.slice(start, end),
    items: totalItems,
  });
}