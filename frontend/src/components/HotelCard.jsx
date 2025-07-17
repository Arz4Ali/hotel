import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  if (!room) {
    return <div className="p-4 text-center">Room data not available</div>;
  }

  const hotelName = room.hotel?.name || 'Hotel Name';
  const hotelAddress = room.hotel?.address || 'Address not available';
  const imageUrl = room.images?.[0] || assets.roomImg1;
  const price = room.pricePerNight || 0;
  const roomId = room.id || room._id || '';

  return (
    <Link
      to={`/rooms/${roomId}`}
      onClick={() => scrollTo(0, 0)}
      key={roomId}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={hotelName}
          
        />
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">{hotelName}</p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star-icons" /> 4.5
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{hotelAddress}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">$ {price}</span> /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now !
          </button>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const HotelCard = ({ room , index}) => {
//   return (
//     <Link to = {'/rooms/' + room.id} onClick={() =>
//         scrollTo(0, 0)} key = {room._id}>
//             <img src={room.image[0]} alt="" className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]' />
//             {index % 2 ===0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'> Best Seller</p>}

//             <div  className='p-4 pt-5'>
//                 <div className='flex items-center justify-between'>
//                 <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                 
//                   <div className='flex items-center gap-1 '>
//                     <img src= {assets.starIconFilled}alt="star-icons" /> 4.5
//             </div>
//             </div>

//             <div className='flex items-center gap-1 text-sm'> <img src={assets.locationIcon} alt="location-icon" />
//             <span>{room.hotel.address}</span></div>

//             </div>
//             <div className='flex items-center justify-between mt-4'>
//                 <p> <span className='text-xl text-gray-800'>$ {room.pricePerNight} </span> /night </p>
          
           
//            <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'> Book Now !</button>

//                </div>
//              </Link>
//   )
// }

// export default HotelCard






// import React from 'react'
// import { Link } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const HotelCard = ({ room, index }) => {
//   // Add safety checks for room data
//   if (!room) {
//     return <div className="p-4 text-center">Room data not available</div>;
//   }

//   return (
//     <Link 
//       to={'/rooms/' + room.id} 
//       onClick={() => scrollTo(0, 0)} 
//       key={room._id}
//       className="block"
//     >
//       <div className="relative">
//         <img 
//           src={room.image && room.image[0] ? room.image[0] : '/placeholder-image.jpg'} 
//           alt={room.hotel?.name || 'Hotel image'} 
//           className="relative max-w-70 w-full h-48 object-cover rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]" 
//         />
//         {index % 2 === 0 && (
//           <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
//             Best Seller
//           </p>
//         )}
//       </div>

//       <div className="p-4 pt-5">
//         <div className="flex items-center justify-between">
//           <p className="font-playfair text-xl font-medium text-gray-800">
//             {room.hotel?.name || 'Hotel Name'}
//           </p>
          
//           <div className="flex items-center gap-1">
//             <img src={assets.starIconFilled} alt="star-icons" /> 4.5
//           </div>
//         </div>

//         <div className="flex items-center gap-1 text-sm">
//           <img src={assets.locationIcon} alt="location-icon" />
//           <span>{room.hotel?.address || 'Address not available'}</span>
//         </div>

//         <div className="flex items-center justify-between mt-4">
//           <p>
//             <span className="text-xl text-gray-800">$ {room.pricePerNight || 0}</span> /night
//           </p>
          
//           <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
//             Book Now !
//           </button>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default HotelCard