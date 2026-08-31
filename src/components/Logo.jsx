import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
      <img
        // src="/force-fitness-logo.png"
        src="/logo6.png"
        alt="Force Fitness Gym & Spa logo"
        className="h-14 w-auto sm:h-16 lg:h-20 object-contain"
      />
    </Link>
  );
}
