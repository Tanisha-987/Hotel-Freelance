import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Car, Coffee, Tv, Bath, Users, Heart, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RoomDetailsModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: "-10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-10%" }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl overflow-hidden w-[90%] max-w-3xl relative text-black">
        <button onClick={onClose} className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-red-200">
          <X size={20} />
        </button>

        <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
          <p className="text-gray-600 mb-2">{room.description}</p>

          <div className="flex items-center text-sm text-gray-700 mb-3">
            <Users className="mr-2" size={16} /> {room.capacity}
            <Star className="ml-4 mr-1" size={16} color="orange" fill="orange" /> {room.rating}
          </div>

          <div className="mb-4">
            <strong>Price: </strong><span className="text-lg font-bold text-green-700">{room.price}</span> / night
          </div>

          <div className="mb-4">
            <strong>Amenities:</strong>
            <ul className="list-disc list-inside mt-1 text-sm">
              {room.amenities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <button className="w-full mt-4 bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition">
            Book This Room
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [likedRooms, setLikedRooms] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = selectedRoom ? 'hidden' : 'auto';
  }, [selectedRoom]);

  const toggleLike = (roomId) => {
    if (likedRooms.includes(roomId)) {
      setLikedRooms(likedRooms.filter(id => id !== roomId));
    } else {
      setLikedRooms([...likedRooms, roomId]);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹3,500",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "AC", "TV", "Room Service"],
      capacity: "2 Adults",
      description: "Comfortable and elegant room with modern amenities.",
      rating: 4.8
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "₹5,500",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "AC", "TV", "Mini Bar", "Balcony"],
      capacity: "2-3 Adults",
      description: "Spacious suite with premium amenities.",
      rating: 4.9
    },
    {
      id: 3,
      name: "Luxury King Room",
      price: "₹7,000",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "Jacuzzi", "TV", "Room Service"],
      capacity: "2 Adults",
      description: "King-sized bed, luxurious Jacuzzi and decor.",
      rating: 5.0
    },
    {
      id: 4,
      name: "Superior Room",
      price: "₹4,200",
      image: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "AC", "TV"],
      capacity: "2 Adults",
      description: "Modern decor and elegant furniture.",
      rating: 4.6
    },
    {
      id: 5,
      name: "Junior Suite",
      price: "₹6,000",
      image: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "Balcony", "TV", "Mini Bar"],
      capacity: "3 Adults",
      description: "Ideal for small families, includes balcony.",
      rating: 4.7
    },
    {
      id: 6,
      name: "Premium Twin Room",
      price: "₹3,800",
      image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "TV", "Twin Beds"],
      capacity: "2 Adults",
      description: "Best for friends or coworkers traveling together.",
      rating: 4.5
    },
    {
      id: 7,
      name: "Royal Suite",
      price: "₹9,500",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Jacuzzi", "Mini Bar", "Balcony", "Free WiFi"],
      capacity: "2-4 Adults",
      description: "Top-tier suite with royal treatment and luxury.",
      rating: 5.0
    }
  ];

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'free wifi':
        return <Wifi size={16} />;
      case 'ac':
        return <div style={{ width: 16, height: 16, background: 'lightblue', borderRadius: '50%' }} />;
      case 'tv':
        return <Tv size={16} />;
      case 'mini bar':
        return <Coffee size={16} />;
      case 'jacuzzi':
        return <Bath size={16} />;
      default:
        return <div style={{ width: 16, height: 16, background: 'gray', borderRadius: '50%' }} />;
    }
  };

  const selectedRoomData = rooms.find(room => room.id === selectedRoom);

  return (
    <section id="rooms" className="py-12 bg-[#1a1a1a] text-white relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl text-center mb-4"
      >
        Our Luxury Rooms
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 mb-10"
      >
        Choose from our beautiful rooms with all modern facilities.
      </motion.p>

      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedRoom(room.id)}
              className="min-w-[280px] bg-[#2a2a2a] border border-[#444] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <div className="relative">
                <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-sm rounded">{room.price}/night</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(room.id);
                  }}
                  className="absolute top-2 left-2 bg-white p-1 rounded-full"
                >
                  <Heart
                    size={18}
                    color={likedRooms.includes(room.id) ? "red" : "gray"}
                    fill={likedRooms.includes(room.id) ? "red" : "none"}
                  />
                </button>
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm rounded flex items-center gap-1">
                  <Star size={14} color="orange" fill="orange" /> {room.rating}
                </div>
              </div>

              <div className="p-6">
                <div className='h-[180px]'>
                <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{room.description}</p>
                <p className="flex items-center text-sm mb-2"><Users size={14} className="mr-2" />{room.capacity}</p>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-1 bg-[#444] px-2 py-1 text-xs rounded-full">
                      {getAmenityIcon(a)}
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
                </div>
                <button className="w-full mt-4 bg-yellow-400 text-black py-1 rounded">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>

      <AnimatePresence>
        {selectedRoomData && (
          <RoomDetailsModal
            room={selectedRoomData}
            onClose={() => setSelectedRoom(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Rooms;
