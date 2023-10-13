import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  function handleToggleNav() {
    setNavOpen((is) => !is);
  }

  function handleOpenNav() {
    setNavOpen(true);
  }
  function handleCloseNav() {
    setNavOpen(false);
  }

  return (
    <div>
      <header className="top-0 sticky z-[999]">
        <div className="p-4 bg-cyan-100 flex items-center justify-between">
          <h1 className="bg-black text-white">
            <Link onClick={handleCloseNav} to="/">
              Logo
            </Link>
          </h1>
          {/* tablet nav */}
          <nav className="hidden sm:block">
            <ul className="flex gap-10">
              <li>
                <NavLink onClick={handleCloseNav} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleCloseNav} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {navOpen ? (
            <button className="sm:hidden" onClick={handleCloseNav}>
              Close
            </button>
          ) : (
            <button className="sm:hidden" onClick={handleOpenNav}>
              Open
            </button>
          )}
        </div>
        {navOpen && (
          <div className="sm:hidden relative">
            <nav>
              <ul className="bg-green-100 p-4 flex flex-col items-center gap-2">
                <li>
                  <NavLink onClick={handleCloseNav} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleCloseNav} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div onClick={handleCloseNav} className="blurBg"></div>
          </div>
        )}
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="redBox"></div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="blueBox"></div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="greenBox"></div>
    </div>
  );
}
