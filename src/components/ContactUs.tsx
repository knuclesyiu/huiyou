import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contactus"
      className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-primary)" }} // inline style for CSS variable
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 justify-center items-center">
        Contact Us
      </h1>

      <form
        action="/submit-contact"
        method="POST"
        className="w-full max-w-lg flex flex-col gap-4"
      >
        <label htmlFor="name" className="text-white font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="p-2 rounded border border-gray-300 text-white"
        />

        <label htmlFor="email" className="text-white font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          className="p-2 rounded border border-gray-300 text-white"
        />

        <label htmlFor="message" className="text-white font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave your message!"
          required
          className="p-2 rounded border border-gray-300 text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-white text-primary font-bold py-2 px-4 rounded hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
