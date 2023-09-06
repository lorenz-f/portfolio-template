import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="w-full h-32 sm:h-full font-bold flex flex-col sm:hidden">
        <h1 className="font-dm text-9xl items-center text-center justify-center">
          Your Name
        </h1>
        <h2 className="font-dmSub tracking-normal relative bottom-4 text-center">
          Your Profession
        </h2>
      </header>
      <nav className="font-dmSub font-bold mt-3 text-4xl w-full h-full justify-center items-center tracking-[0.021em] flex flex-row space-x-6 sm:hidden">
        <Link
          href="#works"
          className="cursor-pointer tracking-tight w-32 transition-all ease-in-out pl-4 text-center hover:tracking-normal"
        >
          Works
        </Link>
        <Link
          href="#skills"
          className="cursor-pointer tracking-tight w-32 transition-all ease-inout text-center hover:tracking-normal"
        >
          Skills
        </Link>
        <div className="nav-divider" />
        <a
          href="https://github.com/lorenz-f"
          className="cursor-pointer tracking-tight w-32 transition-all ease-in-out pl-4 text-center hover:tracking-normal"
          target="_blank"
          rel="noreferrer"
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
