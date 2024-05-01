"use client";

import CustomButton from "@/components/CustomButton";

const Contact = () => {
  const handleSubmit = () => {}

  return (
    <div className="md:h-[82vh] pt-4 w-full">
      <h1 className="text-3xl font-semibold md:text-4xl text-center">
        Contact us
      </h1>

      <div className="mt-6 mb-4 px-10 flex flex-col md:flex-row gap-[40px]">
        <div className="flex-1">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1 text-left">
              <label
                htmlFor="name"
                className="text-md font-medium text-gray-700"
              >
                Your name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-1 text-left">
              <label
                htmlFor="email"
                className="text-md font-medium text-gray-700"
              >
                Your email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-1 text-left">
              <label
                htmlFor="message"
                className="text-md font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center">
              <CustomButton
                value="Submit"
                customClass="secondary"
                type="submit"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col flex-1 items-center">
          <h1 className="text-center text-2xl font-semibold">
            Also reach us through:
          </h1>
          <div className="mt-4">
            <h2 className="text-center text-xl font-semibold">Telephone:</h2>
            <ul className="mt-2">
              <li>+254727632463</li>
              <li>+254708905136</li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-center text-xl font-semibold">Social Media:</h2>
            <ul className="mt-2 flex gap-10">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
