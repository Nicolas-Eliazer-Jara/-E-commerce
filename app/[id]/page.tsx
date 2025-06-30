// app/products/[id]/page.tsx
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
  const [product, setProduct] = useState<Product>(null);
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

  if (!product) return <p className=" text-center h-screen w-full pt-[250px]">Cargando...</p>;

  return (
    <div className=" text-[#292623] bg-gray-200">
      
      <div className="relative h-[200px] w-full">
        <Image
          className="w-full  h-[200px] object-cover"
          src={publi}
          alt="publi"
          fill
          quality={100}
        ></Image>
      </div>
      <button className="bg-blue-600 hover:cursor-pointer hover:bg-blue-800 p-2 ml-17 mt-5 rounded"><Link  className="text-white" href="/">Volver</Link></button>
      <div className="bg-white w-[90%] mx-auto mt-5 rounded">
        <div className=" flex flex-row">
          <div className="basis-6/8 mt-5 border-b border-b-gray-200 relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
          quality={100}
              className="object-contain mb-4 w-full p-20 h-[500px]"
            />
          </div>

          <div className=" basis-3/8 border p-5 border-gray-300 rounded m-5">
            <h1 className="text-[20px] pb-2  ">{product.title}</h1>
            <p className="text-blue-600  pb-2 text-[14px] ">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <p className=" text-[25px] pb-2  ">${product.price}</p>
            <p className=" text-[14px]  text-green-700">Devolución gratis</p>
            <p className=" text-[12px] pb-2   text-gray-600">
              Tenés 30 días desde que lo recibís.
            </p>
            <div>
              <h1 className="text-[14px]">Color</h1>
              <div className="flex ">
                <p className=" text-[11px] hover:cursor-pointer bg-[#292623] border border-gray-500 rounded px-4 py-4 mr-1">
                  
                </p>
                <p className=" text-[11px] hover:cursor-pointer bg-gray-500 hover:bg-gray-600 border border-gray-500 rounded px-4 py-4 mr-1">
                  
                </p>
                <p className=" text-[11px] hover:cursor-pointer  bg-blue-500 hover:bg-blue-600border border-gray-500 rounded px-4 py-4 mr-1">
                  
                </p>
                <p className=" text-[11px] hover:cursor-pointer  bg-red-500 hover:bg-red-600 border border-gray-500 rounded px-4 py-4 mr-1">
                  
                </p>
                <p className=" text-[11px] hover:cursor-pointer  bg-green-500 hover:bg-green-600 border border-gray-500 rounded px-4 py-4 mr-1">
                  
                </p>
              </div>

              <h1 className="text-[14px] mt-5">Stock disponible</h1>
              <div className="flex">
                <p className="text-[12px] text-gray-600">
                  Almacenado y enviado por
                </p>
                <p className="text-green-700 text-[12px] ml-1">
                  Correo Argentino
                </p>
              </div>
            </div>

            <div className="block"> 
              <button
                className="mt-4 hover:cursor-pointer bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-800"
                onClick={messageCompra}
              >
                Comprar ahora
              </button>
              <button
                className="mt-4 hover:cursor-pointer bg-blue-200 text-blue-600 px-4 py-2 rounded w-full hover:bg-blue-300"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
              {compra && (
          <p className="mt-4 text-center text-green-600 font-semibold animate-fade-in">{compra}</p>
        )}
            </div>
          </div>
        </div>
        <div className=" m-5">
          <p className="text-[16px] mb-2 w-[750px] h-[150px]">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
