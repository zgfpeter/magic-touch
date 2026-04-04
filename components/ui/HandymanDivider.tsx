export default function HandymanDivider() {
  return (
    <div className="w-full bg-white flex flex-col z-10 -mb-1">
      {/* The Orange Tape Measure */}
      <div className="w-full h-5 md:h-8 bg-[#e8b261] relative overflow-hidden border-y-1 border-slate-800">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            {/* Creates a repeating pattern of ruler tick marks */}
            <pattern
              id="ruler"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#0f172a"
                strokeWidth="4"
              />
              <line
                x1="25"
                y1="0"
                x2="25"
                y2="15"
                stroke="#0f172a"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="0"
                x2="50"
                y2="25"
                stroke="#0f172a"
                strokeWidth="3"
              />
              <line
                x1="75"
                y1="0"
                x2="75"
                y2="15"
                stroke="#0f172a"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ruler)" />
        </svg>
      </div>
    </div>
  );
}
