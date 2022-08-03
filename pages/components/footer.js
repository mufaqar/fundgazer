import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMedium, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <section className="bg-skin-bgFooter">
            <div className="container mx-auto py-12 grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="p-4">
                    <ul className="space-y-3">
                        <li>
                            <Link href="#">
                                <a className="text-lg font-normal text-skin-light">About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer">
                                <a className="text-lg font-normal text-skin-light">Disclaimer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="privacy-policy">
                                <a className="text-lg font-normal text-skin-light">Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="p-4 flex flex-col">
                    <ul className='flex md:justify-end mb-2'>
                        <li>
                            <Link href="mailto:support@fundgazer.com">
                                <a className="text-base font-normal text-skin-light">support@fundgazer.com</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex space-x-3 md:justify-end">
                        <li>
                            <Link href="#">
                                <a className="text-3xl text-skin-light"><FaFacebookSquare /></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-3xl text-skin-light"><FaTwitterSquare /> </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-3xl text-skin-light"><FaLinkedin /> </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-3xl text-skin-light"><FaInstagramSquare /> </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-3xl text-skin-light"><FaMedium /> </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
            <section className='bg-skin-dark'>
                <div className='container mx-auto py-3'>
                    <div>
                        <p className='text-base font-normal text-skin-light text-center'>@Copyrighted by Fundgazer</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
