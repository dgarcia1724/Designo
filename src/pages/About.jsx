import { Link } from "react-router-dom";
import CircleBg from "../components/CircleBg";
import PeachBtn from "../components/PeachBtn";

function About() {
  return (
    <div>
      <section
        className="sm:mb-[120px] sm:mx-[40px] sm:rounded-[15px] sm:overflow-hidden md:mb-[160px] md:mx-[164px] md:grid md:grid-cols-10
      md:h-[480px]"
      >
        <img
          className="w-full h-[320px] object-cover sm:hidden"
          src="/images/image-about-hero-mobile.jpg"
          alt="image-about-hero"
        />
        <img
          className="hidden w-full h-[320px] object-cover sm:block md:hidden"
          src="/images/image-about-hero-tablet.jpg"
          alt="image-about-hero"
        />
        <div
          className="py-[80px] px-[24px] bg-primaryPeach text-white text-center sm:py-[64px] sm:px-[58px] md:col-span-6 
        md:p-[0px] md:py-[135px] md:pl-[95px] md:pr-[82px] md:text-left"
        >
          <h1 className="mb-[24px] font-medium text-[32px] tracking-[0px] sm:mb-[32px] sm:text-[48px]">
            About Us
          </h1>
          <p className="font-normal text-[15px] leading-[25px] tracking-[0px] sm:text-[16px] sm:leading-[26px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <img
          className="hidden w-full h-full object-cover md:block md:col-span-4"
          src="/images/image-about-hero-desktop.jpg"
          alt="image-about-hero"
        />
      </section>
      <section className="sm:mx-[40px] sm:rounded-[15px] sm:overflow-hidden md:h-[640px] md:grid md:grid-cols-10 md:mx-[164px]">
        <img
          className="w-full h-[320px] object-cover sm:hidden"
          src="/images/image-world-class-talent-mobile.jpg"
          alt="image-world-class-talent"
        />
        <img
          className="hidden w-full h-[320px] object-cover sm:block md:hidden"
          src="/images/image-world-class-talent-tablet.jpg"
          alt="image-world-class-talent"
        />
        <img
          className="hidden w-full h-full object-cover md:block md:col-span-4"
          src="/images/image-world-class-talent-desktop.jpg"
          alt="image-world-class-talent"
        />
        <div
          className="py-[80px] px-[24px] bg-[#FDF3F0] text-white text-center sm:py-[68px] sm:px-[58px] md:col-span-6 
        md:py-[154px] md:px-[94px] md:text-left"
        >
          <h1 className="mb-[24px] font-medium text-primaryPeach text-[32px] tracking-[0px] sm:text-[40px]">
            World-class talent
          </h1>
          <p className="mb-[32px] font-normal text-[15px] leading-[25px] tracking-[0px] text-secondaryDarkGray sm:text-[16px] sm:leading-[26px]">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="font-normal text-[15px] leading-[25px] tracking-[0px] text-secondaryDarkGray sm:text-[16px] sm:leading-[26px]">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>
      {/* 3 Buttons Grid */}
      <section className="my-[120px] mx-[12px] grid gap-[48px] sm:gap-[80px] md:my-[160px] md:mx-[164px] md:grid-cols-3 md:gap-[30px]">
        {/* #1 */}
        <div className="text-center">
          <CircleBg>
            <img
              src="/images/illustration-canada.svg"
              alt="illustration-canada"
            />
          </CircleBg>
          <h1 className="mt-[48px] mb-[32px] font-medium text-[20px] tracking-[5px] text-secondaryDarkGray sm:mb-[48px]">
            CANADA
          </h1>
          <Link to="/locations">
            <PeachBtn>SEE LOCATION</PeachBtn>
          </Link>
        </div>
        {/* #2 */}
        <div className="text-center">
          <CircleBg>
            <img
              src="/images/illustration-australia.svg"
              alt="illustration-australia"
            />
          </CircleBg>
          <h1 className="mt-[48px] mb-[32px] font-medium text-[20px] tracking-[5px] text-secondaryDarkGray sm:mb-[48px]">
            AUSTRALIA
          </h1>
          <Link to="/locations">
            <PeachBtn>SEE LOCATION</PeachBtn>
          </Link>
        </div>
        {/* #3 */}
        <div className="text-center">
          <CircleBg>
            <img
              src="/images/illustration-united-kingdom.svg"
              alt="illustration-united-kingdom"
            />
          </CircleBg>
          <h1 className="mt-[48px] mb-[32px] font-medium text-[20px] tracking-[5px] text-secondaryDarkGray sm:mb-[48px]">
            UNITED KINGDOM
          </h1>
          <Link to="/locations">
            <PeachBtn>SEE LOCATION</PeachBtn>
          </Link>
        </div>
      </section>
      <section
        className="mb-[310px] sm:mb-[384px] sm:mx-[40px] sm:rounded-[15px] sm:overflow-hidden md:mx-[164px] md:grid md:grid-cols-10
      md:mb-[380px]"
      >
        <img
          className="w-full h-[320px] object-cover sm:hidden"
          src="/images/image-real-deal-mobile.jpg"
          alt="image-real-deal"
        />
        <img
          className="hidden w-full h-[320px] object-cover sm:block md:hidden"
          src="/images/image-real-deal-tablet.jpg"
          alt="image-real-deal"
        />
        <div
          className="py-[80px] px-[24px] bg-[#FDF3F0] text-white text-center sm:py-[68px] sm:px-[58px] md:col-span-6 
        md:py-[154px] md:px-[94px] md:text-left"
        >
          <h1 className="mb-[24px] font-medium text-primaryPeach text-[32px] tracking-[0px] sm:text-[40px]">
            The real deal
          </h1>
          <p className="mb-[32px] font-normal text-[15px] leading-[25px] tracking-[0px] text-secondaryDarkGray sm:text-[16px] sm:leading-[26px]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="font-normal text-[15px] leading-[25px] tracking-[0px] text-secondaryDarkGray sm:text-[16px] sm:leading-[26px]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <img
          className="hidden w-full h-full object-cover md:block md:col-span-4"
          src="/images/image-real-deal-desktop.jpg"
          alt="image-real-deal"
        />
      </section>
    </div>
  );
}

export default About;
