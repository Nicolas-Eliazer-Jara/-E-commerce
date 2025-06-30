
    "use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "./store/useCart";
import fondo from "@/public/Fondo/fondo2.png"
import publi from "@/public/Fondo/publi.jpg"
import publi1 from "@/public/Fondo/publi1.jpg"
import Product from "./types/card";


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const [category , setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredProducts = products
  .filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  })
  .sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    else return b.price - a.price;
  });


  return (
    <div className="z text-[#292623] pb-10 ">
    <div  className="relative w-full h-[200px] object-cover">
        <Image className="w-full h-[200px] object-cover" src={fondo} alt="publi" fill quality={100}></Image>
      </div>
    <div className="flex flex-row mt-10">

      <div className="basis-2/8 pt-1 pl-10">
      <h1 className="text-[17px] mt-2 bg-[#292623] text-white rounded px-1 py-2">Products category</h1>
      <div className="text-[13px] pt-3 text-gray-700">
      <p onClick={() => setCategory("all")} className="hover:cursor-pointer pt-1 hover:text-blue-600">All</p>
<p onClick={() => setCategory("men's clothing")} className="hover:cursor-pointer pt-1 hover:text-blue-600">Men</p>
<p onClick={() => setCategory("women's clothing")} className="hover:cursor-pointer pt-1 hover:text-blue-600">Woman</p>
<p onClick={() => setCategory("electronics")} className="hover:cursor-pointer pt-1 hover:text-blue-600">Tecnology</p>
<p onClick={() => setCategory("jewelery")} className="hover:cursor-pointer pt-1 hover:text-blue-600">Joyeria</p>

      </div>

      <div>
        <h1 className="text-[17px] mt-6 bg-[#292623] text-white rounded px-1 py-2">price</h1>
        <div className="text-[13px] pt-3 text-gray-700">
        <p onClick={() => setSortOrder("desc")} className="hover:cursor-pointer  pt-1 hover:text-blue-600">higher</p>
<p onClick={() => setSortOrder("asc")} className="hover:cursor-pointer  pt-1 hover:text-blue-600">lower</p>

        </div>
      </div >
      <div className=" mt-20 w-full h-[400px] relative">
      <Image className="rounded object-cover" alt="" src={publi} fill quality={100} ></Image>
      </div>
      <div className=" mt-20 w-full h-[400px] relative">
      <Image className="rounded object-cover" alt="" src={publi1} fill quality={100} ></Image>
      </div>
      </div>

      <div className="basis-7/8 ">
        <div className=" grid grid-cols-3 mx-6">
          {filteredProducts.map(({ id, title, image, price , rating }) => (
            
            <div key={id} className=" bg-white  w-[290px] h-[490px] rounded my-3  flex flex-col justify-between">
              <Link key={id} href={`/${id}`}>
              <div className="border-b border-gray-300">
              <Image className="mx-auto w-[240px] h-[240px] my-3 object-contain  " src={image} alt={title} width={900} height={900} />
              </div>
              <div className=" px-4 ">
              <p className=" pt-5 text-[12px] " >{title}</p>
                <p className="text-[20px] pt-5">${price}</p>
                <p className="text-[12px]  py-1">ranking: {rating.rate} ({rating.count} reviews)</p>
              </div>
              </Link>
              <button
                  className="my-5  relative  bg-green-200 text-green-800   p-1 rounded text-[14px] hover:bg-green-300 hover:cursor-pointer w-[90%] mx-auto "
                  onClick={() => addToCart({ id, title, image, price })}
                >
                  Add to Cart
                </button>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
