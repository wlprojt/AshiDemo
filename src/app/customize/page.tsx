"use client";

import { useRef, useState } from "react";
import { Upload, ImageIcon, Trash2, ArrowUp,ArrowDown, ArrowLeft, ArrowRight, } from "lucide-react";
import { Rnd } from "react-rnd";
import {
  Poppins,
  Pacifico,
  Lobster,
  Dancing_Script,
  Bebas_Neue,
  Playfair_Display,
  Anton,
} from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const anton = Anton({ subsets: ["latin"], weight: "400" });

const fonts = {
  Poppins: poppins.className,
  Pacifico: pacifico.className,
  Lobster: lobster.className,
  Dancing: dancing.className,
  Bebas: bebas.className,
  Playfair: playfair.className,
  Anton: anton.className,
};

export default function CustomizePage() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [customText, setCustomText] = useState("");
  const [selectedFont, setSelectedFont] = useState("Poppins");
  const [textColor, setTextColor] = useState("#7c3aed");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(32);

  const [imageSize, setImageSize] = useState({
    width: 220,
    height: 220,
    x: 35,
    y: 150,
  });

  const [textBox, setTextBox] = useState({
    width: 230,
    height: 70,
    x: 35,
    y: 350,
  });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto(URL.createObjectURL(file));
  };

  return (
    <main className="min-h-screen bg-[#f7f3ff] text-gray-700 pb-24 xl:pb-0">
      <section className="max-w-7xl mx-auto px-3 md:px-6 py-4 md:py-10 grid grid-cols-1 xl:grid-cols-[280px_1fr_320px] gap-4 md:gap-6">
        {/* Tools */}
        <aside className="order-2 xl:order-1 bg-white rounded-3xl p-4 md:p-5 shadow-sm">
          <h2 className="text-xl font-bold mb-5 text-gray-900">
            Design Tools
          </h2>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />

          <button
            onClick={() => fileRef.current?.click()}
            className="w-full bg-purple-50 text-purple-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <Upload size={18} />
            Upload Photo
          </button>

          <div className="mt-4">
  <h3 className="font-semibold text-sm mb-3">Image Size</h3>

  <div className="grid grid-cols-2 gap-3">
    <button
      onClick={() =>
        setImageSize((prev) => ({
          ...prev,
          width: prev.width + 10,
        }))
      }
      className="bg-purple-600 text-white rounded-xl py-2"
    >
      W+
    </button>

    <button
      onClick={() =>
        setImageSize((prev) => ({
          ...prev,
          width: Math.max(50, prev.width - 10),
        }))
      }
      className="bg-purple-600 text-white rounded-xl py-2"
    >
      W-
    </button>

    <button
      onClick={() =>
        setImageSize((prev) => ({
          ...prev,
          height: prev.height + 10,
        }))
      }
      className="bg-purple-600 text-white rounded-xl py-2"
    >
      H+
    </button>

    <button
      onClick={() =>
        setImageSize((prev) => ({
          ...prev,
          height: Math.max(50, prev.height - 10),
        }))
      }
      className="bg-purple-600 text-white rounded-xl py-2"
    >
      H-
    </button>
  </div>

  <div className="mt-4 text-xs text-gray-500 space-y-1">
    <p>Width: {imageSize.width}px</p>
    <p>Height: {imageSize.height}px</p>
  </div>
</div>

          <div className="mt-5">
            <label className="font-semibold text-sm">Add Text</label>
            <input
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="mt-2 w-full border rounded-xl px-4 py-3 outline-none"
              placeholder="Enter text"
            />
          </div>

          <div className="mt-5">
            <label className="font-semibold text-sm mb-2 block">
              Font Family
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {Object.entries(fonts).map(([name, className]) => (
                <button
                  key={name}
                  onClick={() => setSelectedFont(name)}
                  className={`${className} p-3 rounded-xl border text-left transition ${
                    selectedFont === name
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label className="font-semibold text-sm">
              Font Size: {fontSize}px
            </label>
            <input
              type="range"
              min={14}
              max={80}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div>
              <label className="font-semibold text-sm">Text Color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="mt-2 w-full h-12"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Background</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="mt-2 w-full h-12"
              />
            </div>
          </div>

          <button
  onClick={() => {
    setPhoto(null);
    setCustomText("");

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }}
  className="mt-6 w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
>
  <Trash2 size={18} />
  Clear Design
</button>
        </aside>

        {/* Preview */}
        <div className="order-1 xl:order-2 bg-[#eef0ff] rounded-3xl p-3 sm:p-6 xl:p-8 flex items-center justify-center overflow-hidden min-h-[430px] sm:min-h-[620px] xl:min-h-[680px]">
          <div className="origin-center scale-[0.62] min-[390px]:scale-[0.68] min-[430px]:scale-75 sm:scale-90 md:scale-100 transition">
            <div className="relative w-[310px] h-[620px] rounded-[46px] bg-white shadow-2xl border border-gray-300 overflow-hidden">
              <div className="absolute -left-[3px] top-[150px] w-[5px] h-[48px] bg-gray-300 rounded-l z-50" />
              <div className="absolute -left-[3px] top-[220px] w-[5px] h-[80px] bg-gray-300 rounded-l z-50" />
              <div className="absolute -right-[3px] top-[220px] w-[5px] h-[90px] bg-gray-300 rounded-r z-50" />

              <div
                className="absolute overflow-hidden"
                style={{
                  left: 4,
                  top: 4,
                  width: 299,
                  height: 610,
                  borderRadius: 40,
                  backgroundColor: bgColor,
                  zIndex: 10,
                }}
              >
                {!photo && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-600 text-center px-6 bg-white/40">
                    <ImageIcon size={54} />
                    <p className="mt-4 font-bold">Upload your photo</p>
                  </div>
                )}

                {photo && (
                  <Rnd
  size={imageSize}
  position={{ x: imageSize.x, y: imageSize.y }}
  bounds="parent"
  lockAspectRatio={false}
  enableResizing={{
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true,
    top: true,
    right: true,
    bottom: true,
    left: true,
  }}
  onResizeStop={(e, dir, ref, delta, pos) =>
    setImageSize({
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height),
      x: pos.x,
      y: pos.y,
    })
  }
>
  <img
    src={photo}
    alt="Uploaded"
    className="w-full h-full object-cover rounded-md"
  />
</Rnd>
                )}

                {customText && (
                  <Rnd
                    size={textBox}
                    position={{ x: textBox.x, y: textBox.y }}
                    bounds="parent"
                    style={{ zIndex: 30 }}
                    onDragStop={(e, d) =>
                      setTextBox({ ...textBox, x: d.x, y: d.y })
                    }
                    onResizeStop={(e, dir, ref, delta, pos) =>
                      setTextBox({
                        width: parseInt(ref.style.width),
                        height: parseInt(ref.style.height),
                        x: pos.x,
                        y: pos.y,
                      })
                    }
                  >
                    <div
                      style={{ color: textColor, fontSize }}
                      className={`${
                        fonts[selectedFont as keyof typeof fonts]
                      } w-full h-full flex items-center justify-center font-bold text-center cursor-move`}
                    >
                      {customText}
                    </div>
                  </Rnd>
                )}
              </div>

              {/* Camera bump */}
              <div className="absolute top-[24px] left-[26px] w-[258px] h-[88px] bg-black rounded-[44px] z-50 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-700" />

                <div className="absolute left-[18px] top-[11px] w-[66px] h-[66px] rounded-full border-2 border-white/80 bg-black flex items-center justify-center">
                  <div className="w-[48px] h-[48px] rounded-full border border-white/70 bg-black" />
                </div>

                <div className="absolute left-[176px] top-[34px] w-[20px] h-[20px] rounded-full border-2 border-white bg-black" />

                <div className="absolute right-[24px] top-[30px] w-[30px] h-[30px] rounded-full border-2 border-white bg-white/80" />
              </div>

              <div className="absolute inset-0 rounded-[46px] border border-gray-300 pointer-events-none z-[60]" />
            </div>
          </div>
        </div>

        {/* Summary desktop */}
        <aside className="order-3 hidden xl:block bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl text-gray-900 font-bold mb-5">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Brand</span>
              <b>Apple</b>
            </div>

            <div className="flex justify-between">
              <span>Model</span>
              <b>iPhone Air</b>
            </div>

            <div className="flex justify-between">
              <span>Print Type</span>
              <b>Custom Print</b>
            </div>

            <div className="flex justify-between">
              <span>Base Price</span>
              <b>₹299</b>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <b>₹50</b>
            </div>

            <hr />

            <div className="flex justify-between text-lg">
              <span>Total</span>
              <b>₹349</b>
            </div>
          </div>

          <button className="mt-6 w-full bg-purple-700 text-white py-4 rounded-2xl font-bold">
            Add to Cart
          </button>

          <button className="mt-3 w-full bg-gray-900 text-white py-4 rounded-2xl font-bold">
            Buy Now
          </button>
        </aside>
      </section>

      {/* Mobile bottom action bar */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-3 z-[100]">
        <button className="flex-1 bg-purple-700 text-white rounded-xl py-3 font-bold">
          Add to Cart
        </button>

        <button className="flex-1 bg-gray-900 text-white rounded-xl py-3 font-bold">
          Buy Now
        </button>
      </div>
    </main>
  );
}


