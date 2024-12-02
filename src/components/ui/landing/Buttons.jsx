// Buttons.jsx
export default function Buttons() {
  return (
    <div className="flex space-x-4">
      {/* Learn More Button */}
      <button
        className="rounded-lg bg-secondary-300 px-6 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-blue-600"
        onClick={() => (window.location.href = "#learn-more")}
      >
        Learn More
      </button>

      {/* Portfolio Button */}
      <button
        className="rounded-lg bg-secondary-300 px-6 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-gray-900"
        onClick={() => (window.location.href = "#portfolio")}
      >
        Portfolio
      </button>
    </div>
  );
}
