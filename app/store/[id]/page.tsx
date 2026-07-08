import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { dataproduct } from "@/components/Productitem";
import Image from "next/image";

interface producprops {
  params: Promise<{ id: string }>;
  searchparams: Promise<object>;
}

export default async function product({ params }: producprops) {
  const { id } = await params;
  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const result = await fetch(`${baseUrl}/api/products/${id}`, {
  cache: "no-store",
});
  const data = (await result.json()) as dataproduct;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-10">
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            {data.desc}
          </p>
          <p className="text-3xl font-bold text-blue-600">
            {data.price.toLocaleString()}{" "}
            <span className="text-xl text-gray-400">تومان</span>
          </p>
          <AddToCart id={id} />
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
    </Container>
  );
}
