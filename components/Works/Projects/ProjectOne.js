import React, { useReducer } from "react";

export default function ProjectOne() {
  const imageReducer = (image, action) => {
    switch (action) {
      case "slide_one":
        return (image = "placeholder");
      case "slide_two":
        return (image = "placeholder");
      case "slide_three":
        return (image = "placeholder");
    }
  };

  const [image, imageDispatch] = useReducer(imageReducer, "placeholder");

  return (
    <>
      <div className="w-full h-full flex flex-row justify-center items-center transition-all sm:flex-col">
        <div className="w-1/2 h-full flex flex-col sm:flex-col items-center justify-center rounded-3xl sm:w-full">
          <h2 className="font-dm font-bold text-5xl mb-10 tracking-normal hidden sm:flex sm:pl-8 sm:mr-auto">
            Project 1
          </h2>
          <img
            className="w-[85%] shadow-xl rounded-lg transition-all ease-in-out sm:h-full"
            src={`/project-screenshots/${image}.png`}
            alt="Main Project"
          />
          <nav className="mt-8 w-full space-x-4 sm:space-x-0 sm:px-2 flex flex-row font-dmSub font-bold text-3xl sm:text-2xl items-center justify-center text-center mx-0">
            <button
              onClick={() => {
                imageDispatch("slide_one");
              }}
              className="transition-all ease-in-out text-center w-32 hover:tracking-wide sm:w-full sm:tracking-wide"
            >
              Slide 1
            </button>
            <button
              onClick={() => {
                imageDispatch("slide_two");
              }}
              className="transition-all ease-in-out text-center w-32 hover:tracking-wide sm:w-full sm:tracking-wide"
            >
              Slide 2
            </button>
            <button
              onClick={() => {
                imageDispatch("slide_three");
              }}
              className="transition-all ease-in-out text-center w-32 hover:tracking-wide sm:w-full sm:tracking-wide"
            >
              Slide 3
            </button>
          </nav>
        </div>
        <div className="w-[45%] flex flex-row items-center justify-center sm:py-8 sm:px-0 sm:w-full sm:flex-col">
          <div className="flex flex-col text-start mr-20 sm:mr-0 sm:px-8">
            <h2 className="font-dm font-bold text-5xl mb-10 tracking-normal sm:hidden">
              Project 1
            </h2>
            <div
              className="font-light text-2xl sm:text-base space-y-5 sm:space-y-4"
              style={{ lineHeight: "1.3" }}
            >
              <p>
                Lorem ipsum dolor sit <a>amet, consectetur adipiscing elit</a>,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>Quis ipsum suspendisse ultrices gravida.</p>
              <p>
                <span className="font-semibold">Risus</span> commodo viverra
                maecenas accumsan lacus.
              </p>
            </div>
            <nav className="mt-8 w-full space-x-4 justify-start flex flex-row font-dmSub font-bold text-3xl items-start text-center sm:justify-center sm:text-2xl sm:items-center sm:w-full">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="transition-all ease-in-out text-start sm:text-center w-1/4 hover:opacity-100 sm:w-full sm:tracking-wide sm:opacity-100"
              >
                Visit GitHub
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="transition-all ease-in-out text-start sm:text-center w-1/4 hover:opacity-100 sm:w-full sm:tracking-wide sm:opacity-100"
              >
                Visit Site
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
