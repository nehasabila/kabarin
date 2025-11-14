import {
  FiUsers,
  FiFileText,
  FiUserCheck,
  FiCalendar,
  FiMapPin,
  FiHeart,
  FiMessageCircle,
  FiBookmark,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function App({ darkMode }) {
  // ==== DATA BERITA LANGSUNG DI SINI ====
  const beritaList = [
    {
      title: "Banjir Melanda Jakarta",
      image: "https://picsum.photos/300/200?random=12",
      date: "14 Feb 2025",
      location: "Jakarta",
      category: "Peristiwa",
      desc: "Hujan deras menyebabkan beberapa titik banjir di wilayah Jakarta sejak dini hari.",
    },
    {
      title: "Teknologi AI Terbaru Resmi Dirilis",
      image: "https://picsum.photos/300/200?random=1",
      date: "15 Feb 2025",
      category: "Teknologi",
      desc: "Perusahaan teknologi besar merilis AI generasi baru dengan kemampuan pemrosesan super cepat.",
    },
    {
      title: "Harga Beras Naik di Beberapa Daerah",
      image: "https://picsum.photos/300/200?random=2",
      date: "13 Feb 2025",
      category: "Ekonomi",
      desc: "Kenaikan harga pangan kembali terjadi akibat pasokan yang menurun di beberapa provinsi.",
    },
  ];

  return (
    <>
      <div
        className={`min-h-screen px-10 py-25 transition-colors duration-300 ${
          darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
        {/* ================= HERO SECTION ================= */}
        <div className="relative mb-28">
          <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
            <div>
              <h1 className="text-5xl font-bold mb-4 leading-snug px-5 pr-0 ">
                Mau terus tahu apa yang sedang terjadi? Scroll aja di sini.
              </h1>
              <p
                className={`text-lg px-5 ${
                  darkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Dari yang serius sampai yang rame, semuanya ada di Kabarin.
              </p>

              <button className="px-10 py-2 my-5 mb-20 mx-5 rounded-lg text-sm font-medium transition bg-[#1785D9] hover:bg-[#1472BC] text-white">
                Get Started
              </button>
            </div>

            <img
              src="/assets/Image/heroImage.png"
              alt="Hero Image"
              className="w-full max-w-[500px] ml-10 justify-self-center"
            />
          </div>

          {/* BRAND BAR */}
          <div
            className="
            w-full py-6 md:py-8 overflow-hidden
            absolute inset-x-0 mx-auto bg-[#7da7c7] 
            text-zinc-800 font-medium tracking-wide
            rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]
            backdrop-blur-md border border-white/40
          "
            style={{ bottom: "-18px", zIndex: 30 }}
          >
            <div className="flex gap-10 md:gap-16 animate-scroll whitespace-nowrap items-center px-4">
              {[
                "Berbasis Fakta",
                "Tanpa Rekayasa",
                "Verifikasi Berlapis",
                "Sumber Kredibel",
                "Liputan Independen",
                "Transparansi Data",
                "Integritas Jurnalisme",
              ]
                .concat([
                  "Berbasis Fakta",
                  "Tanpa Rekayasa",
                  "Verifikasi Berlapis",
                  "Sumber Kredibel",
                  "Liputan Independen",
                  "Transparansi Data",
                  "Integritas Jurnalisme",
                ])
                .map((item, index) => (
                  <span key={index} className="px-4 py-1.5 text-sm text-white">
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION ================= */}
        <section>
          {/* ===== STATISTIK ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-24 px-6 md:px-0">
            {[
              {
                icon: <FiUsers className="text-3xl mb-4 text-[#1785D9]" />,
                angka: "1.2 Juta+",
                teks: "Pembaca Aktif",
              },
              {
                icon: <FiFileText className="text-3xl mb-4 text-[#1785D9]" />,
                angka: "15 Ribu+",
                teks: "Artikel Terbit Setiap Bulan",
              },
              {
                icon: <FiUserCheck className="text-3xl mb-4 text-[#1785D9]" />,
                angka: "300+",
                teks: "Jurnalis & Kontributor Terverifikasi",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
              group p-8 rounded-3xl border backdrop-blur-md text-center cursor-pointer
              transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03]
              shadow-sm hover:shadow-xl
              ${darkMode ? "bg-zinc-800/60 border-zinc-700" : "bg-white/80 border-zinc-200"}
            `}
              >
                <div className="flex justify-center">{item.icon}</div>

                <h3 className="text-4xl font-extrabold mb-2 group-hover:text-[#1785D9]">
                  {item.angka}
                </h3>

                <p
                  className={`text-sm tracking-wide ${
                    darkMode ? "text-zinc-400" : "text-zinc-600"
                  } group-hover:text-[#1785D9]`}
                >
                  {item.teks}
                </p>
              </div>
            ))}
          </div>

          {/* ===== SECTION KEBENARAN ===== */}
          <div className="-mx-10 py-14 bg-[#1785D9] text-white text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-3 tracking-wide">
              Berpihak pada Kebenaran, Mengutamakan Data.
            </h2>
            <h6 className="text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
              Kami mengutamakan integritas dalam setiap laporan untuk menghadirkan berita yang utuh dan mendalam.
            </h6>
          </div>

          {/* ===== CHAT WHATSAPP ===== */}
          <div className="w-full px-5 py-15 border-b border-zinc-300">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
                  Ada yang mau kamu suarakan?
                  <br className="hidden md:block" />
                  Kirim laporannya di sini.
                </h1>

                <button className="flex items-center justify-center gap-2 px-10 py-3 rounded-lg bg-[#1785D9] hover:bg-[#1472BC] text-white shadow-md hover:shadow-lg text-sm font-medium">
                  <FaWhatsapp className="text-lg" />
                  Chat Sekarang
                </button>
              </div>

              <div className="flex justify-center md:justify-end">
                <img
                  src="/assets/Image/chat.png"
                  alt="chat"
                  className="w-[230px] sm:w-[280px] md:w-[350px] lg:w-[400px]"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ================== BERITA TERBARU ===================== */}
          {/* ========================================================= */}
          <div className="w-full px-6 py-12 mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Berita Terbaru</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beritaList.map((news, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg border cursor-pointer transition hover:opacity-90 ${
                    darkMode ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-300"
                  }`}
                >
                  <img src={news.image} className="w-full h-48 object-cover" />

                  <div className="p-4">
                    <span className="text-xs text-blue-400">
                      {news.category}
                    </span>

                    <h2 className="text-lg font-semibold mt-1 line-clamp-2">
                      {news.title}
                    </h2>

                    {news.date && (
                      <div className="flex items-center text-sm text-gray-400 mt-1 gap-2">
                        <FiCalendar /> {news.date}
                      </div>
                    )}

                    {news.location && (
                      <div className="flex items-center text-sm text-gray-400 gap-2 mt-1">
                        <FiMapPin /> {news.location}
                      </div>
                    )}

                    <p className="text-sm mt-2 text-gray-500 line-clamp-3">
                      {news.desc}
                    </p>

                    <div className="flex justify-between items-center border-t mt-3 pt-3 text-gray-600 select-none">
                      <button className="flex items-center gap-2 hover:text-blue-600">
                        <FiHeart /> Suka
                      </button>

                      <button className="flex items-center gap-2 hover:text-blue-600">
                        <FiMessageCircle /> Komentar
                      </button>

                      <button className="flex items-center gap-2 hover:text-blue-600">
                        <FiBookmark /> Simpan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ================= END SECTION BERITA ================= */}
        </section>
      </div>
    </>
  );
}

export default App;
