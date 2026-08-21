import { Link } from "react-router-dom";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}) {
  return (
    <section
      className="
        relative overflow-hidden
        h-[100dvh] max-h-[480px]
        xs:max-h-[520px]
        sm:max-h-[560px]
        md:max-h-[640px]
        lg:max-h-[720px]
        xl:max-h-[780px]
        2xl:max-h-[840px]
        min-h-[380px]
        [@media(max-height:480px)]:h-auto
        [@media(max-height:480px)]:min-h-[340px]
      "
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/40" />
        </>
      )}

      <div
        className="
          container-x relative h-full
          flex flex-col items-start justify-center gap-3 sm:gap-4
          pt-8 pb-8 xs:pt-10 sm:pt-0
        "
      >
        {eyebrow && (
          <span className="eyebrow text-[11px] xs:text-xs sm:text-sm">
            {eyebrow}
          </span>
        )}

        <h1
          className="
            font-teko font-semibold uppercase text-heading leading-[0.95]
            max-w-full break-words
            text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl
            md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
          "
        >
          {title}{" "}
          {highlight && <span className="text-primary">{highlight}</span>}
        </h1>

        {description && (
          <p
            className="
              font-inter text-body
              text-[12px] xs:text-sm sm:text-base lg:text-lg
              max-w-[92%] xs:max-w-sm sm:max-w-md md:max-w-lg
            "
          >
            {description}
          </p>
        )}

        {(primaryBtnText || secondaryBtnText) && (
          <div
            className="
              flex flex-col xs:flex-row items-stretch xs:items-center
              gap-3 sm:gap-4 mt-3 sm:mt-4 w-full xs:w-auto
            "
          >
            {primaryBtnText && (
              <Link
                to={primaryBtnLink || "#"}
                className="
                  text-center font-inter font-semibold rounded-md
                  bg-primary text-white hover:opacity-90 transition
                  px-5 sm:px-6 py-2.5 sm:py-3
                  text-xs sm:text-base
                "
              >
                {primaryBtnText}
              </Link>
            )}
            {secondaryBtnText && (
              <Link
                to={secondaryBtnLink || "#"}
                className="
                  text-center font-inter font-semibold rounded-md
                  border border-heading text-heading
                  hover:bg-heading hover:text-bg transition
                  px-5 sm:px-6 py-2.5 sm:py-3
                  text-xs sm:text-base
                "
              >
                {secondaryBtnText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}