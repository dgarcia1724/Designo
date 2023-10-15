import { Link } from "react-router-dom";

function GraphicDesignViewProjects() {
  return (
    <div
      className="bg-[url('/images/image-graphic-design-mobile.jpg')] bg-cover rounded-[15px] overflow-hidden relative sm:bg-[url('/images/image-graphic-design-tablet.jpg')]
    md:bg-[url('/images/image-graphic-design-desktop.jpg')]
    "
    >
      <Link to="/graphicdesign">
        <section className="h-full w-full grid place-items-center">
          <div>
            <h1
              className="mb-3 font-medium text-[28px] tracking-[1.4px] text-white
          sm:text-[40px] sm:tracking-[2px] sm:mb-[24px]"
            >
              GRAPHIC DESIGN
            </h1>
            <div className="flex items-center justify-center gap-[16px] sm:gap-[21px]">
              <p className="font-medium text-[15px] tracking-[5px] text-white">
                VIEW PROJECTS
              </p>
              <img src="/images/icon-right-arrow.svg" alt="right arrow" />
            </div>
          </div>
        </section>
        <div className="overlay"></div>
      </Link>
    </div>
  );
}

export default GraphicDesignViewProjects;
