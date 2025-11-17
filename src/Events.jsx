import { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiHeart,
  FiMessageCircle,
  FiBookmark,
} from "react-icons/fi";

/* ============================================================
   GALERI FOTO
============================================================ */
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
        {photos.map((p, i) => (
          <img
            key={i}
            src={p}
            className="w-full h-45 object-cover rounded-lg shadow-md hover:opacity-90 transition"
          />
        ))}

        {/* Card Lihat Lebih Banyak */}
        <div
          className="w-full h-45 rounded-lg shadow-md flex items-center justify-center 
          bg-[#1785D9] cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-white font-semibold">Lihat Lebih Banyak</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   GALERI VIDEO
============================================================ */
function VideoGallery({ darkMode }) {
  const videos = [
    {
      thumbnail: "https://picsum.photos/300/200?random=21",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      thumbnail: "https://picsum.photos/300/200?random=22",
      url: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      thumbnail: "https://picsum.photos/300/200?random=23",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      thumbnail: "https://picsum.photos/300/200?random=29",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-3">Galeri Video Event</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {videos.map((v, i) => (
          <div
            key={i}
            onClick={() => setActiveVideo(v.url)}
            className="relative cursor-pointer group"
          >
            <img
              src={v.thumbnail}
              className="w-full h-32 object-cover rounded-lg shadow-md brightness-90 group-hover:brightness-75 transition"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-zinc-200 p-2 rounded-full opacity-90 group-hover:scale-110 transition">
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-black rounded-lg overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={activeVideo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   HALAMAN EVENT + PAGINATION
============================================================ */
export default function Events({ darkMode }) {
  const [filter, setFilter] = useState("upcoming");
  const [savedEvents, setSavedEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // === DATA EVENT (tambah banyak supaya pagination terasa) ===
  const events = [
    {
      id: 1,
      title: "Festival Musik Kota 2025",
      date: "12 Jan 2025",
      location: "Jakarta",
      attendees: 1200,
      image: "https://picsum.photos/600/400?random=11",
      category: "Hiburan",
      description:
        "Festival musik terbesar dengan lebih dari 20 artis tampil...",
    },
    {
      id: 2,
      title: "Workshop AI Dasar",
      date: "20 Jan 2025",
      location: "Bandung",
      attendees: 350,
      image: "https://picsum.photos/600/400?random=12",
      category: "Teknologi",
      description:
        "Pelatihan mengenai Artificial Intelligence untuk pemula...",
    },
    {
      id: 3,
      title: "Pameran Kuliner Nusantara",
      date: "5 Feb 2025",
      location: "Surabaya",
      attendees: 800,
      image: "https://picsum.photos/600/400?random=13",
      category: "Kuliner",
      description:
        "Pameran besar makanan khas dari seluruh Indonesia...",
    },
    // Dummy tambahan
    {
      id: 4,
      title: "Pentas Seni Budaya 2025",
      date: "15 Feb 2025",
      location: "Yogyakarta",
      attendees: 600,
      image: "https://picsum.photos/600/400?random=14",
      category: "Budaya",
      description:
        "Acara seni budaya dengan berbagai pertunjukan tari dan musik...",
    },
    {
      id: 5,
      title: "Seminar Bisnis UMKM",
      date: "20 Feb 2025",
      location: "Medan",
      attendees: 450,
      image: "https://picsum.photos/600/400?random=15",
      category: "Bisnis",
      description:
        "Seminar tentang strategi pengembangan bisnis UMKM modern...",
    },
  ];

  /* === PAGINATION === */
  const itemsPerPage = 3;
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = indexStart + itemsPerPage;
  const paginatedEvents = events.slice(indexStart, indexEnd);

  /* === SAVE EVENT === */
  const toggleSave = (eventId) => {
    setSavedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    
    <div
      className={`${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      } min-h-screen px-10 py-20`}
    >
      {/* HERO BANNER */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-10">

      {/* Background Image */}
      <img
        src="https://picsum.photos/1200/500?random=100"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 
        ${darkMode ? "bg-black/40" : "bg-white/30 backdrop-blur-sm"}
      `}></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-10">

        <h1 className="text-3xl md:text-4xl font-bold drop-shadow text-white">
          Temukan Event Terbaru di Sekitar Anda
        </h1>

        <p className="mt-2 text-gray-200 text-sm md:text-base max-w-xl">
          Jelajahi berbagai event menarik mulai dari musik, teknologi, kuliner, dan banyak lagi.
        </p>

        <button
          className="mt-4 px-5 py-2 bg-[#1785D9] text-white rounded-full text-sm shadow hover:bg-blue-700 transition"
        >
          Lihat Event Populer
        </button>
      </div>

      </div>

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
            className={`px-4 py-2 rounded-full text-sm transition border ${
              filter === item.value
                ? "bg-[#1785D9] text-white border-blue-600"
                : darkMode
                ? "bg-zinc-800 text-gray-300 border-zinc-700 hover:bg-zinc-700"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* EVENT LIST (with pagination) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedEvents.map((event) => (
          <div
            key={event.id}
            className={`rounded-lg overflow-hidden shadow-lg border cursor-pointer transition hover:opacity-90 ${
              darkMode
                ? "bg-zinc-900 border-zinc-700"
                : "bg-white border-zinc-300"
            }`}
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

              <div
                className="flex justify-between items-center border-t mt-3 pt-3 select-none text-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="flex items-center gap-2 hover:text-blue-600">
                  <FiHeart /> Suka
                </button>

                <button className="flex items-center gap-2 hover:text-blue-600">
                  <FiMessageCircle /> Komentar
                </button>

                <button
                  onClick={() => toggleSave(event.id)}
                  className={`flex items-center gap-2 transition ${
                    savedEvents.includes(event.id)
                      ? "text-blue-500"
                      : "hover:text-blue-600"
                  }`}
                >
                  <FiBookmark />{" "}
                  {savedEvents.includes(event.id) ? "Disimpan" : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION BUTTONS */}
      <div className="flex justify-center items-center gap-3 mt-10">

      {/* Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className={`
          px-4 py-2 rounded transition
          ${darkMode
            ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
          disabled:opacity-40 disabled:hover:bg-inherit
        `}
      >
        Prev
      </button>

      {/* Numbered Page Buttons */}
      {[...Array(totalPages)].map((_, i) => {
        const active = currentPage === i + 1;

        return (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`
              px-4 py-2 rounded transition
              ${
                active
                  ? "bg-[#1785D9] text-white"
                  : darkMode
                  ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {i + 1}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className={`
          px-4 py-2 rounded transition
          ${darkMode
            ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
          disabled:opacity-40 disabled:hover:bg-inherit
        `}
      >
        Next
      </button>

      </div>


      {/* GALLERY */}
      <EventGallery darkMode={darkMode} />

      {/* VIDEO */}
      <VideoGallery darkMode={darkMode} />
    </div>
  );
}
