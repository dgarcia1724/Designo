import WebDesignViewProjects from "../components/WebDesignViewProjects";
import AppDesignViewProjects from "../components/AppDesignViewProjects";
import GraphicDesignViewProjects from "../components/GraphicDesignViewProjects";

const webDesignData = [
  {
    id: 1,
    url: "/images/image-change.jpg",
    title: "TIM BROWN",
    description: `A book cover designed for 
Tim Brown’s new release, ‘Change’`,
  },
  {
    id: 2,
    url: "/images/image-boxed-water.jpg",
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    id: 3,
    url: "/images/image-science.jpg",
    title: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

function GraphicDesign() {
  return (
    <div className="text-secondaryDarkGray">
      <Hero />
      <HomePageMain />
    </div>
  );
}

export default GraphicDesign;

function Hero() {
  return (
    <div className="py-[105px] px-[24px] text-center bg-primaryPeach overflow-hidden relative sm:mx-[40px] sm:rounded-[15px] sm:py-[64px] sm:px-[150px] md:mx-[165px] md:px-[190px]">
      <section>
        <h1 className="mb-[14px] font-medium text-[32px] leading-[36px] tracking-[0] text-white sm:text-[48px] sm:leading-[48px] sm:mb-[20px]">
          Graphic Design
        </h1>
        <p className="font-normal text-[15px] leading-[25px] tracking-[0] text-white sm:text-[16px] sm:leading-[26px]">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </section>
    </div>
  );
}

function HomePageMain() {
  return (
    <div className="pt-[120px] px-6 pb-[311px] sm:pb-[331px] sm:px-[40px] md:pt-[160px] md:px-[164px] md:pb-[380px]">
      <section className="mb-[96px] grid gap-[40px] sm:mb-[120px] sm:gap-[32px] md:mb-[160px] md:gap-[30px] md:grid-cols-3">
        {webDesignData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </section>
      <section
        className=" h-[798px] w-[full] grid gap-6 sm:h-[689px] sm:gap-[25px] md:grid-cols-2 md:grid-rows-2 md:gap-x-[30px]
      md:gap-y-[24px] md:h-[1112px]"
      >
        <WebDesignViewProjects />
        <AppDesignViewProjects />
        <GraphicDesignViewProjects />
      </section>
    </div>
  );
}

function Card({ card }) {
  return (
    <div
      className="cardBox w-full h-[478px] rounded-[15px] overflow-hidden cursor-pointer sm:grid sm:grid-cols-2
    sm:h-[310px] md:block md:h-[478px]"
    >
      <img
        className="w-full h-[320px] object-cover"
        src={card.url}
        alt={card.title}
      />
      <section className="py-[32px] px-[30px] bg-[#FDF3F0] rounded-b-[15px] text-center sm:pl-[32px] sm:py-[108px] sm:pr-[41px] md:p-[32px]">
        <h1 className="mb-4 text-primaryPeach font-medium text-[20px] tracking-[5px]">
          {card.title}
        </h1>
        <p className="text-secondaryDarkGray font-normal text-[16px] leading-[26px] tracking-[0px]">
          {card.description}
        </p>
      </section>
    </div>
  );
}
