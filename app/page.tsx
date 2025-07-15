"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "./store/useCart";
import fondo from "@/public/Fondo/fondo2.png";
import publi from "@/public/Fondo/publi.jpg";
import publi1 from "@/public/Fondo/publi1.jpg";
import Product from "./types/card";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  const [category, setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = products
    .filter((product) => {
      if (category === "all") return true;
      return product.category === category;
    })
    .sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

  return (
    <div className="bg-white text-segundo pb-10">
      {/* Banner superior */}
      <div className="relative w-full h-[200px]">
        <Image
          className="object-cover"
          src={fondo}
          alt="fondo"
          fill
          quality={100}
        />
      </div>

      {/* Layout principal */}
      <div className="flex flex-col lg:flex-row mt-10 px-4 gap-10">
        {/* Filtros */}
        <aside className="w-full lg:w-1/4">
          <h1 className="text-[17px] bg-segundo text-white rounded px-2 py-2">Categorías</h1>
          <div className="text-[14px] pt-3 text-gray-700 space-y-1">
            <p onClick={() => setCategory("all")} className="cursor-pointer hover:text-[#85d6c9]">Todas</p>
            <p onClick={() => setCategory("men's clothing")} className="cursor-pointer hover:text-[#85d6c9]">Hombre</p>
            <p onClick={() => setCategory("women's clothing")} className="cursor-pointer hover:text-[#85d6c9]">Mujer</p>
            <p onClick={() => setCategory("electronics")} className="cursor-pointer hover:text-[#85d6c9]">Tecnología</p>
            <p onClick={() => setCategory("jewelery")} className="cursor-pointer hover:text-[#85d6c9]">Joyería</p>
          </div>

          <h1 className="text-[17px] mt-6 bg-segundo text-white rounded px-2 py-2">Precio</h1>
          <div className="text-[14px] pt-3 text-gray-700 space-y-1">
            <p onClick={() => setSortOrder("desc")} className="cursor-pointer hover:text-[#85d6c9]">Mayor precio</p>
            <p onClick={() => setSortOrder("asc")} className="cursor-pointer hover:text-[#85d6c9]">Menor precio</p>
          </div>

        </aside>

        {/* Productos */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(({ id, title, image, price, rating }) => (
              <div
                key={id}
                className="bg-white border rounded shadow hover:shadow-lg transition p-3 flex flex-col justify-between"
              >
                <Link href={`/${id}`}>
                  <div className="border-b pb-3 mb-3">
                    <Image
                      className="mx-auto w-full h-[220px] object-contain"
                      src={image}
                      alt={title}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="px-2">
                    <p className="text-[13px] line-clamp-2">{title}</p>
                    <p className="text-[18px] pt-3 font-bold">${price}</p>
                    <p className="text-[12px] text-gray-600 py-1">
                      ⭐ {rating.rate} ({rating.count} reviews)
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => addToCart({ id, title, image, price })}
                  className="mt-4 bg-green-200 text-green-800 hover:bg-green-300 py-1 px-3 text-sm rounded w-[90%] mx-auto"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-6 flex ">
            <div className="w-full h-[200px] relative mr-2">
              <Image className="rounded object-cover" alt="publi" src={publi} fill quality={100} />
            </div>
            <div className="w-full h-[200px] relative ml-2">
              <Image className="rounded object-cover" alt="publi1" src={publi1} fill quality={100} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
