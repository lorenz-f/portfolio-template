import Link from "next/link";

export default function Intro() {
  return (
    <>
        <main className="flex flex-row w-full items-center justify-center space-x-28 h-[41.5rem] sm:h-full sm:flex-col sm:space-x-0 sm:text-center sm:items-center sm:justify-center">
          <section className="w-1/3 flex flex-col justify-center text-right sm:px-0 sm:text-center sm:w-full sm:order-1">
            <h1 className="font-dmSub font-bold text-7xl mb-16 sm:mt-8">
              Welcome
            </h1>
          <div className="h-full w-full flex items-center justify-center">
            <div className="transition-all ease-in-out my-auto space-y-8 text-2xl font-subhead font-light sm:space-y-14 sm:px-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Pulvinar elementum{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener"
                  className="font-semibold"
                >
                  enim
                </a>
                ,{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener"
                  className="font-semibold"
                >
                  neque
                </a>
                , ac{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener"
                  className="font-semibold"
                >
                  volutpat
                </a>
                , Gravida dictum fusce ut placerat orci nulla, tincidunt vitae
                semper.
              </p>
              <p>
                Gravida dictum fusce ut{" "}
                <a href="#works" className="font-semibold">
                  placerat, orci
                </a>{" "}
                sit amet, venenatis urna cursus eget nunc scelerisque viverra
                mauris, sit amet{" "}
                <a href="#contact" className="font-semibold">
                  massa vitae tortor condimentum lacinia{" "}
                </a>
                ipsum dolor sit amet consectetur adipiscing elit duis.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col font-dm w-1/3 h-full text-center justify-center sm:order-0 sm:space-y-12 sm:place-self-center sm:w-full sm:my-8 sm:items-center">
          <div className="w-[17.5rem] h-[17.5rem] bg-[#C19A6B] flex items-center justify-center text-4xl rounded-full sm:w-52 sm:h-52">
            <p className="text-5xl">Your Image Here</p>
          </div>
          <nav className="mt-12 space-y-3 w-[17.5rem] flex flex-col text-3xl font-dmSub font-bold sm:mt-0 sm:space-y-4 sm:text-4xl sm:w-1/2">
            <Link
              href="#works"
              className="opacity-100 transition-all ease-in-out tracking-[0.010rem] w-full hover:tracking-wide"
            >
              My Works
            </Link>
            <Link
              href="#skills"
              className="opacity-100 transition-all ease-in-out tracking-[0.010rem] w-full hover:tracking-wide"
            >
              What I Use
            </Link>
            <Link
              href="#contact"
              className="opacity-100 transition-all ease-in-out tracking-normal w-full hover:tracking-wide"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}
