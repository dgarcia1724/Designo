import WhiteBtn from "../components/whiteBtn";
import WebDesignViewProjects from "../components/WebDesignViewProjects";
import AppDesignViewProjects from "../components/AppDesignViewProjects";
import GraphicDesignViewProjects from "../components/GraphicDesignViewProjects";
import CircleBg from "../components/CircleBg";

function HomePage() {
  return (
    <div>
      <Hero />
      <HomePageMain />
    </div>
  );
}

export default HomePage;

function Hero() {
  return (
    <div className="pt-[80px] px-[24px] text-center h-[843px] bg-primaryPeach overflow-hidden relative">
      <section className="heroText">
        <h1 className="mb-[14px] font-medium text-[32px] leading-[36px] tracking-[0] text-white">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mb-[24px] font-normal text-[15px] leading-[25px] tracking-[0] text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <WhiteBtn>LEARN MORE</WhiteBtn>
      </section>
      <div className="heroPhone">
        <img
          src="src\designo-multi-page-website\starter-code\assets\home\desktop\image-hero-phone.png"
          alt="hero phone"
        />
      </div>
      <div className="heroBgPattern">
        <img
          src="src\designo-multi-page-website\starter-code\assets\home\desktop\bg-pattern-hero-home.svg"
          alt="bg pattern"
        />
      </div>
    </div>
  );
}

function HomePageMain() {
  return (
    <div className="pt-[120px] px-6 pb-[311px]">
      <section className="grid gap-6">
        <div>
          <WebDesignViewProjects />
        </div>
        <div>
          <AppDesignViewProjects />
        </div>
        <div>
          <GraphicDesignViewProjects />
        </div>
      </section>
      <section className="mt-[120px] grid gap-[80px]">
        {/* #1 */}
        <div className=" grid gap-[48px] text-center">
          <CircleBg>
            <img
              src="src\designo-multi-page-website\starter-code\assets\home\desktop\illustration-passionate.svg"
              alt="illustration-passionate"
            />
          </CircleBg>
          <h2 className="font-medium text-[20px] tracking-[5px]">PASSIONATE</h2>
          <p className="font-normal text-4 leading-[26px] tracking-[0]">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        {/* #2 */}
        <div className=" grid gap-[48px] text-center">
          <CircleBg>
            <img
              src="src\designo-multi-page-website\starter-code\assets\home\desktop\illustration-resourceful.svg"
              alt="illustration-resourceful"
            />
          </CircleBg>
          <h2 className="font-medium text-[20px] tracking-[5px]">
            RESOURCEFUL
          </h2>
          <p className="font-normal text-4 leading-[26px] tracking-[0]">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        {/* #3 */}
        <div className=" grid gap-[48px] text-center">
          <CircleBg>
            <img
              src="src\designo-multi-page-website\starter-code\assets\home\desktop\illustration-friendly.svg"
              alt="illustration-friendly"
            />
          </CircleBg>
          <h2 className="font-medium text-[20px] tracking-[5px]">FRIENDLY</h2>
          <p className="font-normal text-4 leading-[26px] tracking-[0]">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </div>
  );
}
