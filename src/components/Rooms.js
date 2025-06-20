import React, { useState } from 'react';
import { Wifi, Car, Coffee, Tv, Bath, Users, Heart, Star } from 'lucide-react';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [likedRooms, setLikedRooms] = useState([]);

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
  ];

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'free wifi':
        return <Wifi size={16} />;
      case 'ac':
        return <div style={{ width: 16, height: 16, background: 'lightblue', borderRadius: '50%' }}></div>;
      case 'tv':
        return <Tv size={16} />;
      case 'mini bar':
        return <Coffee size={16} />;
      case 'jacuzzi':
        return <Bath size={16} />;
      default:
        return <div style={{ width: 16, height: 16, background: 'gray', borderRadius: '50%' }}></div>;
    }
  };

  return (
    <section style={{ padding: "40px", backgroundColor: "#1a1a1a", color: "#fff" }}>
      <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "20px" }}>
        Our Luxury Rooms
      </h2>
      <p style={{ textAlign: "center", color: "#ccc", marginBottom: "40px" }}>
        Choose from our beautiful rooms with all modern facilities.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {rooms.map((room) => (
          <div 
            key={room.id} 
            onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
            style={{
              width: "300px",
              backgroundColor: "#2a2a2a",
              border: selectedRoom === room.id ? "3px solid gold" : "1px solid #444",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s",
              '&:hover': { transform: 'scale(1.05)' }
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

              <button style={{ width: "100%", padding: "10px", backgroundColor: "gold", color: "#1a1a1a", border: "none", borderRadius: "5px", transition: "background-color 0.3s", '&:hover': { backgroundColor: '#f0c040' } }}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
