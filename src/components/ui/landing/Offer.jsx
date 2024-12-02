export default function Offer() {
  return (
    <div className="bg-gray-100 p-8">
      {/* Title */}
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
        Why Me?
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* First Row */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Modern Design
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay ahead with sleek, modern designs that make your website stand
            out.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Affordable</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get high-quality designs at an affordable price, perfect for your
            budget.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Trusted</h2>
          <p className="mt-4 text-lg text-gray-600">
            Rely on my proven track record of satisfied clients and successful
            projects.
          </p>
        </div>

        {/* Second Row */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Student Friendly
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Offering designs tailored to meet the unique needs of students and
            young professionals.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Free Revision
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enjoy free revisions until you&apos;re completely happy with the
            final design.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Fast</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get your project completed quickly without compromising quality.
          </p>
        </div>
      </div>
    </div>
  );
}
