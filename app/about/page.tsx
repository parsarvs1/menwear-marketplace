export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-gray-800 dark:text-white py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">درباره ما</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          ما تیمی کوچک اما پرانرژی هستیم که هدفمان خلق یک تجربه خرید آنلاین
          ساده، سریع و لذت‌بخش است.
        </p>
      </section>
      <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="/images/logo.png"
          alt="About our team"
          className="rounded-xl w-full h-auto shadow-md"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            چه کاری انجام می‌دهیم؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ما بستر خرید آنلاینی طراحی کرده‌ایم که کاربران بتوانند محصولات مورد
            نظرشان را به راحتی پیدا، بررسی و خریداری کنند. تمرکز ما بر سادگی،
            سرعت و تجربه کاربری است.
          </p>
        </div>
      </section>
      <section className="text-center bg-white dark:bg-zinc-900 py-12 rounded-xl shadow-sm mb-20">
        <h2 className="text-3xl font-bold mb-8">ماموریت و چشم‌انداز</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12">
          <div>
            <div className="text-5xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2">ماموریت</h3>
            <p className="text-gray-600 dark:text-gray-300">
              ارائه بهترین تجربه کاربری ممکن از خرید آنلاین.
            </p>
          </div>
          <div>
            <div className="text-5xl mb-3">💡</div>
            <h3 className="text-xl font-semibold mb-2">چشم‌انداز</h3>
            <p className="text-gray-600 dark:text-gray-300">
              تبدیل شدن به یکی از برندهای مورد اعتماد کاربران ایرانی در تجارت
              الکترونیک.
            </p>
          </div>
          <div>
            <div className="text-5xl mb-3">❤️</div>
            <h3 className="text-xl font-semibold mb-2">ارزش‌های ما</h3>
            <p className="text-gray-600 dark:text-gray-300">
              صداقت، کیفیت، احترام و تعهد به مشتری.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">بیایید در ارتباط باشیم!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          اگر سوالی دارید یا مایل به همکاری هستید، خوشحال می‌شویم از شما بشنویم.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-3 px-8 rounded-lg"
        >
          تماس با ما
        </a>
      </section>
    </main>
  );
}
