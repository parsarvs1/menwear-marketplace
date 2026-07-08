"use client";

import Container from "@/components/Container";
import { dataproduct } from "@/components/Productitem";
import { useCartContext } from "@/context/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";
import Cartitem from "@/components/Cartitem";

export default function Cart() {
  interface Tdiscount {
    id: number;
    code: string;
    precentage: number;
  }
  const { cartItems } = useCartContext();
  const [data, setdata] = useState<dataproduct[]>([]);
  const [discountcode, setdiscountcode] = useState("");
  const [discountobject, setdiscountobject] = useState<Tdiscount>();

  useEffect(() => {
    axios(`http://localhost:3001/products/`).then((result) => {
      const { data } = result;
      setdata(data);
    });
  }, []);

  const handlediscount = () =>
    axios(`http://localhost:3001/discounts/?code=${discountcode}`).then(
      (result) => {
        const { data } = result;
        setdiscountobject(data[0]);
      }
    );

  const totalprice = cartItems.reduce((total, item) => {
    const selectedproduct = data.find(
      (itemdata) => itemdata.id == item.id.toString()
    );
    return total + (selectedproduct?.price || 0) * item.qty;
  }, 0);

  const discountprice = totalprice * ((discountobject?.precentage || 0) / 100);
  const finalprice = totalprice - discountprice;

  return (
    <Container>
      {cartItems.map((item) => (
        <Cartitem key={item.id} {...item} />
      ))}

      <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700">
            قیمت کل :
            <span className="text-green-600 font-bold"> {totalprice}</span>
          </h4>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700">
            تخفیف کل :{" "}
            <span className="text-red-600 font-bold"> {discountprice}</span>
          </h4>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold text-blue-700">
            قیمت پس از تخفیف :{" "}
            <span className="text-blue-700 font-extrabold"> {finalprice}</span>
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="کد تخفیف را وارد کنید"
            onChange={(e) => setdiscountcode(e.target.value)}
            className="w-full sm:w-auto flex-grow px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-500"
          />
          <button
            onClick={handlediscount}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            ثبت کد تخفیف
          </button>
        </div>
      </div>
    </Container>
  );
}
