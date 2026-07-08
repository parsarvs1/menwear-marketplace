"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [searchtitle, setsearchtitle] = useState("");
  const [searchprice, setsearchprice] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlesearchtitle = () => {
    const currentsearchparams = new URLSearchParams(searchParams.toString());
    currentsearchparams.set("title", searchtitle);
    router.push(`/store?${currentsearchparams.toString()}`);
  };

  const handlesearchprice = () => {
    const currentsearchparams = new URLSearchParams(searchParams.toString());
    currentsearchparams.set("price", searchprice);
    router.push(`/store?${currentsearchparams.toString()}`);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
        <input
          onChange={(e) => setsearchtitle(e.target.value)}
          type="text"
          placeholder="نام محصول را وارد کنید"
          className="
            px-6 py-3 m-0 text-right
            bg-white dark:bg-gray-800
            border-2 border-blue-200 dark:border-blue-900
            rounded-xl
            focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30
            transition-all duration-300
            w-64 lg:w-72
            shadow-md hover:shadow-lg
          "
        />
        <button
          onClick={handlesearchtitle}
          className="
            px-8 py-3
            bg-gradient-to-r from-blue-600 to-cyan-600
            hover:from-blue-700 hover:to-cyan-700
            text-white font-bold
            rounded-xl
            transition-all duration-300
            transform hover:scale-105 hover:shadow-xl
            active:scale-95
            shadow-lg
          "
        >
          🔍 جستجو بر اساس نام
        </button>
        <input
          onChange={(e) => setsearchprice(e.target.value)}
          type="number"
          placeholder="قیمت را وارد کنید"
          className="
            px-6 py-3 m-0 text-right
            bg-white dark:bg-gray-800
            border-2 border-purple-200 dark:border-purple-900
            rounded-xl
            focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/30
            transition-all duration-300
            w-64 lg:w-72
            shadow-md hover:shadow-lg
          "
        />
        <button
          onClick={handlesearchprice}
          className="
            px-8 py-3
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            text-white font-bold
            rounded-xl
            transition-all duration-300
            transform hover:scale-105 hover:shadow-xl
            active:scale-95
            shadow-lg
          "
        >
          ✨ جستجو بر اساس قیمت
        </button>
      </div>
    </div>
  );
}
