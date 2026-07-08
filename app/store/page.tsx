import Container from "@/components/Container";
import Productitem, { dataproduct } from "@/components/Productitem";
import Link from "next/link";
import Search from "@/components/Search";
import Filter from "@/components/Filter";

interface iprops {
  params: Promise<object>;
  searchParams: Promise<{
    page: string;
    perpage: string;
    title: string;
    price: string;
    category: string;
  }>;
}

export default async function store({ searchParams }: iprops) {
  const page = (await searchParams).page ?? "1";
  const perpage = (await searchParams).perpage ?? "4";
  const title = (await searchParams).title ?? "";
  const price = (await searchParams).price ?? "";
  const category = (await searchParams).category ?? "";

  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

let url = `${baseUrl}/api/products`;
  const params = new URLSearchParams();

  if (title) params.append("title", title);
  if (price) params.append("price", price);
  if (category) params.append("category", category);

  params.append("_page", page);
  params.append("_per_page", perpage);

  const queryString = params.toString();
  if (queryString) {
    url = `${url}?${queryString}`;
  }

  const result = await fetch(url, {
    cache: "no-store",
  });
  const response = await result.json();

  const data = response.data || response;
  const totalItems = response.items || (Array.isArray(data) ? data.length : 0);
  const totalPages = Math.ceil(totalItems / parseInt(perpage));
  const currentPage = parseInt(page);

  const getPageUrl = (newPage: number) => {
    const searchParams = new URLSearchParams();
    if (title) searchParams.append("title", title);
    if (price) searchParams.append("price", price);
    if (category) searchParams.append("category", category);
    searchParams.append("page", newPage.toString());
    searchParams.append("perpage", perpage);
    return `/store?${searchParams.toString()}`;
  };

  const productsArray = Array.isArray(data) ? data : data.data || [];

  return (
    <Container>
      <Search />
      <Filter />
      <div className="grid grid-cols-4 gap-5">
        {productsArray.map((item: dataproduct) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <Productitem {...item} />
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 mb-5">
          <Link
            href={getPageUrl(currentPage - 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 pointer-events-none"
                : "hover:bg-gray-100"
            }`}
          >
            &lt;
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Link
              key={num}
              href={getPageUrl(num)}
              className={`px-3 py-1 border rounded ${
                currentPage === num
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {num}
            </Link>
          ))}

          <Link
            href={getPageUrl(currentPage + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 pointer-events-none"
                : "hover:bg-gray-100"
            }`}
          >
            &gt;
          </Link>
        </div>
      )}
    </Container>
  );
}
