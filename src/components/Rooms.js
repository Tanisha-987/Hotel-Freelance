import React, { useState, useEffect } from 'react';
import { Wifi, Car, Coffee, Tv, Bath, Users, Heart, Star, X } from 'lucide-react';
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

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹3,500",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "AC", "TV", "Room Service"],
      capacity: "2 Adults",
      description: "Comfortable and elegant room with modern amenities for a perfect stay.",
      rating: 4.8
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "₹5,500",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "AC", "TV", "Mini Bar", "Balcony"],
      capacity: "2-3 Adults",
      description: "Spacious suite with separate living area and premium amenities.",
      rating: 4.9
    },
    {
      id: 3,
      name: "Luxury King Room",
      price: "₹7,000",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "Jacuzzi", "TV", "Room Service"],
      capacity: "2 Adults",
      description: "Premium room with a king-sized bed, luxurious Jacuzzi and elegant decor.",
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
    <section id="rooms" style={{ padding: "40px", backgroundColor: "#1a1a1a", color: "#fff" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", fontSize: "32px", marginBottom: "20px" }}
      >
        Our Luxury Rooms
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", color: "#ccc", marginBottom: "40px" }}
      >
        Choose from our beautiful rooms with all modern facilities.
      </motion.p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedRoom(room.id)}
            style={{
              width: "300px",
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
          >
            <div style={{ position: "relative" }}>
              <img 
                src={room.image} 
                alt={room.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", top: 10, right: 10,
                backgroundColor: "gold", color: "#1a1a1a", padding: "5px 10px", borderRadius: "10px"
              }}>
                {room.price}/night
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(room.id);
                }}
                style={{
                  position: "absolute", top: 10, left: 10,
                  backgroundColor: "white", border: "none", borderRadius: "50%", padding: "5px"
                }}
              >
                <Heart 
                  size={20} 
                  color={likedRooms.includes(room.id) ? "red" : "gray"} 
                  fill={likedRooms.includes(room.id) ? "red" : "none"}
                />
              </button>
              <div style={{
                position: "absolute", bottom: 10, left: 10,
                backgroundColor: "white", padding: "3px 8px", borderRadius: "10px"
              }}>
                <Star size={14} color="orange" fill="orange" /> {room.rating}
              </div>
            </div>

            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{room.name}</h3>
              <p style={{ color: "#ccc", marginBottom: "10px" }}>{room.description}</p>
              <p style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <Users size={16} style={{ marginRight: "5px" }} />
                {room.capacity}
              </p>

              <p><strong>Amenities:</strong></p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "15px" }}>
                {room.amenities.map((a, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#444", padding: "5px 10px", borderRadius: "20px" }}>
                    {getAmenityIcon(a)}
                    <span style={{ fontSize: "12px" }}>{a}</span>
                  </div>
                ))}
              </div>

              <button style={{ width: "100%", padding: "10px", backgroundColor: "gold", color: "#1a1a1a", border: "none", borderRadius: "5px" }}>
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
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
