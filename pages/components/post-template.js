import Image from 'next/image'
import Link from 'next/link'

export default function Post_template() {
  return (
    <>
      <div className='md:w-4/12 w-full md:p-0 p-4'>
        <figure className='h-[202px] w-full relative'>
        <Image src="/images/img2.png" alt='img2' layout='fill' className='object-cover rounded-lg'></Image>
        </figure>
      </div>
      <div className='md:w-8/12 flex flex-col justify-between md:p-0 p-4'>
        <div>
          <h3 className='text-3xl font-bold text-skin-dark mb-3'>7 Best Investing Blogs 2022: Think Like an Investor</h3>
          <ul className='flex space-x-3 text-xl font-normal text-skin-primary mb-3'>
            <li>
              <Link href="#"><a>#Economy</a></Link>
            </li>
            <li>
              <Link href="#"><a>#Crypto</a></Link>
            </li>
          </ul>
          <p className='text-xl font-normal text-skin-muted mb-3'>In this segment of our ‘Think Like an Investor’ series, we’re going to look at another resource which proves invaluable to the modern investor: blogs.</p>
        </div>
        <ul className='flex space-x-3 text-xl font-normal text-skin-muted mb-4'>
          <li>
            <Link href="#"><a>Shashank Gupta</a></Link>
          </li>
          <li>
            <Link href="#"><a>11 March 2023</a></Link>
          </li>
        </ul>
      </div>
    </>
  )
}
