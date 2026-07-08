import Image from "next/image";

export interface dataproduct {
  id: string;
  title: string;
  images: string;
  price: number;
  desc: string;
}

export interface dataproductlist {
  first: number | null;
  prev: number | null;
  next: number | null;
  last: number | null;
  pages: number | null;
  items: number | null;
  data: dataproduct[];
}
export default function Productitem({
  title,
  images,
  price,
  desc,
}: dataproduct) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={images}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-bold text-xl text-gray-800 truncate">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-lg text-blue-600">
            {price.toLocaleString()} تومان
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}
