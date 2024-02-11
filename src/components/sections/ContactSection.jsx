import { ValidationError, useForm } from "@formspree/react";
import { Section } from "./Section";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("mleqjqgn");
  return (
    <Section>
      <h2 className="text-3xl font-bold">Contact me</h2>
      <div className="mt-8 p-4 rounded-md bg-white bg-opacity-50 md:bg-opacity-100 w-96 max-w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center">Thanks for your message !</p>
          ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-3"
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              prefix="Email" 
              field="email"
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-3"
            >
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
              <ValidationError
                className="mt-1 text-red-500"
                errors={state.errors}
            />
            <button  disabled={state.submitting} className="bg-indigo-600 text-white py-2 px-8 rounded-lg font-bold text-lg mt-6 ">
              Submit
            </button>
          </form>
        )}   
      </div>
    </Section>
  );
};