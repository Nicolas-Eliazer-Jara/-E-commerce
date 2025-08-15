"use client";
import Image from "next/image";
import { useCart } from "../store/useCart";
import { useState } from "react";

export default function CartPage() {
  const [compra, setCompra] = useState<string | null>(null);
  const { items, removeFromCart, total, increaseQty, decreaseQty, count, clearCart } = useCart();

  const messageCompra = () => {
    setCompra("Compra exitosa");
    setTimeout(() => setCompra(null), 3000);
  };

  return (
    <div className="bg-white text-segundo pt-20 px-4">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Carrito */}
        <div className="flex-1 min-h-[500px] mx-auto">
          {items.map(({ id, title, image, price, quantity }) => (
            <div
              key={id}
              className="relative border rounded mb-4 flex flex-col md:flex-row items-center bg-segundo text-white"
            >
              <button
                onClick={() => removeFromCart(id)}
                className="absolute top-2 right-2 text-sm border rounded-full h-6 w-6 flex items-center justify-center bg-white text-segundo hover:bg-gray-300 hover:text-white"
              >
                ×
              </button>

              <div className="w-full md:w-[240px] flex justify-center border-r border-[#1A1A1A] bg-white p-3">
                <Image
                  className="object-contain w-[200px] h-[200px]"
                  src={image}
                  alt={title}
                  width={900}
                  height={900}
                />
              </div>

              <div className="p-6 w-full md:w-auto">
                <p className="pb-2">{title}</p>
                <p className="pb-2">Price: $ {price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQty(id)}
                    className="px-3 font-black border border-white rounded-l hover:bg-gray-200 hover:text-[#1A1A1A]"
                  >
                    -
                  </button>
                  <span className="px-3 border-t border-b border-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(id)}
                    className="px-3 font-black border border-white rounded-r hover:bg-gray-200 hover:text-[#1A1A1A]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        <div className="w-full lg:w-[400px] mx-auto h-fit border border-gray-300 rounded p-6 shadow-md">
          <h1 className="text-center text-lg font-black border-b border-gray-500 pb-4 mb-4">
            Resumen del pedido
          </h1>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Cantidad de productos</span>
              <span>{count()}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span className="text-green-700">Gratis</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Total:</span>
              <span>${total().toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={clearCart}
            className="mt-6 w-full bg-[#000000] hover:bg-[#1A1A1A] text-white py-2 rounded"
          >
            Reset carrito
          </button>

          <button
            onClick={messageCompra}
            className="mt-2 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded"
          >
            Comprar
          </button>

          {compra && (
            <p className="mt-4 text-center bg-green-200 text-green-800 p-2 rounded font-semibold animate-fade-in">
              {compra}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
