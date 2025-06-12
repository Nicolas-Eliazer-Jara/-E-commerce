"use client";
import Image from "next/image";
import fondo from "@/public/fondo2.jpg";
import { useEffect, useReducer, useState } from "react";
import Product from "@/app/types/card";
import { cardReducer } from "../reducers/cardReducers";

export default function Shop() {
  const [product, setProduct] = useState<Product[]>([]);

  const [state, dispatch] = useReducer(cardReducer, []);

  useEffect(() => {
    async function fetchProduc() {
      const rest = await fetch("https://fakestoreapi.com/products");
      const data = await rest.json();
      setProduct(data);
    }
    fetchProduc();
  }, []);

  return (
    <div className="bg-[#E6E8E6]">
      <Image
        className="w-full h-[200px] object-cover"
        alt="fondo"
        src={fondo}
        placeholder="blur"
      />
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-3 col-span-2 ">
          {product.map(({ id, title, image, price }) => (
            <div
              className="bg-[white] text-black hover:bg-black hover:text-white border  p-5 m-5  h-[355px] w-[200px] "
              key={id}
            >
              <Image
                className="w-full h-[150px] object-contain"
                alt={title}
                src={image}
                width={100}
                height={100}
              />
              <h1 className="pt-3 pb-3 text-[12px]">{title}</h1>
              <p>$ {price}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "add",
                    payload: { id, title, image, price },
                  })
                }
                className="text-gray-700  p-2 bg-gray-900 w-full"
              >
                agregar al carrito
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-700 w-full p-2 mt-5 ">
        <h1>productos deleccionados</h1>
        {state.map(({ id, title, image}) => (
          <div className="bg-gray-800 mt-2 flex p-2 items-center" key={id}>
            <Image
            className="object-cover"
            alt={title}
            src={image}
            width={40}
            height={20}></Image>
            <h1 className="text-white  px-2">{title}</h1>
            <button
              onClick={() => dispatch({ type: "delete", payload: id })}
              className="bg-red-600  text-white  rounded-2xl p-2 "
            >
              eliminar
            </button>
          </div>
        ))}
        <p>precio</p>
        <button className="p-2 bg-green-700 text-white mt-3 w-full">comprar</button>
        </div>
      </div>
    </div>
  );
}
