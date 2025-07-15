"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/store/useCart";
import Image from "next/image";
import { Product } from "@/app/store/useCart";
import publi from "@/public/Fondo/fondo.png";
import Link from "next/link";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [compra, setCompra] = useState<string | null>(null);

  const messageCompra = () => {
    setCompra("Compra exitosa");
    setTimeout(() => {
      setCompra(null);
    }, 3000);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center h-full w-full pt-[250px]">Cargando...</p>;

  return (
    <div className="text-[#292623] bg-gray-200 min-h-screen">
      <div className="relative h-[200px] w-full">
        <Image
          className="w-full h-[200px] object-cover"
          src={publi}
          alt="publi"
          fill
          quality={100}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded mb-5"
        >
          Volver
        </Link>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-8 flex flex-col lg:flex-row">
          {/* Imagen del producto */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-contain w-full max-h-[500px]"
            />
          </div>

          {/* Detalles del producto */}
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
            <p className="text-blue-600 mb-2 text-sm">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <p className="text-3xl font-bold mb-2">${product.price}</p>
            <p className="text-green-700 text-sm mb-2">Devolución gratis</p>
            <p className="text-gray-600 text-xs mb-4">
              Tenés 30 días desde que lo recibís.
            </p>

            <div className="mb-4">
              <h2 className="text-sm font-medium mb-2">Colores</h2>
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded bg-[#292623] border" />
                <span className="w-6 h-6 rounded bg-gray-500 border" />
                <span className="w-6 h-6 rounded bg-blue-500 border" />
                <span className="w-6 h-6 rounded bg-red-500 border" />
                <span className="w-6 h-6 rounded bg-green-500 border" />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-medium">Stock disponible</h2>
              <p className="text-xs text-gray-600">
                Almacenado y enviado por <span className="text-green-700">Correo Argentino</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded w-full"
                onClick={messageCompra}
              >
                Comprar ahora
              </button>
              <button
                className="bg-blue-200 hover:bg-blue-300 text-blue-700 py-2 px-4 rounded w-full"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
              {compra && (
                <p className="mt-2 text-center text-green-600 font-semibold animate-fade-in">
                  {compra}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="bg-white rounded-lg mt-6 p-4 md:p-6">
          <h2 className="text-lg font-medium mb-2">Descripción</h2>
          <p className="text-sm text-gray-800">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
