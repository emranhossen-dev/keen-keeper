import { NavLink } from "react-router";
import { Home, ChartLine, ChartPie } from "lucide-react";

export default function Navbar() {
  const linkStyles = ({ isActive }) =>
    `flex items-center gap-2 font-medium transition-colors ${
      isActive ? "text-primary font-bold" : "text-base-content/70 hover:text-base-content"
    }`;

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/timeline", label: "Timeline", icon: <ChartLine size={18} /> },
    { to: "/stats", label: "Stats", icon: <ChartPie size={18} /> },
  ];

  return (
    <div className="navbar bg-base-100 relative z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open Menu">
            <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkStyles} end={link.to === "/"}>
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-bold tracking-wider text-primary">
          keenkeeper
        </NavLink>
      </div>

      
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkStyles} end={link.to === "/"}>
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
