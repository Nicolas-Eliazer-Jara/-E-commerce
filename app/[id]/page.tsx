"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/store/useCart";
import { Products } from "@/app/product/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
  const { id } = useParams(); // id 
  const { addToCart } = useCart();
  const [compra, setCompra] = useState<string | null>(null);

  const buttonClick = () => {
    const audio = new Audio('/sound/button.wav');
    audio.play();
  }
  const buttonClickBuy = () => {
    const audio = new Audio('/sound/button-buy.wav');
    audio.play();
  }


  // producto de array local
  const product = Products.find((p) => String(p.id) === String(id));


  const messageCompra = () => {

    const data = {
      id: product?.id,
      price: product?.price,
      title :product?.title,
      date: new Date().toISOString(),
      userId:1,
    }

    console.log("📦 Enviando orden al backend...");
    console.log(JSON.stringify(data, null, 2));


    setCompra("Compra exitosa");
    setTimeout(() => {
      setCompra(null);
    }, 3000);
  };

  if (!product) {
    return (
      <p className="text-center h-full w-full pt-[250px]">
        Producto no encontrado
      </p>
    );
  }

  return (
    <div className="text-[#292623] bg-gray-200 min-h-screen  selection:bg-[#263c88] selection:text-white min-w-[400px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-15">
        <Link
          href="/"
          className="flex lg:mx-0 mx-auto w-[80px]  bg-[#000000] hover:bg-gray-900  text-white py-2 px-4 rounded mb-5 "
        >
          Volver
        </Link>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-8 flex flex-col lg:flex-row lg:h-[800px] h-[1250px]  min-w-[400px]">
          {/* Imagen del producto */}
          <div className="w-full flex justify-center items-center  ">
            <div className="relative w-full h-full max-w-[500px] max-h-[700px] group">
              {/* Imagen normal */}
              <Image
                src={product.image}
                alt={product.title}
                height={900}
                width={900}
                className="transition-opacity duration-300 w-full h-full object-cover group-hover:opacity-0 cursor-crosshair"
              />
              {/* Imagen hover */}
              <Image
                src={product.imageHover}
                alt={`${product.title} hover`}
                height={900}
                width={900}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-crosshair"
              />
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="w-full lg:w-1/2 p-4">
          <h4 className="text-tercero text-[12px] mb-4">{product.category}</h4>
            <h1 className="text-[21px] font-semibold mb-4">{product.title}</h1>
            <p className="text-[14px]  mb-4">${product.price}</p>
            <div className="border-b border-b-gray-300"></div>

            <p className="text-[12px] text-gray-800 my-4">{product.description}</p>

            <div className="border-b border-b-gray-300"></div>

            <p className="text-green-700 text-sm mt-4">Devolución gratis</p>
            <p className="text-gray-600 text-xs mb-4">
              Tenés 30 días desde que lo recibís.
            </p>

            

            <div className="mb-6">
              <h2 className="text-sm font-medium">Stock disponible</h2>
              <p className="text-xs text-gray-600">
                Almacenado y enviado por{" "}

                <span className="text-violet-700">Fed</span>
                <span className="text-orange-500">Ex</span>

              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                className="bg-[#263c88] hover:bg-blue-950 text-white py-2 px-4 rounded w-full cursor-pointer"
                onClick={()=> {messageCompra() ; buttonClickBuy();}}
              >
                Comprar Ahora
              </button>
              <button
                className="bg-[#000000] hover:bg-gray-900 text-white py-2 px-4 rounded w-full cursor-pointer"
                onClick={() => {addToCart(product); buttonClick(); }}
              >
                Agregar a Card
              </button>
              {compra && (
                <p className="mt-2 text-center text-green-600 font-semibold animate-fade-in">
                  {compra}
                </p>
              )}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
