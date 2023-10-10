import PeachBtn from "./components/peachBtn";
import WhiteBtn from "./components/whiteBtn";

// pages
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

function Header() {
  return (
    <div className="py-[34px] px-[24px] flex items-center justify-between gap-[101px]">
      <img
        className="w-[202px] h-[27px] "
        src="src\designo-multi-page-website\starter-code\assets\shared\desktop\logo-dark.png"
        alt="logo"
      />
      <button className="w-[24px] h-[20px] ">
        <img
          src="src\designo-multi-page-website\starter-code\assets\shared\mobile\icon-hamburger.svg"
          alt="hamburger"
        />
      </button>
    </div>
  );
}
