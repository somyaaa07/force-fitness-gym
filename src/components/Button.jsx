import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  icon = true,
  className = "",
  as: Tag = "button",
  href,
  ...props
}) {
  const base =
    "group inline-flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wide px-7 py-3 rounded-md transition-all duration-300 text-sm sm:text-base";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primaryDark hover:shadow-glow",
    secondary:
      "bg-transparent border border-secondary/60 text-offwhite hover:border-primary hover:text-primary",
    outline:
      "bg-transparent border border-white/20 text-offwhite hover:border-primary hover:text-primary",
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
    </>
  );

  // Internal link: use React Router Link for SPA navigation
  if (Tag === "a" && href && href.startsWith("/")) {
    return (
      <Link to={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} href={href} {...props}>
      {content}
    </Tag>
  );
}
