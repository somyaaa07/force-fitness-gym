import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
      <img
        // src="/force-fitness-logo.png"
        src="/logo4.png"
        alt="Force Fitness Gym & Spa logo"
        className="h-18 w-[100px] xs:h-20 xs:w-51 sm:h-23 sm:w-48 lg:h-30 lg:w-[130px] md:h-20 md:w-[120px]  object-center object-cover"
      />
    </Link>
  );
}
