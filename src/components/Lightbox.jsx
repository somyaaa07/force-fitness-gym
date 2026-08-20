import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (index === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onNext, onPrev]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full text-offwhite hover:text-primary hover:bg-white/5 transition-colors"
      >
        <X size={26} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-8 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-offwhite hover:text-primary hover:bg-white/5 transition-colors"
      >
        <ChevronLeft size={30} />
      </button>

      <div
        className="relative max-w-4xl w-full flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[75vh] rounded-lg overflow-hidden border border-primary/40 shadow-glow">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>
        <span className="font-rajdhani text-xs uppercase tracking-wide text-muted">
          {index + 1} / {images.length}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-offwhite hover:text-primary hover:bg-white/5 transition-colors"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}