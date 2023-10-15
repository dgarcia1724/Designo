import { Link } from "react-router-dom";
import CircleBg from "../components/CircleBg";
import PeachBtn from "../components/PeachBtn";

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

    // Danny Garcia
    alert("Looking forward to working with you :) dgarcia1724@berkeley.edu");
  }

  return (
    <div>
      <div
        className="bg-primaryPeach text-white py-[72px] px-[24px]
      grid gap-[48px] sm:py-[71px] sm:px-[58px] sm:gap-[40px] sm:mx-[40px] sm:rounded-[15px]
      md:py-[54px] md:px-[96px] md:mx-[164px] md:grid-cols-2 md:gap-[0px] md:h-[480px]"
      >
        <section className="text-center sm:text-left md:p-[48px]">
          <h1 className="mb-[24px] font-medium text-[32px] tracking-[0px] sm:mb-[32px] sm:text-[48px]">
            Contact Us
          </h1>
          <p
            className="font-normal text-[15px] leading-[25px] tracking-[0px]
          sm:text-[16px] sm:leading-[26px]"
          >
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </section>
        <section className="text-center sm:text-right">
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
                  src="src\assets\contact\desktop\icon-error.svg"
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
                  src="src\assets\contact\desktop\icon-error.svg"
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
                  src="src\assets\contact\desktop\icon-error.svg"
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
                  src="src\assets\contact\desktop\icon-error.svg"
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
      {/* 3 Buttons Grid */}
      <section className="my-[120px] pb-[286px] sm:pb-[384px] md:pb-[380px] mx-[12px] grid gap-[48px] sm:gap-[80px] md:my-[160px] md:mx-[164px] md:grid-cols-3 md:gap-[30px]">
        {/* #1 */}
        <div className="text-center">
          <CircleBg>
            <img
              src="src\assets\shared\desktop\illustration-canada.svg"
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
              src="src\assets\shared\desktop\illustration-australia.svg"
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
              src="src\assets\shared\desktop\illustration-united-kingdom.svg"
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
    </div>
  );
}

export default Contact;
