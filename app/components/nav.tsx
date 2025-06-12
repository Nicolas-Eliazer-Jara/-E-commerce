import Link from 'next/link'

export default function nav(){
  return (
    <div className='bg-[#E6E8E6] text-[#171A21] w-full h-[40px] flex justify-between items-center '>
        <Link className='pl-20 text-[20px]' href="/">E-commerce</Link>
        <nav>
            <ul className='flex pr-30'>
                <li className='pr-5'><Link href="/">home</Link></li>
                <li><Link href="/shop">shop</Link></li>
            </ul>
        </nav>
    </div>
  )
}

