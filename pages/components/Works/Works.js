import ProjectOne from "./Projects/ProjectOne/ProjectOne";
import ProjectTwo from "./Projects/ProjectTwo";
import ProjectThree from "./Projects/ProjectThree";

export default function Works() {
  return (
    <>
      <div
        id="works"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="w-full h-full mt-12 mb-32 flex items-center font-bold text-8xl justify-center font-dm tracking-[0.01em] sm:text-7xl sm:mb-20">
          Works
        </div> 
      </div>
      <div className="flex flex-col items-center justify-center w-full transition-all space-y-40 ease-in-out sm:space-y-16">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </>
  );
}
