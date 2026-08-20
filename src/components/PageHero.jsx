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
    <section className="relative h-[420px] xs:h-[460px] sm:h-[520px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/50" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/40" />

        </>
      )}

      <div className="container-x relative flex flex-col items-start gap-3 sm:gap-4 pt-10 sm:pt-14 lg:pt-16">
        {eyebrow && (
          <span className="eyebrow text-xs sm:text-sm">{eyebrow}</span>
        )}

        <h1 className="font-teko text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-semibold uppercase text-heading leading-[0.95] max-w-full break-words">
          {title}{" "}
          {highlight && <span className="text-primary">{highlight}</span>}
        </h1>

        {description && (
          <p className="font-inter text-[11px] sm:text-base text-body max-w-[90%] xs:max-w-sm">
            {description}
          </p>
        )}

        {(primaryBtnText || secondaryBtnText) && (
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mt-3 sm:mt-4 w-full xs:w-auto">
            {primaryBtnText && (
              <Link
                to={primaryBtnLink || "#"}
                className="text-center font-inter font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-primary text-white hover:opacity-90 transition text-[10px] sm:text-base"
              >
                {primaryBtnText}
              </Link>
            )}
            {secondaryBtnText && (
              <Link
                to={secondaryBtnLink || "#"}
                className="text-center font-inter font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-md border border-heading text-heading hover:bg-heading hover:text-bg transition text-[10px] sm:text-base"
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