import Image from "next/image";
import fondo from '../public/fondo.jpg';


export default function Home() {


  return (
    <div className="bg-[#E6E8E6]">
       <Image className="w-full h-[200px] object-cover" alt="fondo" src={fondo}></Image>
    </div>
  );
}
