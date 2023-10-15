import { useReducer } from "react";
import WhiteBtn from "../components/whiteBtn";

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setNameIsEmpty":
      return { ...state, nameIsEmpty: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

const initialState = {
  name: "",
  nameIsEmpty: false,
};

function Contact() {
  const [{ name, nameIsEmpty }, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    if (name === "") {
      dispatch({ type: "setNameIsEmpty", payload: true });
    } else {
      dispatch({ type: "setNameIsEmpty", payload: false });
    }
  }

  return (
    <div>
      <div
        className="bg-primaryPeach text-white py-[72px] px-[24px]
      grid gap-[48px]"
      >
        <section className="text-center">
          <h1 className="mb-[24px] font-medium text-[32px] tracking-[0px]">
            Contact Us
          </h1>
          <p className="font-normal text-[15px] leading-[25px] tracking-[0px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </section>
        <section className="text-center">
          <div className="mb-[24px] relative">
            <input
              className="formInput font-medium text-[15px] tracking-[0px] bg-transparent"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
            />
            {nameIsEmpty && (
              <div className="errorMessage flex items-center gap-[9px]">
                <p className="italic text-[12px] tracking-[0px]">
                  Can't be empty
                </p>
                <img
                  src="src\designo-multi-page-website\starter-code\assets\contact\desktop\icon-error.svg"
                  alt="icon-error"
                />
              </div>
            )}
          </div>
          <WhiteBtn>
            <div onClick={handleSubmit}>SUBMIT</div>
          </WhiteBtn>
        </section>
      </div>
      {/* fake box delete later */}
      <div className="w-full h-[400px] bg-cyan-300"></div>
    </div>
  );
}

export default Contact;
