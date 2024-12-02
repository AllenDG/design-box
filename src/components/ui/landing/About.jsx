export default function About() {
  return (
    <div className="mt-28 grid gap-4 md:grid-cols-2 md:grid-rows-2">
      {/* First Row - First Column (Aligned to the left) */}
      <div className="mb-20 text-left">
        <h1 className="text-4xl font-extrabold ">
          Get the website you deserve
        </h1>
        <p className="mb-4 mt-4 text-lg ">
          Transform your ideas into stunning online experiences with modern,
          responsive designs tailored just for you.
        </p>
        <button className="rounded-lg border-2 border-secondary-100 px-4 py-2 text-sm font-bold text-secondary-600 transition duration-300 hover:bg-secondary-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-secondary-800 dark:hover:text-secondary-100">
          Let&apos;s Work Together
        </button>
      </div>

      <div className="text-right md:col-start-2"></div>

      <div className="text-left"></div>

      <div className="text-right md:col-start-2">
        <h1 className="text-4xl font-extrabold ">
          Design your project
        </h1>
        <p className="mb-4 mt-4 text-lg">
          Bring your visions to life with seamless functionality and
          user-friendly interfaces, designed to make an impact.
        </p>
        <button className="rounded-lg border-2 border-secondary-100 px-4 py-2 text-sm font-bold text-secondary-600 transition duration-300 hover:bg-secondary-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-secondary-800 dark:hover:text-secondary-100">
          Let&apos;s Work Together
        </button>
      </div>
    </div>
  );
}
