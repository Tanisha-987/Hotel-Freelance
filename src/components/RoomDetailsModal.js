import React from 'react';
import { motion } from 'framer-motion';
import { X, Users, Star, Wifi, Coffee, Tv, Bath } from 'lucide-react';

const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'free wifi':
      return <Wifi size={16} />;
    case 'ac':
      return <div className="w-4 h-4 rounded-full bg-blue-300" />;
    case 'tv':
      return <Tv size={16} />;
    case 'mini bar':
      return <Coffee size={16} />;
    case 'jacuzzi':
      return <Bath size={16} />;
    default:
      return <div className="w-4 h-4 rounded-full bg-gray-400" />;
  }
};

const RoomDetailsModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: '-10%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-10%' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
    >
      <div className="relative bg-white rounded-xl w-full max-w-3xl shadow-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 rounded-full p-2 transition-all"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 text-gray-800">
          <h2 className="text-2xl font-bold mb-1">{room.name}</h2>
          <p className="text-sm text-gray-500 mb-3">{room.description}</p>

          <div className="flex flex-wrap items-center text-sm mb-4 gap-4">
            <div className="flex items-center gap-1 text-gray-600">
              <Users size={16} />
              {room.capacity}
            </div>
            <div className="flex items-center gap-1 text-yellow-600 font-medium">
              <Star size={16} fill="orange" />
              {room.rating}
            </div>
            <div className="ml-auto text-green-600 font-semibold text-base">
              {room.price} <span className="text-sm text-gray-500">/ night</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-3">
              {room.amenities.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {getAmenityIcon(item)}
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition duration-200">
            Book This Room
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomDetailsModal;
