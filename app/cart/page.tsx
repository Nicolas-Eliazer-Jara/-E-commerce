"use client";
import Image from "next/image";
import { useCart } from "../store/useCart";
import { useState } from "react";

export default function CartPage() {

  const buttonClick = () => {
    const button = new Audio("/sound/button.wav");
    button.play();
  }

  const buttonClickBuy = () => {
    const button = new Audio("/sound/button-buy.wav");
    button.play();
  }

  const [compra, setCompra] = useState<string | null>(null);
  const {
    items,
    removeFromCart,
    total,
    increaseQty,
    decreaseQty,
    count,
    clearCart,
  } = useCart();

  

  const messageCompra = () => {

    const order =  {
    userId:1,
    date: new Date().toISOString(),
    total:total(),
    items: items.map(({id, title, price, quantity}) => ({
      id, 
      title,
      price,
      quantity,
      subTotla: price * quantity,
    })),
  }

  console.log("📦 Enviando orden al backend...");
  console.log(JSON.stringify(order, null, 2));

  setCompra("Compra exitosa");
  setTimeout(() => setCompra(null), 3000);

  
  };

  return (
    <div className="bg-white text-segundo pt-20 px-4">
      <div className="flex flex-col lg:flex-row gap-10 min-w-[400px]">
        {/* Carrito */}
        <div className="flex-1 min-h-[500px] mx-auto ">
          {items.map(({ id, title, image, price, quantity }) => (
            <div
              key={id}
              className="relative border rounded mb-4 flex flex-col md:flex-row items-center bg-segundo text-white"
            >
              <button
                onClick={() => {removeFromCart(id) ; buttonClick()}}
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
                <p className="pb-2">Precio: $ {price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => {decreaseQty(id) ; buttonClick()}}
                    className="px-3 font-black border border-white rounded-l hover:bg-gray-200 hover:text-[#1A1A1A]"
                  >
                    -
                  </button>
                  <span className="px-3 border-t border-b border-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => {increaseQty(id) ; buttonClick()}}
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
        <div className="w-full lg:w-[400px] mx-auto h-fit border border-gray-300 rounded p-6 shadow-md sm:mx-2">
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
            onClick={()=> {clearCart(); buttonClick()}}
            className="mt-6 w-full bg-[#000000] hover:bg-[#1A1A1A] text-white py-2 rounded"
          >
            Vaciar Card
          </button>

          <button
            onClick={()=> {messageCompra(); buttonClickBuy();}}
            className="mt-2 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded"
          >
            Comprar
          </button>

          {compra && (
            <p className="mt-4 text-center text-green-800  animate-fade-in">
              {compra}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
