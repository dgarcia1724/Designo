import PeachBtn from "./components/peachBtn";
import WhiteBtn from "./components/whiteBtn";

// pages
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
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

function Footer() {
  return (
    <div className="pt-[253px] px-[24px] pb-[64px] bg-primaryBlack text-center text-white">
      <img
        className="mb-[32px] mx-auto w-[202px] h-[27px] "
        src="src\designo-multi-page-website\starter-code\assets\shared\desktop\logo-light.png"
        alt="logo"
      />
      <div className="mb-[32px] h-[1px] w-full bg-white opacity-10"></div>
      <div
        className="mb-[40px] space-y-[32px] font-normal text-[14px] tracking-[2px]
      "
      >
        <p>OUR COMPANY</p>
        <p>OUR COMPANY</p>
        <p>OUR COMPANY</p>
      </div>
      <div className="mb-[40px] font-normal text-4 leading-[26px] tracking-[0px] opacity-50">
        <p className="font-bold">Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>
      <div className="mb-[40px] font-normal text-4 leading-[26px] tracking-[0px] opacity-50">
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
    </div>
  );
}
