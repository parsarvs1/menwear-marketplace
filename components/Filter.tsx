"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filter = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/store?${params.toString()}`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-xl mb-6">
      <select
        className="px-3 py-2 border rounded"
        onChange={(e) => filter(e.target.value)}
      >
        <option value="">همه محصولات</option>
        <option value="mardane">مردانه</option>
        <option value="zanane">زنانه</option>
        <option value="bachegan">بچگانه</option>
      </select>
    </div>
  );
}
