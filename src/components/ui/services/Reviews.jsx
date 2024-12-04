import reviews from "@/data/reviewsData.json"; // Import the JSON data

export default function Reviews() {
  return (
    <section className="mt-10 py-12">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={`review-${index}`}
              className="flex flex-col items-center rounded-lg border border-secondary-200 p-6 transition duration-300 dark:border-white"
            >
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="mb-4 h-20 w-20 rounded-full border-4 border-primary-500 dark:border-white"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {review.name}
              </h3>
              <p className="mt-4 text-center text-gray-800 dark:text-white">
                {review.review}
              </p>
              <div className="mt-4 flex items-center space-x-1">
                {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                  <span key={`star-${index}-${i}`} className="text-yellow-500">
                    ★
                  </span>
                ))}
                {review.rating % 1 !== 0 && (
                  <span className="text-yellow-500">☆</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
