function WhiteBtn({ children }) {
  return (
    <button className="py-[17px] px-[24px]  rounded-lg font-medium text-[15px] tracking-[1px] bg-white text-secondaryDarkGray cursor-pointer hover:bg-secondaryLightPeach hover:text-white">
      {children}
    </button>
  );
}

export default WhiteBtn;
