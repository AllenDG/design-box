import servicesData from "@/data/services";

export default function Services() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {servicesData.services.map((service, index) => (
        <div
          key={index}
          className="rounded-lg border border-secondary-600 p-6 dark:border-white"
        >
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
            {service.category}
          </h2>
          <ul className="space-y-2">
            {service.items.map((item, idx) => (
              <li
                key={idx}
                className="rounded-md border border-secondary-600 p-3 text-center text-gray-800 dark:border-white dark:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
