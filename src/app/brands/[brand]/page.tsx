import Link from "next/link";
import { notFound } from "next/navigation";
import { mobileBrands } from "@/data/mobileModels";
import Image from "next/image";

type Props = {
  params: Promise<{
    brand: string;
  }>;
};

export default async function BrandModelsPage({ params }: Props) {
  const { brand } = await params;

  const brandData = mobileBrands.find(
    (item) => item.brand.toLowerCase() === brand.toLowerCase()
  );

  if (!brandData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f3ff] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            {brandData.brand} Mobile Covers
          </h1>

          <p className="mt-2 text-gray-500">
            Select your model
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brandData.models.map((model) => (
            <Link
                key={model.name}
                href={`/customize?brand=${encodeURIComponent(
                    brandData.brand
                )}&model=${encodeURIComponent(model.name)}`}
                className="bg-white rounded-3xl p-5 shadow hover:shadow-xl transition"
                >
                <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center">
                    <Image
                    src={model.image}
                    alt={model.name}
                    width={170}
                    height={170}
                    className="object-contain group-hover:scale-105 transition"
                    />
                </div>

                <h2 className="mt-5 text-center font-semibold text-gray-900">
                    {model.name}
                </h2>

                <button className="mt-4 w-full rounded-xl bg-purple-600 text-white py-3">
                    Customize
                </button>
                </Link>
          ))}
        </div>
      </div>
    </main>
  );
}