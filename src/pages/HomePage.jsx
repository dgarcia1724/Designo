import WhiteBtn from "../components/whiteBtn";
import WebDesignViewProjects from "../components/WebDesignViewProjects";
import AppDesignViewProjects from "../components/AppDesignViewProjects";
import GraphicDesignViewProjects from "../components/GraphicDesignViewProjects";

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
      <WebDesignViewProjects />
      <AppDesignViewProjects />
      <GraphicDesignViewProjects />
    </div>
  );
}
