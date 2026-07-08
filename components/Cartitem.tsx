"use client";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import { useEffect, useState } from "react";
import { dataproduct } from "./Productitem";
import axios from "axios";

interface cartitemprops {
  id: number;
}

export default function Cartitem({ id }: cartitemprops) {
  const [data, setdata] = useState<dataproduct | null>(null);

  useEffect(() => {
    axios(`http://localhost:3001/products/${id}`).then((result) => {
      setdata(result.data);
    });
  }, [id]);

  if (!data) return <p>در حال بارگذاری...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-10">
      <div className="md:col-span-3 space-y-6 p-4 bg-gray-200 ml-5 p-2 bg-blue-500 text-black rounded-md">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          {data.desc}
        </p>
        <p className="text-3xl font-bold text-blue-600">
          {data.price.toLocaleString()}{" "}
          <span className="text-xl text-black">تومان</span>
        </p>
        <AddToCart id={id.toString()} />
      </div>
      <div className="md:col-span-1">
        {data.images ? (
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={data.images}
              alt={data.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="w-full aspect-[3/4] flex items-center justify-center bg-gray-100 rounded-3xl text-gray-400">
            تصویری موجود نیست
          </div>
        )}
      </div>
    </div>
  );
}
