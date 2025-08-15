"use client";
import Link from "next/link";

import { useCart } from "../store/useCart";

export default function Nav() {
  const { count } = useCart();
  return (
    <div className=" bg-[#f9f9f9] text-segundo h-[40px] flex justify-between items-center fixed top-0 left-0 w-full z-50  ">
      <div className="flex pl-20">

        <Link className="hover:text-red-700 pl-1  text-[13px] font-extralight " href="/">
          E-COMMERCE
        </Link>
      </div>
      <nav>
        <ul className="flex items-center pr-30">
          <li className="pr-5 hover:text-[#263c88] font-extralight text-[13px]  ">
            <Link href="/">HOME</Link>
          </li>
          <li className="pr-5 hover:text-[#263c88] font-extralight text-[13px]   flex">
            <Link href={"/cart"} className="flex items-center">
              CART
              <p className="ml-1 text-white bg-primero w-[18px] h-[18px] rounded-full text-[11px] flex items-center justify-center">
                {count()}
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
