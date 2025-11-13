import DataImage from "./data";
import { FiUsers, FiFileText, FiUserCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// function app untuk darkmode
function App({ darkMode }) {
  return (
    <>
      {/* Container utama halaman */}
      <div
        className={`min-h-screen px-10 py-25 transition-colors duration-300 ${
          darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
    <div className="relative mb-28">  {/* ← TAMBAH relative + ruang bawah */}

    <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
      {/* Kolom kiri */}
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

        <button
          className="px-10 py-2 my-5 mb-20 mx-5 rounded-lg text-sm font-medium transition bg-[#1785D9] hover:bg-[#1472BC] text-white"
        >
          Get Started
        </button>
        </div>

          {/* Kolom kanan */}
          <img
            src=".\public\assets\Image\heroImage.png"
            alt="Hero Image"
            className="w-full max-w-[500px] ml-10 justify-self-center"
          />
        </div>

        {/* ⬇️ BRAND BAR DITEMPATKAN DI SINI */}
       {/* ⬇️ BRAND BAR BERGERAK */}
      <div
        className={`
          w-full py-6 md:py-9 overflow-hidden 
          absolute left-0 right-0 mx-auto bg-[#b3c6d5] text-white font-semibold tracking-wide
          rounded-lg
        `}
        style={{
          bottom: "-10px",
          zIndex: 20,
        }}
      >
        <div className="flex gap-16 md:gap-24 animate-scroll whitespace-nowrap">
          {[
            "Berbasis Fakta",
            "Tanpa Rekayasa",
            "Verifikasi Berlapis",
            "Sumber Kredibel",
            "Liputan Independen",
            "Transparansi Data",
            "Integritas Jurnalisme",
          ].map((item, index) => (
            <span key={index}>{item}</span>
          ))}

          {/* DUPLIKASI untuk efek looping */}
          {[
            "Berbasis Fakta",
            "Tanpa Rekayasa",
            "Verifikasi Berlapis",
            "Sumber Kredibel",
            "Liputan Independen",
            "Transparansi Data",
            "Integritas Jurnalisme",
          ].map((item, index) => (
            <span key={`copy-${index}`}>{item}</span>
          ))}
        </div>
      </div>


      </div>

        <section>
        {/* SECTION STATISTIK */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-24 px-6 md:px-0">

        {[
          { icon: <FiUsers className="text-3xl mb-4 text-[#1785D9]" />, angka: "1.2 Juta+", teks: "Pembaca Aktif" },
          { icon: <FiFileText className="text-3xl mb-4 text-[#1785D9]" />, angka: "15 Ribu+", teks: "Artikel Terbit Setiap Bulan" },
          { icon: <FiUserCheck className="text-3xl mb-4 text-[#1785D9]" />, angka: "300+", teks: "Jurnalis & Kontributor Terverifikasi" },
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
            {/* Ikon */}
            <div className="flex justify-center">{item.icon}</div>

            {/* Angka */}
            <h3
              className={`
                text-4xl font-extrabold mb-2 transition
                group-hover:text-[#1785D9]
              `}
            >
              {item.angka}
            </h3>

            {/* Teks */}
            <p
              className={`
                text-sm tracking-wide transition
                ${darkMode ? "text-zinc-400" : "text-zinc-600"}
                group-hover:text-[#1785D9]
              `}
            >
              {item.teks}
            </p>
          </div>
        ))}
        </div>

         {/* SECTION KEBENARAN */}
         <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-14 bg-[#1785D9] text-white text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-3 tracking-wide">
            Berpihak pada Kebenaran, Mengutamakan Data.
          </h2>
          <h6 className="text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
            Kami mengutamakan integritas dalam setiap laporan untuk menghadirkan berita yang utuh dan mendalam.
          </h6>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 mt-30 items-center gap-10 mb-5">
          <div>
            <h1 className="text-4xl font-bold mb-4 leading-snug px-5 ml-20 pr-0">Ada yang mau kamu suarakan? Kirim laporannya di sini.</h1>
            <button
            className="flex items-center justify-center gap-2 px-12 py-3 my-5 mx-5 ml-25 rounded-lg text-sm font-medium transition bg-[#1785D9] hover:bg-[#1472BC] text-white shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="text-lg" />
            Chat Sekarang
          </button>
          </div>

          {/* Kolom kanan berisi gambar hero */}
          <img
            src=".\public\assets\Image\chat.png"
            alt="Chat Image"
            className="w-full max-w-[350px]  ml-10 justify-self-center"
          />
        </div>
        </section>
      </div>
    </>
  );
}

export default App;
