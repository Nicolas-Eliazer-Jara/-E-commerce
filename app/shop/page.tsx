"use client";
import Image from "next/image";
import fondo from "@/public/fondo.jpg";
import { useEffect, useReducer, useState } from "react";
import Product from "@/app/types/card";
import { cardReducer } from "../reducers/cardReducers";
import borrar from '@/public/thrash.png'

export default function Shop() {
  const [product, setProduct] = useState<Product[]>([]);


  const [state, dispatch] = useReducer(cardReducer, []);
  const total = state.reduce((acc , items )=>acc + items.price ,0);


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
              className="bg-[white] text-black  flex flex-col justify-between p-5 m-3  h-[355px] w-[270px] "
              key={id}
            >
              <Image
                className="w-full h-[150px] object-contain"
                alt={title}
                src={image}
                width={100}
                height={100}
              />

              <h1 className="pb-3   text-[15px]">{title.slice(0,50)}{title.length > 51 && '...'}</h1>
              <p>$ {price}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "add",
                    payload: { id, title, image, price },
                  })
                }
                className="rounded-2xl p-2 bg-gray-900  text-white w-full"
              >
                agregar al carrito
              </button>
              </div>
          ))}
        </div>
        
        <div className=" w-full p-2 mt-5 ">
        <h1 className="text-black text-center bg-gray-300 p-2">MI COMPRA</h1>
        {state.map(({ id, title, image, price}) => (
          <div className=" mt-2 flex p-2 items-center bg-white justify-around" key={id}>
            <Image
            className="object-contain h-[50px]"
            alt={title}
            src={image}
            width={50}
            height={50}></Image>
            <h1 className="text-black px-4">{title.slice(0,50)}</h1>
            <p className="text-black">{price}</p>
            <Image
            src={borrar}
            alt='borrar'
            width={37}
              onClick={() => dispatch({ type: "delete", payload: id })}
              className="p-2 object-contain"
            >
            </Image>
          </div>
        ))}
        <div className="flex justify-between p-2 ">
        <p className="text-black p-2 ">Total</p>
        <p className="text-black">{total.toFixed(2)}</p>
        </div>
        <button className="p-2 rounded-2xl bg-green-700 text-white mt-3 w-full">comprar</button>
        </div>
      </div>
    </div>
  );
}
