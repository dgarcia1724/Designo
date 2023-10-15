import { Link } from "react-router-dom";

function GraphicDesignViewProjects() {
  return (
    <div
      className="bg-[url('public/assets/home/mobile/image-graphic-design.jpg')] bg-cover rounded-[15px] overflow-hidden relative sm:bg-[url('public/assets/home/tablet/image-graphic-design.jpg')]
    md:bg-[url('public/assets/home/desktop/image-graphic-design.jpg')]
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
              <img
                src="public\assets\shared\desktop\icon-right-arrow.svg"
                alt="right arrow"
              />
            </div>
          </div>
        </section>
        <div className="overlay"></div>
      </Link>
    </div>
  );
}

export default GraphicDesignViewProjects;
