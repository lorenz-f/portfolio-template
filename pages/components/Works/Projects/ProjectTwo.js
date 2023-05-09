export default function ProjectTwo() {
  return (
    <div className="w-full text-center space-x-8 h-full flex flex-row text-start items-center justify-center opacity-50 transition-all ease-in-out hover:opacity-100 sm:space-x-0 sm:opacity-100">
      <div className="w-full h-full flex flex-row justify-center items-center transition-all sm:flex-col">
        <div className="w-1/2 h-full flex flex-col items-center justify-center rounded-3xl sm:w-full">
          <img
            className="w-[85%] shadow-xl rounded-3xl transition-all ease-in-out sm:h-full"
            src={`/project-screenshots/placeholder.png`}
            alt=""
          />
        </div>
        <div className="w-[45%] flex flex-row items-center justify-center sm:py-12 sm:px-0 sm:w-full sm:flex-col">
          <div className="flex flex-col text-start mr-20 sm:mr-0">
            <h2 className="font-dm font-bold text-5xl mb-10 tracking-normal sm:text-center sm:mt-6">
            Project
            </h2>
            <p className="font-light text-2xl sm:text-center sm:px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <nav className="mt-16 w-full space-x-4 justify-start flex flex-row font-dmSub font-bold text-3xl items-start text-center sm:flex-col sm:space-x-0 sm:space-y-8 sm:justify-center sm:text-4xl sm:items-center sm:w-full">
            <a
                href=""
                className="opacity-80 transition-all ease-in-out text-start w-1/4 hover:opacity-100 sm:text-center sm:w-full sm:tracking-wide sm:opacity-100"
              >
                Visit GitHub
              </a>
              <a href="" className="opacity-80 transition-all ease-in-out text-start w-1/4 hover:opacity-100 sm:text-center sm:w-full sm:tracking-wide sm:opacity-100">
                View Demo
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
