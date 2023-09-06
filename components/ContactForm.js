import { useForm } from "@formspree/react";
import Link from "next/link";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("placeholder"); // use your formspree ID here

  return (
    <>
      <form
        id="contact"
        className="flex flex-col items-center justify-center text-center w-screen sm:mt-12"
        onSubmit={handleSubmit}
      >
        <h1 className="font-dmSub text-8xl font-bold text-gray-900 mb-16 sm:mb-12 sm:text-7xl">
          Contact
        </h1>

        <label htmlFor="message">Email</label>
        <input
          className="rounded-md h-12 px-[.125] w-80 mb-[2rem] opacity-70 transition-all text-center sm:w-4/5"
          id="email"
          type="email"
          name="email"
        />
        <label htmlFor="message">Lorem ipsum dolor sit?</label>
        <textarea
          className="rounded-md p-2 h-48 w-80 opacity-70 transition-all text-center sm:w-4/5"
          id="message"
          name="message"
        />
        <button
          className="mb-10 mt-12 font-dm text-black text-4xl font-bold w-40 sm:w-screen h-16 transition-all opacity-100 hover:tracking-wide"
          type="submit"
        >
          {state.succeeded ? "Thank you!" : "Submit"}
        </button>
      </form>
      <footer className="h-full border text-base flex flex-row font-inter text-center text-gray-900 mb-1 items-center justify-center">
        <p>&#169; 2023</p>
        <Link
          className="flex items-center justify-center mr-7 ml-8 sm:ml-7 text-center place-self-center"
          href="/"
        >
          <h1>Back to top</h1>
        </Link>
        {/* link to your github */}
        <a href="#" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </>
  );
}
