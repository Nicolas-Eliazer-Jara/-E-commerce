"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useCart } from "../store/useCart";


export default function Nav() {
   const {count} = useCart();
  return (
    <div className="bg-cuarto text-segundo h-[40px] flex justify-between items-center fixed top-0 left-0 w-full z-50  ">
      <div className="flex pl-20">
        <Image
          className=" object-contain "
          src={logo}
          alt="logo"
          width={20}
          height={20}
        ></Image>
        <Link className="hover:text-white pl-2 text-[20px]" href="/">
          E-commerce
        </Link>
      </div>
      <nav >
        <ul className="flex items-center pr-30">
          <li className="pr-5 hover:text-white ">
            <Link href="/">Home</Link>
          </li>
          <li className="pr-5 hover:text-white  flex">
          <Link href={"/cart"} className="flex items-center">
  Cart
  <p className="ml-1 text-segundo bg-primero w-[18px] h-[18px] rounded-full text-[12px] flex items-center justify-center">
    {count()}
  </p>
</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
