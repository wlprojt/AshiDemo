type Props = {
  children?: React.ReactNode;
};

export default function IphoneAirFrame({ children }: Props) {
  return (
    <div className="relative w-[310px] h-[620px] rounded-[46px] bg-white shadow-2xl border border-gray-300 overflow-hidden">
      {/* side buttons */}
      <div className="absolute -left-[3px] top-[150px] w-[5px] h-[48px] bg-gray-300 rounded-l" />
      <div className="absolute -left-[3px] top-[220px] w-[5px] h-[80px] bg-gray-300 rounded-l" />
      <div className="absolute -right-[3px] top-[220px] w-[5px] h-[90px] bg-gray-300 rounded-r" />

      {/* printable area */}
      <div className="absolute inset-[12px] rounded-[40px] overflow-hidden bg-white">
        {children}
      </div>

      {/* camera bump */}
      <div className="absolute top-[24px] left-[26px] w-[258px] h-[88px] bg-black rounded-[44px] z-50 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-700" />

        {/* main camera */}
        <div className="absolute left-[18px] top-[11px] w-[66px] h-[66px] rounded-full border-2 border-white/80 bg-black flex items-center justify-center">
          <div className="w-[48px] h-[48px] rounded-full border border-white/70 bg-black" />
        </div>

        {/* sensor */}
        <div className="absolute left-[176px] top-[34px] w-[20px] h-[20px] rounded-full border-2 border-white bg-black" />

        {/* flash */}
        <div className="absolute right-[24px] top-[24px] w-[42px] h-[42px] rounded-full border-2 border-white bg-white/80" />
      </div>

      {/* border overlay */}
      <div className="absolute inset-0 rounded-[46px] border-4 border-white/80 pointer-events-none z-[60]" />
    </div>
  );
}