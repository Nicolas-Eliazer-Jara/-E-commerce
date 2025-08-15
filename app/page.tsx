"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "./store/useCart";
import fondo from "@/public/Fondo/BANNER_webstore.webp";
import { Products } from "./product/product";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredProducts = Products.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  }).sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="bg-white text-segundo pb-10">
      {/* Banner superior */}
      <div className="relative w-full h-screen">
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
          <h1 className="text-[17px] bg-segundo text-white rounded px-2 py-2">
            CATEGORÍAS
          </h1>
          <div className="text-[14px] pt-3 text-gray-700 space-y-1">
            <p
              onClick={() => setCategory("all")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Todas
            </p>
            <p
              onClick={() => setCategory("ABRIGO")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Abrigo
            </p>
            <p
              onClick={() => setCategory("SUETER")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Suéter
            </p>
            <p
              onClick={() => setCategory("CAMISA")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Camisa
            </p>
          
            <p
              onClick={() => setCategory("PANTALON")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Pantalon
            </p>

            <p
              onClick={() => setCategory("ZAPATOS")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Zapatos
            </p>

            <p
              onClick={() => setCategory("BOINA")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Boina
            </p>
          </div>

          <h1 className="text-[17px] mt-10 bg-segundo text-white rounded px-2 py-2">
            PRECIO
          </h1>
          <div className="text-[14px] pt-3 text-gray-700 space-y-1">
            <p
              onClick={() => setSortOrder("desc")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Mayor precio
            </p>
            <p
              onClick={() => setSortOrder("asc")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              Menor precio
            </p>
          </div>
        </aside>

        {/* Productos */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(({ id, title, image, imageHover, price,description }) => (
              <div
                key={id}
                className="bg-white border border-gray-500 rounded shadow hover:shadow-lg transition p-3 flex flex-col justify-between"
              >
                <Link href={`/${id}`}>
                  <div className="border-b border-gray-500 pb-1 mb-1 w-full h-[400px] group relative overflow-hidden">
                    {/* Imagen principal */}
                    <Image
                      src={image}
                      alt={title}
                      height={900}
                      width={900}
                      className="transition-opacity duration-300 w-full h-full object-cover group-hover:opacity-0"
                    />
                    {/* Imagen hover */}
                    <Image
                      src={imageHover}
                      alt={`${title} hover`}
                      height={900}
                      width={900}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity  duration-300 group-hover:opacity-100"
                    />
                  </div>

                  <div className="px-4">
                    <p className="text-[13px] pt-1 line-clamp-2">{title}</p>
                    <p className="text-[14px] pt-1 ">€{price}</p>
                  </div>
                </Link>

                <button
                  onClick={() => addToCart({ id, title, image, imageHover, price,description })}
                  className="mt-4 bg-primero text-cuarto hover:bg-[#813c88] py-1 px-3 text-sm rounded w-[90%] mx-auto"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
