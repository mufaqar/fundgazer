import Image from 'next/image'
import Link from 'next/link'
import Post_template from '../components/post-template'

import Sidebar from '../components/sidebar'

export default function Blog() {
    return (
        <>
            <section>
                <div className='container mx-auto py-10'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        {/* Posts Column Start*/}
                        <div className='md:w-8/12 w-full'>

                            {/* Main Post Start*/}
                            <div className='flex md:flex-row flex-col gap-8 border-b py-5 mb-10'>
                                <div className='md:w-5/12 w-full md:p-0 p-4'>
                                    <figure className='h-[360px] w-full relative'>
                                        <Image src="/images/img1.png" alt='img1' layout='fill' className='object-cover rounded-lg'></Image>
                                    </figure>
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
                            {/* Main Post END*/}

                            {/* All Posts Start*/}
                            <div className='flex md:flex-row-reverse flex-col gap-5 border-b py-5 mb-10'>
                                <Post_template></Post_template>
                            </div>
                            <div className='flex md:flex-row-reverse flex-col gap-5 border-b py-5 mb-10'>
                                <Post_template></Post_template>
                            </div>
                            <div className='flex md:flex-row-reverse flex-col gap-5 border-b py-5 mb-10'>
                                <Post_template></Post_template>
                            </div>
                            {/* All Posts END*/}

                        </div>
                        {/* Posts Column END*/}

                        {/* Sidebar Column Start*/}
                        <div className='md:w-4/12 w-full'>
                            <Sidebar/>
                        </div>
                        {/* Sidebar Column End*/}
                    </div>
                </div>
            </section>
        </>
    )
}
