import WhiteBtn from "../components/whiteBtn";

import WebDesignViewProjects from "../components/WebDesignViewProjects";
import AppDesignViewProjects from "../components/AppDesignViewProjects";
import GraphicDesignViewProjects from "../components/GraphicDesignViewProjects";

import CircleBg from "../components/CircleBg";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="text-secondaryDarkGray">
      <Hero />
      <HomePageMain />
    </div>
  );
}

export default HomePage;

function Hero() {
  return (
    <div
      className="pt-[80px] px-[24px] text-center h-[843px] bg-primaryPeach overflow-hidden relative sm:mx-[40px] sm:rounded-[15px] sm:pt-[60px] sm:px-[58px] md:mx-[165px] md:pt-[145px]
    md:pl-[95px]"
    >
      <section className="heroText md:w-[540px] md:text-left">
        <h1 className="mb-[14px] font-medium text-[32px] leading-[36px] tracking-[0] text-white sm:text-[48px] sm:leading-[48px] sm:mb-[20px]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mb-[24px] font-normal text-[15px] leading-[25px] tracking-[0] text-white sm:text-[16px] sm:leading-[26px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link to="/about">
          <WhiteBtn>LEARN MORE</WhiteBtn>
        </Link>
      </section>
      <div className="heroPhone">
        <img
          src="src\designo-multi-page-website\starter-code\assets\home\desktop\image-hero-phone.png"
          alt="hero phone"
        />
      </div>
      {/* <div className="heroBgPattern">
        <img
          src="src\designo-multi-page-website\starter-code\assets\home\desktop\bg-pattern-hero-home.svg"
          alt="bg pattern"
        />
      </div> */}
    </div>
  );
}

function HomePageMain() {
  return (
    <div className="pt-[120px] px-6 pb-[311px] sm:pb-[331px] sm:px-[40px] md:pt-[160px] md:px-[164px] md:pb-[380px]">
      <section
        className=" h-[798px] w-[full] grid gap-6 sm:h-[689px] sm:gap-[25px] md:grid-cols-2 md:grid-rows-2 md:gap-x-[30px]
      md:gap-y-[24px] md:h-[1112px]"
      >
        <WebDesignViewProjects />
        <AppDesignViewProjects />
        <GraphicDesignViewProjects />
      </section>
      <section className="mt-[120px] grid gap-[80px] sm:gap-[32px] md:mt-[160px] md:grid-cols-3 md:gap-[30px]">
        {/* #1 */}
        <div
          className=" grid gap-[48px] text-center sm:grid sm:grid-cols-3 sm:text-left
        sm:items-center md:grid-cols-1 md:text-center"
        >
          <CircleBg>
            <img
              src="src\designo-multi-page-website\starter-code\assets\home\desktop\illustration-passionate.svg"
              alt="illustration-passionate"
            />
          </CircleBg>
          <div className="sm:col-span-2">
            <h2 className="font-medium text-[20px] tracking-[5px] sm:mb-[16px] md:mb-[32px]">
              PASSIONATE
            </h2>
            <p className="font-normal text-4 leading-[26px] tracking-[0]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        {/* #2 */}
        <div
          className=" grid gap-[48px] text-center sm:grid sm:grid-cols-3 sm:text-left
        sm:items-center md:grid-cols-1 md:text-center"
        >
          <CircleBg>
            <img
              src="src\designo-multi-page-website\starter-code\assets\home\desktop\illustration-resourceful.svg"
              alt="illustration-resourceful"
            />
          </CircleBg>
          <div className="sm:col-span-2">
            <h2 className="font-medium text-[20px] tracking-[5px] sm:mb-[16px] md:mb-[32px]">
              RESOURCEFUL
            </h2>
            <p className="font-normal text-4 leading-[26px] tracking-[0]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        {/* #3 */}
        <div
          className=" grid gap-[48px] text-center sm:grid sm:grid-cols-3 sm:text-left
        sm:items-center md:grid-cols-1 md:text-center"
        >
          <CircleBg>
            <img
              src="src\designo-multi-page-website\starter-code\assets\home\desktop\illustration-friendly.svg"
              alt="illustration-friendly"
            />
          </CircleBg>
          <div className="sm:col-span-2">
            <h2 className="font-medium text-[20px] tracking-[5px] sm:mb-[16px] md:mb-[32px]">
              FRIENDLY
            </h2>
            <p className="font-normal text-4 leading-[26px] tracking-[0]">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
