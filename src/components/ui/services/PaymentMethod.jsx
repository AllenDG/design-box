export default function PaymentMethod() {
  return (
    <div className="mt-12 rounded-lg border-2 border-gray-200 bg-blue-50 p-8 shadow-xl dark:border-white dark:bg-blue-900">
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Payment Method
      </h2>
      <div className="mb-4 flex flex-col items-center">
        <img
          src="https://images.dwncdn.net/images/t_app-icon-l/p/efe1533f-e7f4-486e-9d21-99fe31735638/1226331849/2057_4-76728741-logo"
          alt="GCash Icon"
          className="mb-4 h-16 w-16"
        />
        <p className="text-center text-xl">
          We accept payments through <strong>GCash</strong> only.
        </p>
      </div>
      <p className="text-md text-center">
        <strong>Note:</strong> Payment must be made in advance. Files will be
        sent only after the payment is successfully processed.
      </p>
    </div>
  );
}
