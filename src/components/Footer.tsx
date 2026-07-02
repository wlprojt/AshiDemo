import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1233] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">

        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white">
            Ashi Gifts
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Create unforgettable memories with personalized gifts.
            Design custom mobile covers, mugs, pillows, photo
            frames, t-shirts, keychains and more.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Shop
          </h3>

          <ul className="space-y-3">
            <li><a href="#">Mobile Covers</a></li>
            <li><a href="#">Photo Mugs</a></li>
            <li><a href="#">Photo Frames</a></li>
            <li><a href="#">T-Shirts</a></li>
            <li><a href="#">Keychains</a></li>
            <li><a href="#">Gift Hampers</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Company
          </h3>

          <ul className="space-y-3">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <Phone className="text-purple-400 mt-1" size={18} />
              <div>
                <p>+91 93295 12051</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="text-purple-400 mt-1" size={18} />
              <div>
                <p>support@ashigifts.com</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-purple-400 mt-1" size={18} />
              <div>
                <p>
                  JD Complex, Hari Om Market,
                  Teen Patti Chowk,
                  Jabalpur (M.P.)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-white text-xl font-bold">
              Stay Updated
            </h3>

            <p className="text-gray-400 mt-2">
              Subscribe for exclusive offers and new gift collections.
            </p>
          </div>

          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black rounded-l-xl px-5 py-3 w-full lg:w-80 outline-none"
            />

            <button className="bg-purple-600 hover:bg-purple-700 px-7 rounded-r-xl font-semibold text-white">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ashi Gifts. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </div>

        </div>
      </div>
    </footer>
  );
}