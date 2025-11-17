import { FiInstagram, FiLinkedin, FiFacebook, FiX } from "react-icons/fi";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`a
        w-full pt-14 transition-all duration-300 border-t
        ${
          darkMode
            ? "bg-zinc-900 text-white border-zinc-700"
            : "bg-white text-black border-zinc-300"
        }
      `}
    >
      <div
        className="
        max-w-7xl mx-auto px-10 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 
        gap-10 pb-12
      "
      >
        {/* Kolom kiri */}
        <div className="col-span-4">
          {/* <h1 className="text-3xl font-bold text-[#1785D9]">Kabarin.</h1> */}
          <img  src="/assets/Image/logo.png" alt="logo" className="max-w-[180px]" />
          <p className="mt-5 text-sm leading-relaxed opacity-85 max-w-md">
            Kami mengutamakan integritas dalam setiap laporan untuk menghadirkan
            berita yang utuh dan mendalam.
          </p>

          {/* Sosial Media */}
          <div className="flex gap-4 mt-7 text-xl cursor-pointer">
            <FiInstagram className="hover:opacity-70 transition" />
            <FiLinkedin className="hover:opacity-70 transition" />
            <FiFacebook className="hover:opacity-70 transition" />
            <FiX className="hover:opacity-70 transition" />
          </div>
        </div>

        {/* Kolom tengah */}
        <div className="col-span-2">
          <h3 className="font-semibold text-lg mb-4">Kabarin</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Syarat dan Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Laporan Kendala
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom kanan */}
        <div className="col-span-2">
          <h3 className="font-semibold text-lg mb-4">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li>adminkabarin@gmail.com</li>
            <li>+6281902100989</li>
          </ul>
        </div>
      </div>

      {/* Bawah Footer */}
      <div
        className={`text-center text-xs py-4 ${
          darkMode ? "bg-zinc-800" : "bg-zinc-100"
        }`}
      >
        © 2025 Neha Sabila Nazmira
      </div>
    </footer>
  );
};

export default Footer;
