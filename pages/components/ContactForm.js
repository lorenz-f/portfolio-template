import { useForm } from "@formspree/react";
import Link from "next/link";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR-FORMSPREE-ID"); // formspree form id here

  return (
    <>
       <form
        id="contact"
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="font-dmSub text-8xl font-bold text-gray-900 mb-12 sm:text-7xl sm:mt-12">
          Contact
        </h1> 
        <label className="font-inter" htmlFor="email" required>
          Email
        </label>
        <input
          className="rounded-md h-12 px-[.125] w-80 mb-[2rem] opacity-70 transition-all text-center sm:w-4/5"
          id="email"
          type="email"
          name="email"
        />
        <label htmlFor="email">How may I help?</label>
        <textarea
          className="rounded-md p-2 h-48 w-80 opacity-70 transition-all text-center sm:w-4/5"
          id="message"
          name="message"
        />
        <button
          className="mb-10 mt-8 rounded-3xl font-dm text-black text-4xl rounded-full font-bold w-40 h-16 transition-all opacity-100 hover:tracking-wide"
          type="submit"
        >
          {state.succeeded ? "Thank you!" : "Submit"}
        </button>
      </form>
      <footer className="w-full h-full border text-base flex flex-row font-inter text-center text-gray-900 mb-1 items-center justify-center">
        <p>&#169; 2023</p>
        <Link className = "flex items-center justify-center mr-7 ml-8 sm:ml-6 text-center place-self-center" href="/">
          <h1>
            Back to top
          </h1>
        </Link>
        <a href = "" target = "_blank" rel = "noreferrer">GitHub</a>
      </footer>
    </>
  );
}
