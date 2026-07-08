"use client";

import Container from "@/components/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";

export default function Addproduct() {
  const [newproduct, setnewproduct] = useState({
    title: "",
    price: "",
    desc: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handlenewproduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setnewproduct({
      ...newproduct,
      [name]: value,
    });
  };

  // تابع ریست کردن فرم
  const resetForm = () => {
    setnewproduct({
      title: "",
      price: "",
      desc: "",
      category: "",
      image: "",
    });
  };

  const handlecreateproduct = async () => {
    if (!newproduct.title || !newproduct.price || !newproduct.category) {
      alert("لطفاً تمام فیلدهای ضروری را پر کنید");
      return;
    }

    setLoading(true);

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/products",
        data: {
          id: Date.now().toString(),
          title: newproduct.title,
          price: Number(newproduct.price),
          image: newproduct.image || "https://via.placeholder.com/150",
          desc: newproduct.desc,
          category: newproduct.category,
        },
      });

      console.log("محصول با موفقیت اضافه شد:", response.data);
      alert("محصول اضافه شد!");

      // ریست کردن فرم بعد از موفقیت
      resetForm();
    } catch (error) {
      console.error("خطا در ارسال محصول:", error);
      alert("خطا در اضافه کردن محصول. لطفاً سرور را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          onChange={handlenewproduct}
          name="title"
          value={newproduct.title}
          type="text"
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="نام محصول *"
        />
        <input
          onChange={handlenewproduct}
          name="category"
          value={newproduct.category}
          type="text"
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="دسته بندی محصول *"
        />
        <input
          onChange={handlenewproduct}
          name="price"
          value={newproduct.price}
          type="number"
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="قیمت محصول *"
        />
        <input
          onChange={handlenewproduct}
          name="image"
          value={newproduct.image}
          type="text"
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="آدرس عکس محصول"
        />
      </div>

      <textarea
        onChange={handlenewproduct}
        name="desc"
        value={newproduct.desc}
        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="درباره ی محصول"
        rows={4}
      />

      <button
        onClick={handlecreateproduct}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 mt-4"
      >
        {loading ? "در حال اضافه کردن..." : "اضافه شد"}
      </button>
    </Container>
  );
}
