import { useReducer } from "react";
import WhiteBtn from "../components/whiteBtn";

const initialState = {
  errorName: false,
  errorEmailAddress: false,
  errorPhone: false,
  errorMessage: false,
  emailMessage: "",
  name: "",
  emailAddress: "",
  phone: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    // name
    case "nameTrue":
      return { ...state, errorName: true };
    case "nameFalse":
      return { ...state, errorName: false };
    // email
    case "emailAddressTrue":
      return { ...state, errorEmailAddress: true };
    case "emailAddressFalse":
      return { ...state, errorEmailAddress: false };
    // phone
    case "phoneTrue":
      return { ...state, errorPhone: true };
    case "phoneFalse":
      return { ...state, errorPhone: false };
    // message
    case "messageTrue":
      return { ...state, errorMessage: true };
    case "messageFalse":
      return { ...state, errorMessage: false };
    // Email Message
    case "emailEmpty":
      return { ...state, emailMessage: "Email Address cannot be empty" };
    case "emailWrongFormat":
      return { ...state, emailMessage: "Please use a valid email address" };
    // Other
    case "setName":
      return { ...state, name: action.payload };
    case "setEmailAddress":
      return { ...state, emailAddress: action.payload };
    case "setPhone":
      return { ...state, phone: action.payload };
    case "setMessage":
      return { ...state, message: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function Contact() {
  const [
    {
      errorName,
      errorEmailAddress,
      errorPhone,
      errorMessage,
      emailMessage,
      name,
      emailAddress,
      phone,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleSubmit() {
    // name
    if (name === "") {
      dispatch({ type: "nameTrue" });
    } else {
      dispatch({ type: "nameFalse" });
    }

    // email
    if (emailAddress === "") {
      dispatch({ type: "emailAddressTrue" });
      dispatch({ type: "emailEmpty" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      dispatch({ type: "emailAddressTrue" });
      dispatch({ type: "emailWrongFormat" });
    } else {
      dispatch({ type: "emailAddressFalse" });
    }

    // phone
    if (phone === "") {
      dispatch({ type: "phoneTrue" });
    } else {
      dispatch({ type: "phoneFalse" });
    }

    // message
    if (message === "") {
      dispatch({ type: "messageTrue" });
    } else {
      dispatch({ type: "messageFalse" });
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
          {/* Name Input */}
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
            {errorName && (
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
          {/* Email Address Input */}
          <div className="mb-[24px] relative">
            <input
              className="formInput font-medium text-[15px] tracking-[0px] bg-transparent"
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) =>
                dispatch({ type: "setEmailAddress", payload: e.target.value })
              }
            />
            {errorEmailAddress && (
              <div className="errorMessage flex items-center gap-[9px]">
                <p className="italic text-[12px] tracking-[0px]">
                  {emailMessage}
                </p>
                <img
                  src="src\designo-multi-page-website\starter-code\assets\contact\desktop\icon-error.svg"
                  alt="icon-error"
                />
              </div>
            )}
          </div>
          {/* Phone Input */}
          <div className="mb-[24px] relative">
            <input
              className="formInput font-medium text-[15px] tracking-[0px] bg-transparent"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) =>
                dispatch({ type: "setPhone", payload: e.target.value })
              }
            />
            {errorPhone && (
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
          {/* Message Input */}
          <div className="mb-[24px] relative">
            <textarea
              className="formInput font-medium text-[15px] tracking-[0px]
              bg-transparent"
              placeholder="Your Message"
              value={message}
              onChange={(e) =>
                dispatch({ type: "setMessage", payload: e.target.value })
              }
            ></textarea>
            {errorMessage && (
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
          {/* Button */}
          <button
            className="py-[17px] px-[24px]  rounded-lg font-medium text-[15px] tracking-[1px] bg-white text-secondaryDarkGray cursor-pointer hover:bg-secondaryLightPeach hover:text-white"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </section>
      </div>
      {/* fake box delete later */}
      <div className="w-full h-[400px] bg-cyan-300"></div>
    </div>
  );
}

export default Contact;
