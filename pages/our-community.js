import {BsDiscord} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {BiPolygon} from 'react-icons/bi'
import {FiLayers} from 'react-icons/fi'
import {FiClock} from 'react-icons/fi'

export default function OurCommunity() {
  return (
    <>
    {/* Banner Section Start*/}
    <section>
        <div className='container mx-auto py-20 grid md:grid-cols-2 grid-cols-1 gap-8 items-center'>
            <div className="p-4">
                <h1 className='text-6xl font-normal font-interRegular'><span className='text-skin-primary font-bold'>Join</span> Our Community</h1>
                <p className='text-xl font-medium mt-3'>We are all about giving personal investors the tools and resources they need, to make informed decisions.</p>
            </div>
            <div className="flex items-center md:justify-end justify-center space-x-4 p-4">
                <button className='bg-skin-dark text-skin-light hover:opacity-75 text-2xl font-semibold flex items-center space-x-3 py-3 px-7 rounded-md'><BsDiscord /> <span>Discord</span> </button>
                <button className='bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light text-2xl font-semibold flex items-center space-x-3 py-3 px-7 rounded-md'><FaTelegramPlane /> <span>Telegram</span> </button>
            </div>
        </div>
    </section>
    {/* Banner Section End*/}

{/* Resources Section Start*/}
    <section className='bg-[#E9E1FF]'>
        <div className='container mx-auto py-12 grid md:grid-cols-4 grid-cols-1 gap-8'>
            <div className='p-4'>
                <h5 className='text-2xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><BiPolygon strokeWidth={2}/> </span> <span>Belong</span></h5>
                <p className='text-xl font-normal text-skin-muted'>Get real-time advice and support from a community of experienced investors and don’t forget to give back!</p>
            </div>
            <div className='p-4'>
                <h5 className='text-2xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><FiLayers strokeWidth={3}/> </span> <span>Resources</span></h5>
                <p className='text-xl font-normal text-skin-muted'>Learn about finance, stocks, crypto and psychology behind building investment strategies and systems.</p>
            </div>
            <div className='p-4'>
                <h5 className='text-2xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><BiPolygon strokeWidth={2}/> </span> <span>Black Box</span></h5>
                <p className='text-xl font-normal text-skin-muted'>Stay ahead of the curve with market alerts powered by our proprietary algorithms.</p>
            </div>
            <div className='p-4'>
                <h5 className='text-2xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><FiClock strokeWidth={3}/> </span> <span>Updates</span></h5>
                <p className='text-xl font-normal text-skin-muted'>Recieve first hand updates on latest financial news and new Fungazer products.</p>
            </div>
        </div>
    </section>
    {/* Resources Section End*/}
    </>
  )
}
