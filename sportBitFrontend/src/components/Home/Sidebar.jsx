import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center z-50">
       <Link
        to="/dashboard"
        className="transform -rotate-90 mb-16 text-black font-semibold tracking-wide hover:text-orange-500 transition"
        >
        Dashboard
      </Link>

      <Link
        to="/statistics"
        className="transform -rotate-90 mb-16 text-black font-semibold tracking-wide hover:text-orange-500 transition"
        >
              Statistics
      </Link>

      <Link
        to="/trainer"
        className="transform -rotate-90 mb-16 text-black font-semibold tracking-wide hover:text-orange-500 transition"
        >
              Trainer
      </Link>
    </div>
  );
}
