import { Expand } from "lucide-react";

export default function GalleryCard({ image, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg border border-white/10 hover:border-primary/60 transition-all duration-500 block w-full ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-400 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 w-11 h-11 rounded-full bg-primary/90 text-white flex items-center justify-center">
          <Expand size={18} />
        </span>
      </div>
      <span className="absolute bottom-3 left-3 font-rajdhani text-[10px] font-bold uppercase tracking-widest text-primary bg-black/60 px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {image.category}
      </span>
    </button>
  );
}
