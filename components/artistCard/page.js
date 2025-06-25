import Image from "next/image";
import { motion } from "framer-motion";

const ArtistCard = ({ artist, isExpanded, onClick }) => {
  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`relative group overflow-hidden tracking-widest shadow-4xl shadow-green rounded-3xl cursor-pointer transition-transform duration-500 ${
        isExpanded ? "scale-100 z-10" : "scale-105 hover:scale-105"
      }`}
      style={{
        width: "300px",
        height: "400px"
      }}
      layout
    >
      {/* Full Image */}
      <Image
        src={artist.image}
        fill
        alt={artist.name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
        className="object-cover group-hover:brightness-75 transition duration-300"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content on Image */}
      <div className="absolute bottom-0 p-8 text-slate-300 w-full z-10 space-y-4">
        <h2 className="text-2xl font-bold tracking-wider">{artist.name}</h2>
        <div className="flex gap-5">
          <p className="text-green-400 text-[12px] uppercase tracking-wide">
            {artist.category}
          </p>
          <p className="text-gray-300 text-[12px]">{artist.location}</p>
        </div>
        <div className="mt-4">
          <p className="text-white/60 text-sm">{artist.price}</p>
        </div>
      </div>

      {/* Extra Details when Expanded */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.45 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.95 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut", 
          }}
          layout
          className="absolute inset-0 flex items-center justify-center z-30"
        >
          <div className="w-[100%] h-[100%] max-w-[350px] bg-white/1 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl p-6 text-center space-y-4 text-white">
    
            {/* Name */}
            <h2 className="text-2xl font-bold text-white">{artist.name}</h2>
            <p className="text-green-400 text-sm tracking-wide">
              {artist.category}
            </p>

            {/* Details */}
            <div className="space-y-1 text-sm text-slate-200 mt-2">
              <p className="flex flex-wrap gap-2 mt-2">
                <span className="font-semibold text-green-500">Languages:</span>
                {artist.languages?.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-green-600/20 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </p>
              <p>
                <span className="font-semibold text-green-500">Location:</span>{" "}
                {artist.location}
              </p>
              <p>
                <span className="font-semibold text-green-500">Price:</span>{" "}
                {artist.price}
              </p>
              {artist.bio && (
                <p className="text-xs text-slate-300 italic mt-2">
                  {artist.bio}
                </p>
              )}
            </div>

            {/* CTA Button */}
            <a
              href={`mailto:${artist.email}`}
              className="inline-block w-full py-3 rounded-full bg-green-700 text-white/50 font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-transform"
            >
              Connect
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ArtistCard;
