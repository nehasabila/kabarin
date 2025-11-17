import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FiArrowLeft,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiBookmark,
} from "react-icons/fi";

const dummyNews = [
  {
    id: 1,
    title: "Teknologi AI Meningkat Pesat di Tahun 2025",
    category: "Teknologi",
    date: "10 Nov 2025",
    image: "https://picsum.photos/900/500?random=1",
    content:
      "Teknologi kecerdasan buatan (AI) mengalami peningkatan pesat sepanjang tahun 2025. Berbagai perusahaan global berlomba-lomba menghadirkan inovasi baru yang semakin mempermudah pekerjaan manusia. Perkembangan ini tidak hanya terjadi pada sektor industri, namun juga merambah ke layanan publik, pendidikan, kesehatan, hingga teknologi rumah tangga. " +
      "Salah satu tren terbesar adalah penggunaan AI generatif yang mampu menciptakan konten berkualitas tinggi dalam hitungan detik, mulai dari teks, gambar, hingga video realistis. Banyak perusahaan mengintegrasikan sistem tersebut untuk meningkatkan efisiensi kerja dan mengurangi biaya operasional. Di sisi lain, pemerintah di berbagai negara juga mulai menetapkan regulasi baru guna memastikan penggunaan AI tetap aman dan tidak disalahgunakan. " +
      "Pakar teknologi memprediksi bahwa dalam lima tahun ke depan, AI akan semakin menyatu dengan kehidupan sehari-hari dan menjadi bagian penting dalam pengambilan keputusan di berbagai sektor. Namun demikian, tantangan terkait etika, keamanan data, dan privasi tetap menjadi perhatian utama dunia.",
  },
  
  {
    id: 2,
    title: "Pendidikan Digital Semakin Diperluas",
    category: "Edukasi",
    date: "9 Nov 2025",
    image: "https://picsum.photos/900/500?random=2",
    content:
      "Pemerintah secara resmi mengumumkan perluasan program pendidikan digital di seluruh wilayah Indonesia. Program ini bertujuan untuk memastikan setiap siswa, baik di kota maupun di daerah terpencil, dapat mengakses materi pembelajaran berbasis teknologi dengan mudah. " +
      "Sejak peluncurannya dua tahun lalu, pendidikan digital telah membawa banyak manfaat. Guru dapat menggunakan platform interaktif untuk mengajar dengan lebih efektif, sementara siswa dapat mengakses materi belajar kapan saja dan dari mana saja. Pemerintah juga bekerja sama dengan berbagai perusahaan teknologi untuk menyediakan perangkat dan internet gratis kepada sekolah-sekolah yang masih belum memiliki fasilitas memadai. " +
      "Selain itu, kurikulum digital 2025 juga telah diperbarui untuk menyesuaikan kebutuhan era modern, termasuk pengenalan literasi digital, pemrograman dasar, dan keamanan siber. Para ahli pendidikan menyatakan bahwa langkah ini adalah investasi jangka panjang yang penting untuk meningkatkan kualitas sumber daya manusia Indonesia di masa depan.",
  },
  
  {
    id: 3,
    title: "Tim Nasional Berhasil Menang 3-0",
    category: "Olahraga",
    date: "8 Nov 2025",
    image: "https://picsum.photos/900/500?random=3",
    content:
      "Tim nasional kembali menunjukkan performa gemilang setelah berhasil mengalahkan lawannya dengan skor telak 3-0 dalam laga persahabatan internasional tadi malam. Pertandingan berlangsung sangat sengit di babak pertama, namun Timnas berhasil mendominasi permainan pada babak kedua. " +
      "Gol pertama dicetak melalui tendangan jarak jauh yang memukau dari lini tengah, disusul dengan aksi solo run dari pemain muda berbakat yang menambah keunggulan. Gol terakhir datang dari skema tendangan sudut yang berhasil dieksekusi dengan sempurna. " +
      "Pelatih kepala menyatakan bahwa kemenangan ini adalah hasil kerja keras seluruh tim dan menjadi modal penting menjelang pertandingan kualifikasi yang akan datang. Para penggemar pun sangat antusias melihat perkembangan positif ini, berharap Timnas dapat terus mempertahankan momentum untuk meraih prestasi lebih besar di ajang internasional.",
  },
  
];

export default function NewsDetail({ darkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsItem = dummyNews.find((n) => n.id === Number(id));

  // STATE KOMENTAR
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  const addComment = () => {
    if (inputComment.trim() === "") return;

    const newComment = {
      text: inputComment,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`,
    };

    setComments([...comments, newComment]);
    setInputComment("");
  };

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
          className="px-4 py-2 border rounded-md text-sm hover:bg-[#1785D9] hover:text-white transition"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-6 md:px-20 py-10 mt-15 transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-sm text-[#1785D9] hover:underline"
      >
        <FiArrowLeft /> Kembali ke Berita
      </button>

      {/* Info Berita */}
      <div className="mb-4">
        <span className="text-blue-500 text-xs uppercase">
          {newsItem.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold mt-1">
          {newsItem.title}
        </h1>
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
          <FiMessageCircle /> {comments.length}
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition">
          <FiShare2 /> Bagikan
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition">
          <FiBookmark /> Simpan
        </button>
      </div>

      {/* --- KOLOM KOMENTAR --- */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Komentar</h2>

        {/* Form Input Nama + Komentar */}
        <div className="space-y-3 mb-4">


          <div className="flex gap-2">
            <input
              type="text"
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
              placeholder="Tulis komentar..."
              className={`flex-1 px-4 py-2 rounded-md border ${
                darkMode
                  ? "bg-zinc-800 border-zinc-700 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
            <button
              onClick={addComment}
              className="px-4 py-2 bg-[#1785D9] text-white rounded-md hover:bg-[#1472BC] transition"
            >
              Kirim
            </button>
          </div>
        </div>

        {/* Daftar Komentar */}
        <div className="space-y-4">
          {comments.length === 0 && (
            <p className="text-sm text-gray-500">Belum ada komentar.</p>
          )}

          {comments.map((c, i) => (
            <div
              key={i}
              className={`flex gap-3 p-3 rounded-lg border ${
                darkMode
                  ? "border-zinc-700 bg-zinc-800"
                  : "border-gray-200 bg-gray-100"
              }`}
            >
              <img
                src={c.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">Jane Doe</p>
                  <span className="text-xs text-gray-400">{c.time}</span>
                </div>

                <p className="text-sm mt-1">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
