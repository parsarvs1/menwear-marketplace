"use client";

import Image from "next/image";
import Link from "next/link";

function HomeContent() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            رویاهای شما، واقعیت ما ✨
          </h2>

          <p className="text-lg leading-9 text-gray-600 mb-8">
            ما تیمی پرانرژی هستیم که با استفاده از جدیدترین تکنولوژی‌ها
            بهترین خدمات را برای شما فراهم می‌کنیم.
          </p>

          <Link href="/about">
  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl duration-300">
    بیشتر بدانید
  </button>
</Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={450}
            height={450}
            className="drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3"
          />
        </div>

      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HomeContent />
    </main>
  );
}