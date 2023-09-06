import ProjectOne from "./Projects/ProjectOne";
import ProjectTwo from "./Projects/ProjectTwo";
import ProjectThree from "./Projects/ProjectThree";
import ProjectFour from "./Projects/ProjectFour";

export default function Works() {
  return (
    <>
      <div
        id="works"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <h2 className="w-full h-full mt-12 mb-16 flex items-center font-bold text-8xl justify-center sm:justify-start sm:pl-8 font-dm tracking-[0.01em] sm:text-6xl sm:mb-8 sm:mt-20">
          Works
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full transition-all space-y-40 ease-in-out sm:space-y-10">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
      </div>
    </>
  );
}
