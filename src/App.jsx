import WhiteBtn from "./components/whiteBtn";

// pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";

import { Link, NavLink, Route, Routes } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  isNavOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle nav":
      return { ...state, isNavOpen: !state.isNavOpen };
    case "open nav":
      return { ...state, isNavOpen: true };
    case "close nav":
      return { ...state, isNavOpen: false };
    default:
      throw new Error("Unknown State");
  }
}

export default function App() {
  const [{ isNavOpen }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <AppContext.Provider value={{ isNavOpen, dispatch }}>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

function Header() {
  const { isNavOpen, dispatch } = useContext(AppContext);

  return (
    <header className="top-0 sticky z-[999]">
      <div className="py-[34px] px-[24px] flex items-center justify-between gap-[101px] bg-white drop-shadow sm:py-[64px] sm:px-[40px]  md:px-[165px]">
        <Link onClick={() => dispatch({ type: "close nav" })} to="/">
          <img
            className="w-[202px] h-[27px] "
            src="src\designo-multi-page-website\starter-code\assets\shared\desktop\logo-dark.png"
            alt="logo"
          />
        </Link>
        {/* mobile header btn */}
        {isNavOpen ? (
          <button
            onClick={() => dispatch({ type: "close nav" })}
            className="w-[24px] h-[20px] sm:hidden"
          >
            <img
              src="src\designo-multi-page-website\starter-code\assets\shared\mobile\icon-close.svg"
              alt="close"
            />
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "open nav" })}
            className="w-[24px] h-[20px] sm:hidden"
          >
            <img
              src="src\designo-multi-page-website\starter-code\assets\shared\mobile\icon-hamburger.svg"
              alt="hamburger"
            />
          </button>
        )}
        {/* tablet nav */}
        <nav className="hidden sm:block">
          <ul className="flex items-center justify-center gap-[42px] font-normal text-[14px] tracking-[2px]">
            <li>
              <NavLink
                onClick={() => dispatch({ type: "close nav" })}
                to="/about"
              >
                OUR COMPANY
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => dispatch({ type: "close nav" })}
                to="/locations"
              >
                LOCATIONS
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => dispatch({ type: "close nav" })}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* mobile nav */}
      {isNavOpen && (
        <div className="sm:hidden relative">
          <nav>
            <ul
              className="py-[48px] px-[24px] space-y-[32px] bg-primaryBlack text-white font-normal text-[24px]
            tracking-[2px]"
            >
              <li>
                <NavLink
                  onClick={() => dispatch({ type: "close nav" })}
                  to="/about"
                >
                  OUR COMPANY
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => dispatch({ type: "close nav" })}
                  to="/locations"
                >
                  LOCATIONS
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => dispatch({ type: "close nav" })}
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
          <div
            onClick={() => dispatch({ type: "close nav" })}
            className="darkOverlay"
          ></div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <div
      className="pt-[253px] px-[24px] pb-[64px] bg-primaryBlack text-center text-white relative sm:pt-[166px] sm:px-[40px] sm:pb-[80px]
    md:pt-[144px] md:px-[164px] md:pb-[72px]"
    >
      <section className="sm:mb-[40px] sm:flex sm:items-center sm:justify-between">
        <img
          className="mb-[32px] mx-auto w-[202px] h-[27px] sm:ml-0 sm:mb-0"
          src="src\designo-multi-page-website\starter-code\assets\shared\desktop\logo-light.png"
          alt="logo"
        />
        <div className="mb-[32px] h-[1px] w-full bg-white opacity-10 sm:hidden"></div>
        <div
          className="mb-[40px] grid gap-[32px] font-normal text-[14px] tracking-[2px]
           sm:grid-cols-3 sm:items-center sm:gap-[42px] sm:mb-0"
        >
          <p>OUR COMPANY</p>
          <p>LOCATIONS</p>
          <p>CONTACT</p>
        </div>
      </section>
      <div className="hidden mb-[32px] h-[1px] w-full bg-white opacity-10 sm:block"></div>
      <section className="sm:flex sm:items-center sm:justify-between">
        <div className="mb-[40px] font-normal text-4 leading-[26px] tracking-[0px] opacity-50 sm:text-left">
          <p className="font-bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div
          className="mb-[40px] font-normal text-4 leading-[26px] tracking-[0px] opacity-50
        sm:text-left"
        >
          <p className="font-bold">Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img
            className="w-[24px] h-[24px]"
            src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-facebook.svg"
            alt="facebook"
          />
          <img
            className="w-[24px] h-[24px]"
            src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-youtube.svg"
            alt="youtube"
          />
          <img
            className="w-[24px] h-[24px]"
            src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-twitter.svg"
            alt="twitter"
          />
          <img
            className="w-[24px] h-[24px]"
            src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-pinterest.svg"
            alt="pinterest"
          />
          <img
            className="w-[24px] h-[24px]"
            src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-instagram.svg"
            alt="instagram"
          />
        </div>
      </section>
      <div className="orangeBox md:flex md:items-center justify-between">
        <div className="md:w-[460px] md:text-left">
          <h1
            className="mb-[6px] font-medium text-[32px] leading-[36px] tracking-[0px]
        sm:mb-[24px] sm:text-[40px] sm:leading-[40px] sm:w-[335px] sm:mx-auto md:ml-0"
          >
            Let’s talk about your project
          </h1>
          <p
            className="mb-[32px] font-normal text-[15px] leading-[25px] tracking-[0px]
        sm:text-4 sm:leading-[26px]"
          >
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <WhiteBtn>GET IN TOUCH</WhiteBtn>
      </div>
    </div>
  );
}
