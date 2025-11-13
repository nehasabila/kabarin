import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";

const dummyNews = [
  {
    id: 1,
    title: "Teknologi AI Meningkat Pesat di Tahun 2025",
    category: "Teknologi",
    date: "10 Nov 2025",
    image: "https://picsum.photos/900/500?random=1",
    content:
      "Teknologi AI terus berkembang pesat di tahun 2025 dengan berbagai inovasi besar yang mengubah cara industri bekerja. Perusahaan besar berlomba mengintegrasikan kecerdasan buatan untuk meningkatkan efisiensi, keamanan, dan kenyamanan pengguna. Pemerintah juga mulai mengatur kebijakan baru terkait etika AI serta dampaknya terhadap lapangan kerja dan privasi.",
  },
  {
    id: 2,
    title: "Pendidikan Digital Semakin Diperluas",
    category: "Edukasi",
    date: "9 Nov 2025",
    image: "https://picsum.photos/900/500?random=2",
    content:
      "Pemerintah memperluas akses pendidikan digital untuk seluruh wilayah Indonesia. Platform pembelajaran online kini lebih mudah dijangkau masyarakat berkat subsidi internet dan peningkatan infrastruktur jaringan.",
  },
  {
    id: 3,
    title: "Tim Nasional Berhasil Menang 3-0",
    category: "Olahraga",
    date: "8 Nov 2025",
    image: "https://picsum.photos/900/500?random=3",
    content:
      "Tim nasional berhasil meraih kemenangan telak 3-0 melawan lawan berat di laga persahabatan internasional. Pelatih menyebut hasil ini berkat kerja sama tim yang semakin solid dan dukungan penuh dari para suporter.",
  },
];

export default function NewsDetail({ darkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsItem = dummyNews.find((n) => n.id === Number(id));

  if (!newsItem) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Berita tidak ditemukan</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded-md text-sm hover:bg-blue-500 hover:text-white transition"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-6 md:px-20 py-10 transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-sm text-blue-500 hover:underline"
      >
        <FiArrowLeft /> Kembali ke Berita
      </button>

      {/* Info Berita */}
      <div className="mb-4">
        <span className="text-blue-500 text-xs uppercase">
          {newsItem.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold mt-1">{newsItem.title}</h1>
        <p className="text-sm text-gray-400 mt-1">{newsItem.date}</p>
      </div>

      
      {/* Gambar Utama */}
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full max-h-[300px] object-cover rounded-xl shadow-md mb-6"
      />

      {/* Konten */}
      <p
        className={`text-base leading-relaxed ${
          darkMode ? "text-zinc-300" : "text-gray-700"
        }`}
      >
        {newsItem.content}
      </p>

      {/* Bar Interaksi */}
      <div
        className={`flex items-center gap-6 mt-8 border-t pt-4 ${
          darkMode ? "border-zinc-700 text-zinc-400" : "border-gray-200 text-gray-600"
        }`}
      >
        <button className="flex items-center gap-2 hover:text-blue-500 transition">
          <FiHeart /> 122
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition">
          <FiMessageCircle /> 35
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition">
          <FiShare2 /> Bagikan
        </button>
      </div>
    </div>
  );
}
