"use client";
import Link from "next/link";
import { useCart } from "../store/useCart";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { i18n, t } = useTranslation();
  const { count } = useCart();

  // función para cambiar idioma
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className=" bg-[#f9f9f9] text-segundo h-[40px] flex justify-between items-center fixed top-0 left-0 w-full z-50 sm:text-[13px] text-[10px] ">
      <div className="flex pl-20">
        <Link className="hover:text-red-700 pl-1" href="/">
          {t("ecommerce")}
        </Link>
      </div>
      <nav>
        <ul className="flex items-center pr-30">
          <li className="pr-5 hover:text-[#263c88]">
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="pr-5 hover:text-[#263c88] flex">
            <Link href={"/cart"} className="flex items-center">
              {t("cart")}
              <p className="ml-1 text-white bg-primero w-[18px] h-[18px] rounded-full text-[11px] flex items-center justify-center">
                {count()}
              </p>
            </Link>
          </li>
          <li>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="border border-gray-300 rounded px-1 py-0.5 ml-3"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}
