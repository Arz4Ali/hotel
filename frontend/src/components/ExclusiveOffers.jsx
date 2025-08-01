import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex-flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb:30'>

        <div className='flex flex-col md:flex-row items-center justify-between'>
            <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create an unforgattable memories and Chill..!' />
            <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow icon" className='group-hover:translate-x-1 transition-all'  />
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {
                exclusiveOffers.map((items)=>(
                    <div key={items._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${items.image})` }}>
                        <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{items.priceOff}% OFF</p>
                        <div>
                            <p className='text-2xl font-medium font-playfair'>{items.title}</p>
                            <p>{items.description}</p>
                            <p className='text-xs text-white/70 mt-3'> Expires {items.expiryDate}</p>
                        </div>

                        <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 '>
                            View Offers
                            <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="arrow-icon" />
                        </button>




                        <div className='absolute inset-0 bg-black opacity-30 rounded-xl'></div>
                        <div className='relative z-10'>
                            <h3 className='text-lg font-semibold'>{items.title}</h3>
                            <p className='text-sm'>{items.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default ExclusiveOffers
