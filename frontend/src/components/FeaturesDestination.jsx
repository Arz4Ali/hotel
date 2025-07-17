import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturesDestination = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

      <Title title='Featured Destinations' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.' align='center' font='font-playfair' />
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button onClick={() => { navigate('/rooms'); scrollTo(0, 0); }} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'> View All Offers.</button>
</div>
  )
}

export default FeaturesDestination

// import React from 'react'
// import { roomsDummyData } from '../assets/assets'
// import HotelCard from './HotelCard'

// const FeaturesDestination = () => {
//   return (
//     <div className="py-8">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Featured Destinations
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {roomsDummyData.slice(0, 4).map((room, index) => (
//             <HotelCard key={room._id} room={room} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FeaturesDestination