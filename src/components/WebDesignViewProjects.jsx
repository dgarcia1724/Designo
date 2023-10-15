import { Link } from "react-router-dom";

function WebDesignViewProjects() {
  return (
    <div
      className="bg-[url('/images/image-web-design-mobile.jpg')] bg-cover rounded-[15px] overflow-hidden relative
      sm:bg-[url('/images/image-web-design-tablet.jpg')] md:col-span-1 md:row-span-2 
      md:bg-[url('/images/image-web-design-large-desktop.jpg')]"
    >
      <Link to="/webdesign">
        <section className="h-full w-full grid place-items-center">
          <div>
            <h1
              className="mb-3 font-medium text-[28px] tracking-[1.4px] text-white
          sm:text-[40px] sm:tracking-[2px] sm:mb-[24px]"
            >
              WEB DESIGN
            </h1>
            <div className="flex items-center justify-center gap-[16px] sm:gap-[21px]">
              <p className="font-medium text-[15px] tracking-[5px] text-white">
                VIEW PROJECTS
              </p>
              <img src="images/icon-right-arrow.svg" alt="right arrow" />
            </div>
          </div>
        </section>
        <div className="overlay"></div>
      </Link>
    </div>
  );
}

export default WebDesignViewProjects;
