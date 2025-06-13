import Link from 'next/link'
import Image from "next/image";
import logo from '@/public/logo.png'

export default function nav(){
  return (
    <div className='bg-[#E6E8E6] text-[#171A21] w-full h-[40px] flex justify-between items-center '>
        <div className='flex pl-20'>
        <Image className=' object-contain ' src={logo} alt="logo" width={20} height={20}></Image>
        <Link className='pl-2 text-[20px]' href="/">E-commerce</Link>
        </div>
        <nav>
            <ul className='flex pr-30'>
                <li className='pr-5'><Link href="/">home</Link></li>
                <li><Link href="/shop">shop</Link></li>
            </ul>
        </nav>
    </div>
  )
}

