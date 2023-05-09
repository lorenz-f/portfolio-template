import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="w-full h-32 sm:h-full font-bold flex flex-col bg-[#E6E3D3]">
        <h1 className="font-dm text-9xl items-center text-center justify-center sm:text-8xl">
          Name
        </h1>
        <h2 className="font-dmSub tracking-normal relative bottom-4 text-center">
          Profession
        </h2>
      </header>
      <nav className="font-dmSub font-bold mt-3 text-4xl w-full h-full text-center justify-center items-center tracking-[0.021em] flex flex-row space-x-6 sm:hidden">
        <Link
          href="#works"
          className="cursor-pointer tracking-tight w-32 pl-4 transition-all ease-in-out text-center hover:tracking-normal"
        >
          Works
        </Link>
        <Link
          href="#skills"
          className="cursor-pointer tracking-tight w-32 transition-all ease-in-out text-center hover:tracking-normal"
        >
          Skills
        </Link>
         <div className = "nav-divider"/>
        <a
          href=""
          className="cursor-pointer tracking-tight w-32 pl-4 transition-all ease-in-out text-center hover:tracking-normal"
          target = "_blank"
          rel = "noreferrer"
        >
          GitHub
        </a>
        <Link
          href="#contact"
          className="tracking-tight cursor-pointer w-32 transition-all ease-in-out text-center hover:tracking-normal"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
