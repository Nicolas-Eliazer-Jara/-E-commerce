"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "./store/useCart";
import fondo from "@/public/Fondo/BANNER_webstore.webp";
import { Products } from "./product/product";
import { useTranslation } from "react-i18next";

export default function ProductsPage() {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const [category, setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredProducts = Products.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  }).sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const buttonClick = () => {
    const audio = new Audio("/sound/button.wav");
    audio.play();
  };

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
            {t("category")}
          </h1>
          <div className="text-[14px] pt-3 text-gray-700 space-y-1">
            <p
              onClick={() => setCategory("all")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("all")}
            </p>
            <p
              onClick={() => setCategory("ABRIGO")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("coat")}
            </p>
            <p
              onClick={() => setCategory("SUETER")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("swetear")}
            </p>
            <p
              onClick={() => setCategory("CAMISA")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("shirt")}
            </p>
            <p
              onClick={() => setCategory("PANTALON")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("pants")}
            </p>
            <p
              onClick={() => setCategory("ZAPATOS")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("shoes")}
            </p>
            <p
              onClick={() => setCategory("BOINA")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("beret")}
            </p>
          </div>

          <h1 className="text-[17px] mt-10 bg-segundo text-white rounded px-2 py-2">
            {t("price")}
          </h1>
          <div className="text-[14px] pt-3 text-gray-700 space-y-1">
            <p
              onClick={() => setSortOrder("desc")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("highestPrice")}
            </p>
            <p
              onClick={() => setSortOrder("asc")}
              className="cursor-pointer pt-2 hover:text-red-700"
            >
              {t("lowestPrice")}
            </p>
          </div>
        </aside>

        {/* Productos */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(
              ({ id, titleKey, image, imageHover, price, descriptionKey }) => (
                <div
                  key={id}
                  className="bg-white border border-gray-500 rounded shadow hover:shadow-lg transition p-3 flex flex-col justify-between"
                >
                  <Link href={`/${id}`}>
                    <div className="border-b border-gray-500 pb-1 mb-1 w-full h-[400px] group relative overflow-hidden">
                      {/* Imagen principal */}
                      <Image
                        src={image}
                        alt={t(titleKey)}
                        height={900}
                        width={900}
                        className="transition-opacity duration-300 w-full h-full object-cover group-hover:opacity-0"
                      />
                      {/* Imagen hover */}
                      <Image
                        src={imageHover}
                        alt={`${t(titleKey)} hover`}
                        height={900}
                        width={900}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>

                    <div className="px-4">
                      <p className="text-[13px] pt-1 line-clamp-2">
                        {t(titleKey)}
                      </p>
                      <p className="text-[14px] pt-1 ">€{price}</p>
                    </div>
                  </Link>

                  <button
                    onClick={() => {
                      addToCart({
                        id,
                        titleKey,
                        image,
                        imageHover,
                        price,
                        descriptionKey,
                        category
                      });
                      buttonClick();
                    }}
                    className="mt-4 bg-primero text-cuarto py-1 px-3 text-sm rounded w-[90%] mx-auto cursor-pointer"
                  >
                    {t("addToCart")}
                  </button>
                </div>    
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
