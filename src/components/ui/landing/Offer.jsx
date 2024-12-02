import {
  FaRegLightbulb,
  FaDollarSign,
  FaShieldAlt,
  FaUserGraduate,
  FaUndo,
  FaRocket,
} from "react-icons/fa";

export default function Offer() {
  return (
    <div className="">
      {/* Title */}
      <h1 className="mb-8 text-center text-4xl font-extrabold">Why Me?</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* First Row */}
        <div className="rounded-lg border border-secondary-200 p-6 text-center">
          <FaRegLightbulb className="mx-auto text-4xl" />
          <h2 className="mt-4 text-2xl font-bold">Modern Design</h2>
          <p className="mt-4 text-md">
            Stay ahead with sleek, modern designs that make your website stand
            out.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 p-6 text-center">
          <FaDollarSign className="mx-auto text-4xl" />
          <h2 className="mt-4 text-2xl font-bold">Affordable</h2>
          <p className="mt-4 text-md">
            Get high-quality designs at an affordable price, perfect for your
            budget.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 p-6 text-center">
          <FaShieldAlt className="mx-auto text-4xl" />
          <h2 className="mt-4 text-2xl font-bold">Trusted</h2>
          <p className="mt-4 text-md">
            Rely on my proven track record of satisfied clients and successful
            projects.
          </p>
        </div>

        {/* Second Row */}
        <div className="rounded-lg border border-secondary-200 p-6 text-center">
          <FaUserGraduate className="mx-auto text-4xl" />
          <h2 className="mt-4 text-2xl font-bold">Student Friendly</h2>
          <p className="mt-4 text-md">
            Offering designs tailored to meet the unique needs of students and
            young professionals.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 p-6 text-center">
          <FaUndo className="mx-auto text-4xl" />
          <h2 className="mt-4 text-2xl font-bold">Free Revision</h2>
          <p className="mt-4 text-md">
            Enjoy free revisions until you&apos;re completely happy with the
            final design.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 p-6 text-center">
          <FaRocket className="mx-auto text-4xl" />
          <h2 className="mt-4 text-2xl font-bold">Fast</h2>
          <p className="mt-4 text-md">
            Get your project completed quickly without compromising quality.
          </p>
        </div>
      </div>
    </div>
  );
}
