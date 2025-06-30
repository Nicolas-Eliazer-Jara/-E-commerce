"use client";
import Image from "next/image";
import { useCart } from "../store/useCart";
import { useState } from "react";

export default function CartPage() {
  const [compra, setCompra] = useState<string | null>(null);
  const { items, removeFromCart, total, increaseQty, decreaseQty, count, clearCart } = useCart();



  const messageCompra = () => {
    setCompra("Compra exitosa");
    setTimeout(() => {
      setCompra(null);
    }, 3000);
  };

  return (
    <div className="bg-white text-[#292623] pt-20 flex flex-row">
      <div className="h-auto min-h-[500px] rounded mx-auto p-10 basis-6/10">
        {items.map(({ id, title, image, price, quantity }) => (
          <div
            className="relative border rounded m-2 flex items-center bg-[#292623] text-tercero"
            key={id}
          >
            {/* Botón X en esquina superior derecha */}
            <button
              onClick={() => removeFromCart(id)}
              className="absolute top-2 right-2 text-sm border rounded-full h-6 w-6 flex items-center justify-center bg-white text-[#292623]  hover:bg-[#292623] hover:text-white cursor-pointer"
            >
              ×
            </button>

            <div>
              <Image
                className="bg-white h-60 w-60 p-3 object-contain border border-r-[#292623] rounded-l rounded-x"
                src={image}
                alt={title}
                width={900}
                height={900}
              />
            </div>

            <div className="p-10">
              <p className="pb-2">{title}</p>
              <p className="pb-2">Price : $ {price}</p>
              <div className="flex items-center pb-2">
                <button
                  onClick={() => decreaseQty(id)}
                  className="px-2 border-l border-y border-white rounded-l hover:bg-white hover:text-[#292623] cursor-pointer"
                >
                  -
                </button>
                <span className="px-2 border-y border-white">
                  {quantity}
                </span>
                <button
                  onClick={() => increaseQty(id)}
                  className="px-2 border-r border-y border-white rounded-r hover:bg-white hover:text-[#292623] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="basis-4/10 h-[550px] mx-auto p-10">
        <h1 className="p-2 text-center border-b border-gray-500">
          Resumen del pedido
        </h1>
        <div className="mt-10">
          <div className="flex justify-between pb-4">
            <p>Cantidad de productos</p> <p>{count()}</p>
          </div>
          <div className="flex justify-between pb-4">
            <p>Envío</p>
            <p>Gratis</p>
          </div>
          <p className="pb-4">Total: ${total().toFixed(2)}</p>
        </div>
        <button 
  onClick={clearCart}
  className="my-2 bg-[#292623] hover:bg-red-700 hover:cursor-pointer text-white p-2 w-full rounded"
>
  Reset carrito
</button>
        <button
          onClick={messageCompra}
          className="bg-green-700 hover:bg-green-800 hover:cursor-pointer text-white p-2 w-full rounded"
        >
          Comprar
        </button>

        {compra && (
          <p className="mt-4 text-center text-green-600 font-semibold animate-fade-in">
            {compra}
          </p>
        )}
      </div>
    </div>
  );
}
