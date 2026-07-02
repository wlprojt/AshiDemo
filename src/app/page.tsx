import { link } from "fs";
import { ShoppingCart, Search, Upload, Type, Image, Sparkles } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Custom Mobile Cover",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=600",
    link: "/brands"
  },
  {
    name: "Photo Mug",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600",
    link: "/"
  },
  {
    name: "Personalized Pillow",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600",
    link: "/"
  },
  {
    name: "Gift Frame",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600",
    link: "/"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ff] text-gray-900">
      

      <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-5">
            <Sparkles size={18} />
            Personalized Gift Store
          </span>

          <h2 className="text-5xl font-extrabold leading-tight">
            Design Your Own
            <span className="text-purple-700"> Mobile Covers & Gifts</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Upload photo, add text, customize design and order personalized
            gifts online.
          </p>

          <Link
            href="/customize"
          >
            <button className="mt-7 bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg">
              Start Designing
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-xl">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[28px] h-[360px] flex items-center justify-center text-white">
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl text-center">
              <Image className="mx-auto mb-4" size={60} />
              <h3 className="text-3xl font-bold">Your Photo Here</h3>
              <p className="mt-2">Customize like Canva</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 pb-16">
        <h3 className="text-3xl font-bold mb-8">Popular Products</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover rounded-2xl"
              />

              <h4 className="font-bold mt-4 text-lg">{product.name}</h4>
              <p className="text-purple-700 font-bold mt-1">{product.price}</p>

              <Link href={product.link}>
              <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded-xl">
                Customize Now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}