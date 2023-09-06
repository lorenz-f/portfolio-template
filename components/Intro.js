import Link from "next/link";

export default function Intro() {
  return (
    <>
      <main className="flex flex-row w-full items-center justify-center space-x-28 h-[41.5rem] sm:h-full sm:flex-col sm:space-x-0 sm:items-center sm:justify-center">
        <section className="w-1/3 flex flex-col justify-center sm:px-0 sm:w-full sm:order-1">
          <h1 className="font-dmSub font-bold text-7xl sm:text-5xl mb-12 sm:mt-20 sm:mb-8 sm:text-left text-right sm:pl-8">
            Lorem Ipsum
          </h1>
          <div className="h-full w-full flex items-center justify-center">
            <div
              className="intro transition-all ease-in-out my-auto space-y-8 text-2xl sm:text-base font-subhead font-light sm:space-y-6 sm:text-left text-right sm:px-8"
              style={{ lineHeight: "1.35" }}
            >
              <p>
                Lorem ipsum dolor sit{" "}
                <Link href="#works" className="font-semibold">
                  amet, consectetur adipiscing
                </Link>
                , sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold"
                >
                  Ut enim
                </a>
                ,{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold"
                >
                  ad minim
                </a>{" "}
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Nisi ut aliquip ex ea <br className="sm:hidden" />
                <Link href="#works" className="font-semibold">
                  commodo consequat.
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col font-dm w-1/3 h-full text-center justify-center sm:order-0 sm:place-self-center sm:w-full sm:items-center">
          <div className="w-[17.5rem] h-[17.5rem] bg-[#C19A6B] flex items-center justify-center text-4xl rounded-full sm:w-[11rem] sm:h-[11rem] sm:mt-12">
            <p className="text-5xl">Your Image Here</p>
          </div>
          <div className="w-full h-32 sm:h-full font-bold bg-[#E6E3D3] hidden sm:flex sm:flex-col space-y-2">
            <h1 className="font-dm text-6xl items-center text-center justify-center">
              Your Name
            </h1>
            <h2 className="font-dmSub tracking-normal relative bottom-4 text-center">
              Your Profession
            </h2>
          </div>
          <nav className="mt-12 space-y-3 w-[17.5rem] flex flex-col text-3xl sm:text-2xl font-dmSub font-bold sm:flex-row sm:space-y-0 sm:items-center sm:justify-center">
            <Link
              href="#works"
              className="opacity-100 transition-all ease-in-out tracking-[0.010rem] w-full hover:tracking-wide"
            >
              Works
            </Link>
            <span className="mx-4 hidden sm:flex">&#8226;</span>
            <Link
              href="#skills"
              className="opacity-100 transition-all ease-in-out tracking-[0.010rem] w-full hover:tracking-wide"
            >
              Skills
            </Link>
            <span className="mx-4 hidden sm:flex">&#8226;</span>
            <Link
              href="#contact"
              className="opacity-100 transition-all ease-in-out tracking-[0.010rem] w-full hover:tracking-wide"
            >
              Contact
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}
