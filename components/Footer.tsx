import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Shop Parsa</h2>
          <p>
            فروشگاه اینترنتی پارسا، ارائه‌دهنده بهترین محصولات دیجیتال با ضمانت
            کیفیت و ارسال سریع.
          </p>
        </div>

        <div className="footer-section">
          <h3>دسترسی سریع</h3>
          <ul>
            <li>
              <a href="/">صفحه اصلی</a>
            </li>
            <li>
              <a href="/store">فروشگاه</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>ارتباط با ما</h3>
          <ul>
            <li>📍 تهران، ایران</li>
            <li>📞 021-00000000</li>
            <li>✉ info@shopparsa.ir</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Shop Parsa. All rights reserved.
      </div>
    </footer>
  );
}
