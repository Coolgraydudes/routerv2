import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="p-4 bg-gray-100 border-b border-gray-300 mb-6">
      <div className="flex gap-4 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600 underline" : "text-blue-500"
          }
        >
          Dashboard
        </NavLink>
        <span>|</span>
        <NavLink
          to="/santri"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600 underline" : "text-blue-500"
          }
        >
          Santri
        </NavLink>
        <span>|</span>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600 underline" : "text-blue-500"
          }
        >
          Tentang
        </NavLink>
      </div>
    </nav>
  );
}