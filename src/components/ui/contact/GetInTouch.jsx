const GetInTouch = () => {
  return (
    <div className="mb-24 mt-12">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Send a Message
      </h2>
      <form
        action="https://formspree.io/f/mwkzjxjz" // Replace this with your Formspree endpoint or API endpoint
        method="POST"
        className="mx-auto max-w-lg rounded-lg border border-black p-8 dark:border-white"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-black px-4 py-2 dark:border-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 w-full rounded-lg border border-black px-4 py-2 dark:border-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="mt-2 w-full rounded-lg border border-black px-4 py-2 dark:border-white"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
