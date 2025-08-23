"use client";
import Link from "next/link";

import { useCart } from "../store/useCart";

export default function Nav() {
  const { count } = useCart();
  return (
    <div className=" bg-[#f9f9f9] text-segundo h-[40px] flex justify-between items-center fixed top-0 left-0 w-full z-50 sm:text-[13px] text-[10px] ">
      <div className="flex pl-20">

        <Link className="hover:text-red-700 pl-1   " href="/">
          E-COMMERCE
        </Link>
      </div>
      <nav>
        <ul className="flex items-center pr-30">
          <li className="pr-5 hover:text-[#263c88]    ">
            <Link href="/">INICIO</Link>
          </li>
          <li className="pr-5 hover:text-[#263c88]     flex">
            <Link href={"/cart"} className="flex items-center">
              CARD
              <p className="ml-1 text-white bg-primero w-[18px] h-[18px] rounded-full text-[11px] flex items-center justify-center">
                {count()}
              </p>
            </Link>
          </li>
          <li>
          <select name="select" className="pr-5 hover:text-[#263c88] ">
          <option value="Español" selected>Español</option>
          <option value="English">English</option>
        </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}
