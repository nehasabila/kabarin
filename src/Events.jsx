import { useState } from "react";
import { FiCalendar, FiMapPin, FiUsers, FiHeart, FiMessageCircle, FiBookmark } from "react-icons/fi";

function EventGallery({ darkMode }) {
    const photos = [
      "https://picsum.photos/300/200?random=11",
      "https://picsum.photos/300/200?random=12",
      "https://picsum.photos/300/200?random=13",
      "https://picsum.photos/300/200?random=14",
      "https://picsum.photos/300/200?random=15",
      "https://picsum.photos/300/200?random=16",
      "https://picsum.photos/300/200?random=17",
    ];
  
    return (
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Galeri Foto Event</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
  
          {/* === 7 Foto === */}
          {photos.map((p, i) => (
            <img
              key={i}
              src={p}
              className="w-full h-32 object-cover rounded-lg shadow-md hover:opacity-90 transition"
            />
          ))}
  
          {/* === Card “Lihat Lebih Banyak” (Foto ke-8) === */}
          <div
            className="w-full h-32 rounded-lg shadow-md flex items-center justify-center 
            bg-[#1785D9] cursor-pointer hover:opacity-80 transition"
          >
            <span className="text-gray-600 dark:text-gray-100 text-medium font-semibold">
              Lihat Lebih Banyak
            </span>
          </div>
  
        </div>
      </div>
    );
  }
  

export default function Events({ darkMode }) {
  const [filter, setFilter] = useState("upcoming");
  const [savedEvents, setSavedEvents] = useState([]);

  const events = [
    {
      id: 1,
      title: "Festival Musik Kota 2025",
      date: "12 Jan 2025",
      location: "Jakarta",
      attendees: 1200,
      image: "https://picsum.photos/600/400?random=11",
      category: "Hiburan",
      description: "Festival musik terbesar dengan lebih dari 20 artis tampil.",
    },
    {
      id: 2,
      title: "Workshop AI Dasar untuk Pemula",
      date: "20 Jan 2025",
      location: "Bandung",
      attendees: 350,
      image: "https://picsum.photos/600/400?random=12",
      category: "Teknologi",
      description: "Pelatihan langsung mengenai Artificial Intelligence untuk pemula.",
    },
    {
      id: 3,
      title: "Pameran Kuliner Nusantara",
      date: "5 Feb 2025",
      location: "Surabaya",
      attendees: 800,
      image: "https://picsum.photos/600/400?random=13",
      category: "Kuliner",
      description: "Pameran makanan khas dari seluruh Indonesia.",
    },
  ];

  const toggleSave = (eventId) => {
    setSavedEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  return (
    <div className={`${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"} min-h-screen px-10 py-20`}>
      <h1 className="text-2xl font-bold mb-6">Event Terbaru</h1>

      {/* FILTER */}
      <div className="flex gap-3 mb-6">
        {[
          { label: "Akan Datang", value: "upcoming" },
          { label: "Populer", value: "popular" },
          { label: "Terdekat", value: "nearby" },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`px-4 py-2 rounded-full text-sm transition border
              ${
                filter === item.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : darkMode
                  ? "bg-zinc-800 text-gray-300 border-zinc-700 hover:bg-zinc-700"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* EVENT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className={`rounded-lg overflow-hidden shadow-lg border cursor-pointer transition hover:opacity-90
              ${darkMode ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-300"}`}
          >
            <img src={event.image} className="w-full h-48 object-cover" />

            <div className="p-4">
              <span className="text-xs text-blue-400">{event.category}</span>
              <h2 className="text-lg font-semibold mt-1">{event.title}</h2>

              <div className="flex items-center text-sm text-gray-400 mt-1 gap-2">
                <FiCalendar /> {event.date}
              </div>

              <div className="flex items-center text-sm text-gray-400 gap-2 mt-1">
                <FiMapPin /> {event.location}
              </div>

              <div className="flex items-center text-sm text-gray-400 gap-2 mt-1">
                <FiUsers /> {event.attendees} orang tertarik
              </div>

              <p className="text-sm mt-2 text-gray-500">{event.description}</p>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between items-center border-t mt-3 pt-3 select-none text-gray-600" onClick={(e) => e.stopPropagation()}>
                <button className="flex items-center gap-2 hover:text-blue-600">
                  <FiHeart /> Suka
                </button>

                <button className="flex items-center gap-2 hover:text-blue-600">
                  <FiMessageCircle /> Komentar
                </button>

                <button
                  onClick={() => toggleSave(event.id)}
                  className={`flex items-center gap-2 transition ${savedEvents.includes(event.id) ? "text-blue-500" : "hover:text-blue-600"}`}
                >
                  <FiBookmark /> {savedEvents.includes(event.id) ? "Disimpan" : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EventGallery darkMode={darkMode} />

    </div>
  );
}
