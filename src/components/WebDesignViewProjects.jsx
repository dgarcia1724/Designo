function WebDesignViewProjects() {
  return (
    <a href="#" className="">
      <div
        className="bg-[url('src/designo-multi-page-website/starter-code/assets/home/mobile/image-web-design.jpg')] bg-cover rounded-[15px] overflow-hidden relative
      sm:bg-[url('src/designo-multi-page-website/starter-code/assets/home/tablet/image-web-design.jpg')]"
      >
        <div className="py-[90px] px-[56px]  text-center">
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
            <img
              src="src\designo-multi-page-website\starter-code\assets\shared\desktop\icon-right-arrow.svg"
              alt="right arrow"
            />
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </a>
  );
}

export default WebDesignViewProjects;
