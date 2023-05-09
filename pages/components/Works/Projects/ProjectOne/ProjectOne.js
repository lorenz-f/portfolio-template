import React, { useReducer } from "react";

import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";






// both button sets in middle, vertical, alternate and have each one connected w thin line to respective side easy as fuck (or dot or smth else we'll test caret mayb)

export default function Espy() {
  const imageReducer = (image, action) => {
    switch (action) {
      case "image 1":
        return (image = "placeholder");
      case "image 2":
        return (image = "placeholder");
      case "image 3":
        return (image = "placeholder");
      case "image 4":
        return (image = "placeholder");
    }
  };

  const descriptionReducer = (details, action) => {
    switch (action) {
      case "section one":
        return (details = <SectionOne />);
      case "section two":
        return (details = <SectionTwo />);
    }
  };

  const [image, imageDispatch] = useReducer(imageReducer, "placeholder");
  const [details, detailsDispatch] = useReducer(
    descriptionReducer,
    <SectionOne />
  );

  return (
    <>
      <div className="flex flex-col items-center w-full h-full transition-all ease-in-out sm:h-full">
        <div className="w-full text-center space-x-8 flex flex-row text-start items-center justify-center">
          <div className="w-full h-full flex flex-row justify-center items-center transition-all sm:flex-col">
            <div className="w-1/2 h-full flex flex-col items-center justify-center rounded-3xl sm:w-full">
              <img
                id="#espy"
                className="w-[85%] shadow-xl rounded-3xl transition-all ease-in-out sm:h-full"
                src={`/project-screenshots/${image}.png`}
                alt="eSpy"
              />
              <nav className="mt-12 w-full space-x-4 flex flex-row font-dmSub font-bold text-3xl items-center justify-center text-center mx-0 sm:space-y-0 sm:flex-col sm:space-x-0">
                <button
                  onClick={() => {
                    imageDispatch("image 1");
                  }}
                  className="opacity-80 transition-all ease-in-out text-center w-32 hover:tracking-wide hover:opacity-100 sm:w-full sm:tracking-wide sm:opacity-100"
                >
                  Image 1
                </button>
                <div className="mx-auto">&#x2022;</div>
                <button
                  onClick={() => {
                    imageDispatch("image 2");
                  }}
                  className="opacity-80 transition-all ease-in-out text-center w-32 hover:tracking-wide hover:opacity-100 sm:w-full sm:tracking-wide sm:opacity-100"
                >
                  Image 2
                </button>
                <div className="mx-auto">&#x2022;</div>
                <button
                  onClick={() => {
                    imageDispatch("image 3");
                  }}
                  className="opacity-80 transition-all ease-in-out text-center w-32 hover:tracking-wide hover:opacity-100 sm:w-full sm:tracking-wide sm:opacity-100"
                >
                  Image 3
                </button>
                <div className="mx-auto">&#x2022;</div>
                <button
                  onClick={() => {
                    imageDispatch("image 4");
                  }}
                  className="opacity-80 transition-all ease-in-out text-center w-32 hover:tracking-wide hover:opacity-100 sm:w-full sm:tracking-wide sm:opacity-100"
                >
                  Image 4
                </button>
              </nav>
            </div>
            <div className="w-[45%] h-full flex flex-col items-start justify-start sm:items-center sm:justify-center sm:w-full">
              <div className="flex flex-col h-[31.5rem] mr-20 text-2xl space-y-10 font-light sm:text-center sm:mt-8 sm:w-3/4 sm:h-full sm:mx-auto">
                {details}
              </div>
              <nav className="mt-12 w-[90%] space-x-4 flex flex-row font-dmSub font-bold text-3xl items-center justify-center text-center mx-0 sm:space-y-0 sm:flex-col sm:space-x-0">
                <button
                  onClick={() => {
                    detailsDispatch("section one");
                  }}
                  className="opacity-80 transition-all ease-in-out text-center w-36 hover:tracking-wide hover:opacity-100 sm:opacity-100 sm:w-full sm:tracking-wide"
                >
                  Section 1
                </button>
                <div className="sm:self-center">&#x2022;</div>
                <button
                  onClick={() => {
                    detailsDispatch("section two");
                  }}
                  className="opacity-80 transition-all ease-in-out text-center w-36 hover:tracking-wide hover:opacity-100 sm:opacity-100 sm:w-full sm:tracking-wide"
                >
                  Section 2
                </button>
                <div className="sm:self-center">&#x2022;</div>
                <a
                  href=""
                  className="opacity-80 transition-all ease-in-out text-center w-36 hover:tracking-wide hover:opacity-100 sm:opacity-100 sm:w-full sm:tracking-wide"
                >
                  GitHub
                </a>
                <div className="sm:self-center">&#x2022;</div>
                <a
                  href=""
                  className="opacity-80 transition-all ease-in-out text-center w-36 hover:tracking-wide hover:opacity-100 sm:opacity-100 sm:w-full sm:tracking-wide"
                >
                  Demo
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
