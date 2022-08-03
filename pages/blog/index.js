import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
    return (
        <>
            <section>
                <div className='container mx-auto py-20'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        {/* All Post Start*/}
                        <div className='md:w-9/12 w-full'>

                            {/* Single Post Start*/}
                            <div className='flex md:flex-row flex-col gap-8 border-b py-5'>
                                <div className='md:w-5/12 w-full flex justify-center'>
                                    <Image src="/images/img1.png" alt='img1' width={341} height={360} className=''></Image>
                                </div>
                                <div className='md:w-7/12 flex flex-col justify-between md:p-0 p-4'>
                                    <div>
                                        <h3 className='text-4xl font-bold text-skin-dark mb-3'>7 Best Investing Blogs 2022: Think Like an Investor</h3>
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
                            </div>
                            {/* Single Post END*/}    

                        </div>
                        {/* All Post END*/}

                        {/* Sidebar Column Start*/}
                        <div className='md:w-3/12 w-full'>
                            <form>
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-skin-dark dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="search" class="block p-4 pl-10 bg-skin-light text-skin-dark text-sm font-medium border border-black focus:border-[#6F49DD] focus:outline-none py-3 px-4 rounded w-full" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                        {/* Sidebar Column End*/}
                    </div>
                </div>
            </section>
        </>
    )
}
