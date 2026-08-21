import { useMemo, useRef, useEffect, useState } from "react";
import { Camera, ArrowRight, Images } from "lucide-react";
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
      const scrollParent = containerRef.current?.parentElement; // the overflow-x-auto wrapper
      if (btn) {
        setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });

        // Horizontally center the active tab WITHOUT touching page (vertical) scroll.
        // scrollIntoView() was the culprit — it can also scroll the whole window.
        if (scrollParent) {
          const targetLeft =
            btn.offsetLeft - scrollParent.clientWidth / 2 + btn.offsetWidth / 2;
          scrollParent.scrollTo({
            left: targetLeft,
            behavior: "smooth",
          });
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

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

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

          {/* Sticky filter bar — stays reachable as members scroll a long set of photos */}
          <div className="top-16 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-8 sm:mb-10 bg-bg/80 backdrop-blur-md">
            <div className="flex flex-col items-center gap-3">
              <CategoryTabs
                categories={galleryCategories}
                active={active}
                setActive={setActive}
                counts={counts}
              />
              <p className="font-rajdhani text-xs uppercase tracking-wide text-muted text-center flex items-center gap-2">
                <Camera size={14} className="text-primary" />
                Showing {filtered.length} of {galleryImages.length} photos
              </p>
            </div>
          </div>

          {filtered.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-[130px] xs:auto-rows-[150px] sm:auto-rows-[190px] md:auto-rows-[200px] lg:auto-rows-[210px] xl:auto-rows-[220px] gap-3 sm:gap-4 lg:gap-5 grid-flow-dense">
              {filtered.map((image, i) => (
                <div
                  key={image.id}
                  className={`animate-fadeIn opacity-0 ${spanPattern[i % spanPattern.length]}`}
                  style={{
                    animationDelay: `${Math.min(i, 12) * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <GalleryCard
                    image={image}
                    onClick={() => openLightbox(i)}
                    className="h-full"
                  />
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
        images={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}