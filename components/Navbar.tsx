"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import "./navbar.css";
import { useCartContext } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { gettotalproductqty } = useCartContext();
  const navlink = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Store",
      href: "/store",
    },
    { title: "about", href: "/about" },
    { title: "dashboard", href: "/dashboard" },
  ];

  return (
    <Container>
      <nav className=" navbar flex flex-row justify-between">
        <div className="navbar-inner">
          {navlink.map((item) => (
            <Link
              className={`nav-link ${pathname == item.href ? "active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/cart">cart:{gettotalproductqty}</Link>
        </div>
      </nav>
    </Container>
  );
}
