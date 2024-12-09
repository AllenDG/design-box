import { FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Email Card */}
      <div className="rounded-lg border border-secondary-200 p-6 shadow-lg transition duration-300 hover:shadow-xl">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Send an Email
        </h2>
        <p className="mb-4 text-center">
          Click the button below to send me an email:
        </p>
        <div className="text-center">
          <a
            href="mailto:Allenwalterfiestada@gmail.com"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <FaEnvelope className="mr-2" /> Email Me
          </a>
        </div>
      </div>

      {/* Instagram Card */}
      <div className="rounded-lg border border-secondary-200 p-6 shadow-lg transition duration-300 hover:shadow-xl">
        <h2 className="mb-4 text-center text-xl font-semibold">Instagram</h2>
        <p className="mb-4 text-center">Follow me on Instagram:</p>
        <div className="text-center">
          <a
            href="https://www.instagram.com/pcommissioner_"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <FaInstagram className="mr-2" /> @pcommissioner_
          </a>
        </div>
      </div>

      {/* TikTok Card */}
      <div className="rounded-lg border border-secondary-200 p-6 shadow-lg transition duration-300 hover:shadow-xl">
        <h2 className="mb-4 text-center text-xl font-semibold">TikTok</h2>
        <p className="mb-4 text-center">Follow me on TikTok:</p>
        <div className="text-center">
          <a
            href="https://www.tiktok.com/@pickaro"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <FaTiktok className="mr-2" /> @pickaro_
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
