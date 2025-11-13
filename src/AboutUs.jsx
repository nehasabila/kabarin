import { FiUsers, FiTarget, FiBookOpen, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function AboutUs({ darkMode }) {
  return (
    <div
      className={`min-h-screen px-8 md:px-20 py-30 transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* HEADER SECTION */}
      <div className="relative text-center mb-24">
        <div
          className={`absolute inset-0 -z-10 bg-gradient from-[#1785D9]/20 to-transparent ${
            darkMode ? "opacity-30" : "opacity-60"
          }`}
        ></div>

        <h1 className="text-5xl font-extrabold mb-4 text-[#1785D9] drop-shadow-lg">
          Tentang Kami
        </h1>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Kami adalah platform berita digital yang berkomitmen menghadirkan
          informasi akurat, cepat, dan terpercaya untuk seluruh masyarakat
          Indonesia.
        </p>
      </div>

      {/* SECTION 1 — VISI MISI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold mb-3 text-[#1785D9] flex items-center gap-2">
            <FiTarget className="text-[#1785D9] text-3xl" /> Visi & Misi Kami
          </h2>
          <p
            className={`leading-relaxed text-lg ${
              darkMode ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Kami percaya bahwa informasi adalah kekuatan. Misi kami adalah
            menyajikan berita yang berimbang dan faktual dengan gaya yang mudah
            dipahami, tanpa clickbait, dan tetap menjunjung tinggi etika
            jurnalistik.
          </p>
        </div>

        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Tim Kami"
            className="rounded-2xl shadow-lg w-full object-cover h-[350px] transform group-hover:scale-[1.03] transition duration-500"
          />
          <div className="absolute inset-0 rounded-2xl bg-[#1785D9]/20 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </div>

      {/* SECTION 2 — NILAI INTI */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-10 text-[#1785D9]">
          Nilai Inti Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <FiUsers className="text-4xl text-[#1785D9]" />,
              title: "Integritas",
              desc: "Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap berita yang kami sajikan.",
            },
            {
              icon: <FiBookOpen className="text-4xl text-[#1785D9]" />,
              title: "Akurasi",
              desc: "Setiap informasi diverifikasi dengan ketat agar pembaca mendapatkan berita yang benar dan akurat.",
            },
            {
              icon: <FiGlobe className="text-4xl text-[#1785D9]" />,
              title: "Transparansi",
              desc: "Kami terbuka terhadap kritik dan terus berusaha menjaga kepercayaan publik melalui transparansi.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border text-center transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-zinc-800/60 border-zinc-700"
                  : "bg-white/80 border-zinc-200"
              }`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1785D9] transition">
                {item.title}
              </h3>
              <p
                className={`text-sm ${
                  darkMode ? "text-zinc-400" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3 — TUJUAN */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-[#1785D9] mb-4">
          Apa yang Kami Perjuangkan
        </h2>
        <p
          className={`leading-relaxed text-lg ${
            darkMode ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Kami ingin menjadi media yang dapat dipercaya dan selalu beradaptasi
          dengan kemajuan zaman. Melalui inovasi digital, kami berupaya
          menyebarkan berita yang mencerahkan, bukan menyesatkan — karena
          masyarakat berhak mendapatkan kebenaran yang sesungguhnya.
        </p>
      </div>

      {/* SECTION 4 — CTA */}
      <div className="text-center mt-20">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-3 rounded-lg bg-[#1785D9] hover:bg-[#1472BC] text-white font-semibold shadow-md hover:shadow-xl transition"
        >
          <FaWhatsapp className="text-xl" />
          Hubungi Kami di WhatsApp
        </a>
        <p
          className={`mt-3 text-sm ${
            darkMode ? "text-zinc-500" : "text-gray-500"
          }`}
        >
          Tim kami siap membantu Anda setiap saat.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
