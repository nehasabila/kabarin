import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiBookmark,
  FiAlertTriangle,
  FiSend,
} from "react-icons/fi";

function News({ darkMode }) {
  const [filter, setFilter] = useState("terbaru");
  const navigate = useNavigate();

  const newsData = [
    {
      id: 1,
      title: "Teknologi AI Meningkat Pesat di Tahun 2025",
      category: "Teknologi",
      date: "10 Nov 2025",
      image: "https://picsum.photos/600/400?random=1",
      likes: 230,
      views: 520,
    },
    {
      id: 2,
      title: "Pendidikan Digital Semakin Diperluas",
      category: "Edukasi",
      date: "9 Nov 2025",
      image: "https://picsum.photos/600/400?random=2",
      likes: 180,
      views: 400,
    },
    {
      id: 3,
      title: "Tim Nasional Berhasil Menang 3-0",
      category: "Olahraga",
      date: "8 Nov 2025",
      image: "https://picsum.photos/600/400?random=3",
      likes: 250,
      views: 800,
    },
    {
      id: 4,
      title: "Ekonomi Indonesia Mulai Stabil",
      category: "Ekonomi",
      date: "7 Nov 2025",
      image: "https://picsum.photos/600/400?random=4",
      likes: 160,
      views: 300,
    },
    {
      id: 5,
      title: "Industri Hiburan Kembali Bergairah",
      category: "Hiburan",
      date: "6 Nov 2025",
      image: "https://picsum.photos/600/400?random=5",
      likes: 200,
      views: 600,
    },
  ];

  const trendingNews = [
    { id: 1, title: "Kebijakan Baru Pemerintah Soal Pendidikan 2025" },
    { id: 2, title: "Harga Beras Naik, Ekonomi Rumah Tangga Terdampak" },
    { id: 3, title: "AI Generasi Baru Masuk Dunia Kerja Lebih Cepat" },
    { id: 4, title: "Aplikasi Media Sosial Lokal Tembus 10 Juta Pengguna" },
    { id: 5, title: "Fenomena Cuaca Ekstrem Diprediksi Berlanjut" },
  ];

  // Urutkan berita sesuai filter
  const sortedNews = [...newsData].sort((a, b) => {
    if (filter === "populer") return b.views - a.views;
    if (filter === "disukai") return b.likes - a.likes;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div
      className={`${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      } min-h-screen px-10 py-25`}
    >
      {/* NAVBAR KATEGORI */}
      <div className="w-full border-b border-gray-600 pb-3 mb-6">
        <ul className="flex gap-8 text-sm font-medium overflow-x-auto whitespace-nowrap">
          <li className="text-blue-400 cursor-pointer">Semua</li>
          <li className="cursor-pointer hover:text-blue-400">Teknologi</li>
          <li className="cursor-pointer hover:text-blue-400">Edukasi</li>
          <li className="cursor-pointer hover:text-blue-400">Olahraga</li>
          <li className="cursor-pointer hover:text-blue-400">Nasional</li>
          <li className="cursor-pointer hover:text-blue-400">Internasional</li>
          <li className="cursor-pointer hover:text-blue-400">Hiburan</li>
          <li className="cursor-pointer hover:text-blue-400">Ekonomi</li>
          <li className="cursor-pointer hover:text-blue-400">Kesehatan</li>
          <li className="cursor-pointer hover:text-blue-400">Politik</li>
          <li className="cursor-pointer hover:text-blue-400">Wisata</li>
          <li className="cursor-pointer hover:text-blue-400">Sains</li>
          <li className="cursor-pointer hover:text-blue-400">Otomotif</li>
        </ul>
      </div>

      {/* GRID KONTEN */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 border-b-2 pb-15 ${
          darkMode ? "border-zinc-700" : "border-zinc-300"
        }`}
      >
        {/* BERITA UTAMA */}
        <div
          onClick={() => navigate(`/news/${newsData[0].id}`)}
          className={`md:col-span-2 rounded-lg overflow-hidden border shadow-lg cursor-pointer hover:opacity-90 transition ${
            darkMode ? "border-zinc-700" : "border-zinc-300"
          }`}
        >
          <img
            src={newsData[0].image}
            className="w-full h-[350px] object-cover"
            alt=""
          />
          <div className="p-4">
            <span className="text-xs text-blue-400">{newsData[0].category}</span>
            <h2 className="text-lg font-semibold mt-1">{newsData[0].title}</h2>
            <p className="text-sm text-gray-400">{newsData[0].date}</p>
            <p className="text-sm text-gray-500 mt-2">
              Teknologi AI semakin berkembang pesat dengan berbagai inovasi baru
              yang mempengaruhi industri global...
            </p>
          </div>
        </div>

        {/* 4 BERITA KECIL */}
        <div className="grid grid-cols-2 gap-4">
          {newsData.slice(1).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/news/${item.id}`)}
              className={`rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition border ${
                darkMode ? "border-zinc-700" : "border-zinc-300"
              }`}
            >
              <img
                src={item.image}
                className="w-full h-40 object-cover"
                alt=""
              />
              <div className="p-2">
                <span className="text-[11px] text-blue-400">
                  {item.category}
                </span>
                <h2 className="text-sm font-semibold leading-tight mt-1">
                  {item.title}
                </h2>
                <p className="text-[11px] text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GRID BERITA BAWAH */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-25 pt-7">
        {/* SIDEBAR KIRI */}
        <div className="col-span-3 md:col-span-3 mt-4">
          <SidebarBox
            darkMode={darkMode}
            icon={<FiAlertTriangle />}
            title="Laporkan Berita Hoaks"
            desc="Temukan berita yang terasa mencurigakan? Bantu kami menjaga informasi tetap bersih dan akurat."
            buttonText="Laporkan Sekarang"
          />

          <SidebarBox
            darkMode={darkMode}
            icon={<FiSend />}
            title="Kirim Berita & Informasi"
            desc="Punya laporan, opini publik, atau kejadian penting di sekitar kamu? Sampaikan ke redaksi kami."
            buttonText="Kirim Berita"
          />
        </div>

        {/* DAFTAR BERITA */}
        <div className="md:col-span-6 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Daftar Berita</h2>
            <div className="flex gap-2">
              {[
                { label: "Terbaru", value: "terbaru" },
                { label: "Paling Populer", value: "populer" },
                { label: "Paling Disukai", value: "disukai" },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`px-3 py-1 text-sm rounded-full transition ${
                    filter === btn.value
                      ? "bg-[#1785D9] text-white"
                      : darkMode
                      ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {sortedNews.map((item) => (
            <NewsCard key={item.id} item={item} darkMode={darkMode} navigate={navigate} />
          ))}
        </div>

        {/* TRENDING NEWS */}
        <div className="col-span-3 md:col-span-3 mt-11">
          <TrendingList darkMode={darkMode} trendingNews={trendingNews} />
        </div>
      </div>
    </div>
  );
}

/* === COMPONENTS === */

function SidebarBox({ darkMode, icon, title, desc, buttonText }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md border transition-colors duration-300 mt-7 ${
        darkMode
          ? "bg-zinc-900 border-zinc-700 text-white"
          : "bg-white border-zinc-200 text-black"
      }`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p
        className={`text-sm mb-4 ${
          darkMode ? "text-zinc-400" : "text-zinc-600"
        }`}
      >
        {desc}
      </p>

      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition
          ${
            darkMode
              ? "border-zinc-600 text-zinc-300 bg-transparent hover:border-blue-500 hover:text-blue-400"
              : "bg-white border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-400"
          }`}
      >
        {icon}
        {buttonText}
      </button>
    </div>
  );
}

function NewsCard({ item, darkMode, navigate }) {
  const [likes, setLikes] = useState(item.likes);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() === "") return;
    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  return (
    <div
      onClick={() => navigate(`/news/${item.id}`)}
      className={`border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-95 transition ${
        darkMode
          ? "bg-zinc-900 border-zinc-700 text-white"
          : "bg-white border-zinc-200 text-black"
      }`}
    >
      <img src={item.image} className="w-full h-[200px] object-cover" alt="" />
      <div className="p-4">
        <span className="text-xs text-blue-400">{item.category}</span>
        <h2 className="text-lg font-semibold mt-1">{item.title}</h2>
        <p className="text-sm text-gray-400">{item.date}</p>

        <p className="text-sm text-gray-500 mt-2">
          Teknologi AI semakin berkembang pesat dengan berbagai inovasi baru...
        </p>

        {/* LIKE / KOMEN / SHARE / SIMPAN */}
        <div
          className="flex justify-between text-gray-600 text-sm mt-3 border-t pt-3 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition ${
              liked ? "text-red-500" : ""
            }`}
          >
            <FiHeart className="text-lg" />
            <span>{likes}</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition"
          >
            <FiMessageCircle className="text-lg" />
            <span>{comments.length}</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition">
            <FiShare2 className="text-lg" />
            <span>Bagikan</span>
          </button>

          <button
            onClick={() => setSaved(!saved)}
            className={`flex items-center gap-2 px-3 py-2 transition ${
              saved ? "text-blue-500" : "hover:text-blue-600"
            }`}
          >
            <FiBookmark className="text-lg" />
            <span>{saved ? "Disimpan" : "Simpan"}</span>
          </button>
        </div>

        {/* KOMENTAR */}
        {showComments && (
          <div className="mt-4 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleCommentSubmit} className="flex gap-3 mb-3">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Tulis komentar..."
                className="flex-1 border rounded-full px-4 py-2 text-sm outline-none bg-gray-100"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
              >
                Kirim
              </button>
            </form>

            <div className="space-y-2">
              {comments.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <img
                    src="https://i.pravatar.cc/30?img=2"
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-sm text-gray-500">{c}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TrendingList({ darkMode, trendingNews }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md border ${
        darkMode
          ? "bg-zinc-900 border-zinc-700 text-white"
          : "bg-white border-zinc-200 text-black"
      }`}
    >
      <h3 className="text-lg font-bold pb-3">Trending Hari Ini</h3>
      <ul className="space-y-3">
        {trendingNews.map((item, index) => (
          <li
            key={item.id}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <span className="text-blue-500 font-semibold text-lg leading-none">
              {index + 1}.
            </span>
            <p className="text-sm leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
