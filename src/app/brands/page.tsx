import Link from "next/link";
import { mobileBrands } from "@/data/mobileModels";
import Image from "next/image";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ff] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Select Your Mobile Brand
          </h1>
          <p className="mt-3 text-gray-600">
            Choose your phone brand to customize your mobile cover.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mobileBrands.map((item) => (
            <Link
              key={item.brand}
              href={`/brands/${item.brand.toLowerCase()}`}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition group text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-3xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                <Image
                    src={item.logo}
                    alt={item.brand}
                    width={70}
                    height={70}
                    className="object-contain"
                />
                </div>

              <h2 className="mt-4 font-bold text-gray-900">
                {item.brand}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {item.models.length} Models
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}