import { Link } from "react-router-dom";

function AppDesignViewProjects() {
  return (
    <div
      className="bg-[url('src/designo-multi-page-website/starter-code/assets/home/mobile/image-app-design.jpg')] bg-cover rounded-[15px] overflow-hidden relative
sm:bg-[url('src/designo-multi-page-website/starter-code/assets/home/tablet/image-app-design.jpg')]
md:bg-[url('src/designo-multi-page-website/starter-code/assets/home/desktop/image-app-design.jpg')]
"
    >
      <Link to="/appdesign">
        <section className="h-full w-full grid place-items-center">
          <div>
            <h1
              className="mb-3 font-medium text-[28px] tracking-[1.4px] text-white
          sm:text-[40px] sm:tracking-[2px] sm:mb-[24px]"
            >
              APP DESIGN
            </h1>
            <div className="flex items-center justify-center gap-[16px] sm:gap-[21px]">
              <p className="font-medium text-[15px] tracking-[5px] text-white">
                VIEW PROJECTS
              </p>
              <img
                src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-right-arrow.svg"
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

export default AppDesignViewProjects;
