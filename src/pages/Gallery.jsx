import { useMemo, useRef, useEffect, useState } from "react";
import { Camera, ArrowRight, Images, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";
import { galleryImages, galleryCategories } from "../data/gallery";

function CategoryTabs({ categories, active, setActive, counts }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const idx = categories.indexOf(active);
      const btn = containerRef.current?.children[idx + 1];
      const scrollParent = containerRef.current?.parentElement;
      if (btn) {
        setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
        if (scrollParent) {
          const targetLeft =
            btn.offsetLeft - scrollParent.clientWidth / 2 + btn.offsetWidth / 2;
          scrollParent.scrollTo({ left: targetLeft, behavior: "smooth" });
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active, categories]);

  return (
    <div className="w-full max-w-full overflow-x-auto sm:overflow-visible sm:flex sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        ref={containerRef}
        className="relative inline-flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm whitespace-nowrap sm:flex-wrap sm:justify-center"
      >
        <span
          className="absolute top-1.5 bottom-1.5 rounded-full bg-primary transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative z-10 flex items-center gap-1.5 font-rajdhani font-bold uppercase tracking-wide text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap shrink-0 ${
              active === cat ? "text-white" : "text-body hover:text-heading"
            }`}
          >
            {cat}
            <span
              className={`text-[10px] font-semibold ${
                active === cat ? "text-white/60" : "text-muted"
              }`}
            >
              {counts[cat]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Bento span pattern — a longer, less predictable cycle so large tiles
// don't fall into an obvious repeating rhythm as the grid grows.
const spanPattern = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "sm:row-span-2",
  "",
  "",
];

// Inline tile for video items — mirrors GalleryCard's look (rounded, hover
// scale, overlay) but shows a poster + play icon instead of a static image.
function VideoTile({ item, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full h-full overflow-hidden rounded-xl border border-white/10 ${className}`}
    >
      <img
        src={item.poster}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/90 text-white shadow-lg transition-transform group-hover:scale-110">
          <Play size={20} fill="currentColor" className="ml-0.5" />
        </span>
      </div>
      <span className="absolute bottom-2.5 left-2.5 font-rajdhani font-bold uppercase tracking-wide text-[10px] text-white bg-black/50 px-2 py-1 rounded">
        Video
      </span>
    </button>
  );
}

// Custom lightbox overlay for video items — kept separate from the existing
// <Lightbox /> component (which expects images) so that component doesn't
// need to be touched.
function VideoLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return; // don't lock scroll when there's nothing to show
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 xs:p-6 sm:p-10 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black border border-white/10 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 xs:top-3 xs:right-3 z-10 flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-primary text-white transition-colors rounded"
        >
          <X size={18} />
        </button>
        <video
          className="w-full h-full"
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // Safety net: no matter what state the lightbox/video modal thinks it's
  // in, always restore body scroll when Gallery unmounts (e.g. route change
  // while a modal was open) so scroll never stays stuck.
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const counts = useMemo(() => {
    const c = { All: galleryImages.length };
    galleryCategories
      .filter((cat) => cat !== "All")
      .forEach((cat) => {
        c[cat] = galleryImages.filter((img) => img.category === cat).length;
      });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active),
    [active]
  );

  // Only photo items go through the existing image Lightbox — its index
  // must be computed against the photo-only subset, not the mixed array.
  const photoItems = useMemo(
    () => filtered.filter((img) => img.type !== "video"),
    [filtered]
  );

  const openItem = (item) => {
    if (item.type === "video") {
      setActiveVideo(item);
    } else {
      const photoIdx = photoItems.findIndex((p) => p.id === item.id);
      setLightboxIndex(photoIdx);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % photoItems.length);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + photoItems.length) % photoItems.length);

  return (
    <>
      <PageHero
        eyebrow="A Look Around"
        title="Inside The"
        highlight="Floor"
        description="A closer look at the training floor, the recovery spa, and the members who show up for both — this is what a session here actually looks like."
        image="/gallerybanner3.png"
        primaryBtnText="Start Your Journey"
        primaryBtnLink="/contact"
        secondaryBtnText="Discover Our Story"
        secondaryBtnLink="/about"
      />

      <section className="py-10 sm:py-16 md:py-24">
        <div className="container-x px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Browse The Gallery"
            title="Every Corner,"
            highlight="Every Session"
            align="center"
            className="mb-8 sm:mb-10"
          />

          {/* Sticky filter bar — `sticky` was missing before, which could
              interfere with expected scroll/layout behavior on some browsers */}
          <div className="sticky top-16 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-8 sm:mb-10 bg-bg/80 backdrop-blur-md">
            <div className="flex flex-col items-center gap-3">
              <CategoryTabs
                categories={galleryCategories}
                active={active}
                setActive={setActive}
                counts={counts}
              />
              <p className="font-rajdhani text-xs uppercase tracking-wide text-muted text-center flex items-center gap-2">
                <Camera size={14} className="text-primary" />
                Showing {filtered.length} of {galleryImages.length} items
              </p>
            </div>
          </div>

          {filtered.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-[130px] xs:auto-rows-[150px] sm:auto-rows-[190px] md:auto-rows-[200px] lg:auto-rows-[210px] xl:auto-rows-[220px] gap-3 sm:gap-4 lg:gap-5 grid-flow-dense">
              {filtered.map((item, i) => (
                <div
                  key={item.id}
                  className={`animate-fadeIn opacity-0 ${spanPattern[i % spanPattern.length]}`}
                  style={{
                    animationDelay: `${Math.min(i, 12) * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {item.type === "video" ? (
                    <VideoTile
                      item={item}
                      onClick={() => openItem(item)}
                      className="h-full"
                    />
                  ) : (
                    <GalleryCard
                      image={item}
                      onClick={() => openItem(item)}
                      className="h-full"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-3 py-16 sm:py-20 px-4 text-center border border-dashed border-white/10 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-muted mb-1">
                <Images size={22} />
              </div>
              <p className="font-teko text-2xl sm:text-3xl text-heading uppercase">
                No Photos Found
              </p>
              <p className="text-center text-muted font-inter text-sm max-w-xs">
                Try a different category to see more of the gym.
              </p>
              <button
                onClick={() => setActive("All")}
                className="font-rajdhani font-bold uppercase text-sm text-primary mt-2 hover:underline"
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface px-6 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative text-center sm:text-left">
              <h3 className="font-teko text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-heading leading-none">
                See It <span className="text-primary">In Person</span>
              </h3>
              <p className="font-inter text-sm text-body mt-2 max-w-md">
                Photos only tell half the story — book a free tour and try a session on us.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary group relative shrink-0 w-full sm:w-auto justify-center"
            >
              Book A Tour
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        images={photoItems}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <VideoLightbox item={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}