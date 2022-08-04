import Link from 'next/link'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      {/* Banner Section Start*/}
      <section>
        <div className='container mx-auto py-20 grid md:grid-cols-2 grid-cols-1 gap-4'>
          <div className="p-4">
            <h1 className='text-6xl font-thin font-interRegular'>The <span className='text-skin-primary font-bold'>Future</span> of Personal Investment.</h1>
            <p className='text-xl font-medium mt-3 font-interRegular'>From building your diversified long-term portfolio and tracking your assets to finding investment ideas, we <br></br>got you covered.</p>
            <Link href="#">
              <a className='flex space-x-2 items-center text-3xl font-semibold mt-5 font-interMedium group'><span className='text-skin-primary group-hover:animate-bounce'><BsChevronDown strokeWidth={2} /> </span> <span>Join Waitlist</span></a>
            </Link>
          </div>
          <div className="p-4">
            <Image src="/images/mainImg.png" alt='mainImg.png' width={1075} height={560}></Image>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}


      {/* Jion Us Section Start*/}
      <section className='bg-skin-primary'>
        <div className='container mx-auto py-20 grid md:grid-cols-2 grid-cols-1 gap-8'>
          <div className="p-4">
            <h1 className='text-6xl font-normal text-[#D1C6FF] font-interRegular'><span className='text-skin-light font-bold'>Join </span> Waitlist</h1>
            <p className='text-xl text-skin-light font-normal mt-3 font-interRegular'>From building your diversified long-term portfolio and <br></br>tracking you.</p>
            <div className='mt-8'>
              <form className='md:flex md:space-x-2 md:space-y-0 space-x-0 space-y-2'>
                <input type="email" id="email" placeholder='Enter Email' name="email" className='font-interRegular bg-skin-light text-skin-muted text-2xl font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:w-[395px] w-full' />
                <button type="submit" className='font-interMedium bg-skin-dark text-skin-light hover:opacity-75 text-2xl font-semibold flex items-center py-3 px-12 rounded-md'>Join</button>
              </form>
            <button type="submit" className='text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent text-base font-normal flex items-center py-3 px-12 rounded-md mt-5'>I am not a robot</button>
            </div>
          </div>
          <div className="p-4">
            <iframe class="w-full aspect-video ..." src="http://localhost:3000/images/video.mp4"></iframe>
          </div>
        </div>
      </section>
      {/* Jion Us Section End*/}

    </>
  )
}
