export const metadata = {
  title: "Privacy Policy | Dearo Venture Canada Ltd",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-gray-50 py-20 mt-16 sm:mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          At <strong>Dearo Venture Canada Ltd</strong>, we respect your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you interact with our website and services.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          We may collect personal information such as your name, email address,
          phone number, corporate affiliation, and financial inquiry details when you interact with our website or submit contact forms.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-3">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Your information is used strictly to provide and improve our venture financial services, respond to investment inquiries, process credit applications, and communicate important corporate updates.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Data Security
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          We implement rigorous technical and organizational security measures to protect your data against unauthorized access, loss, alteration, or disclosure.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Third-Party Sharing
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          <strong>Dearo Venture Canada Ltd</strong> does not sell, trade, or rent your personal information to third parties. Data is shared strictly when required by law or necessary to execute approved transactions.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:info@dearoventurecanada.com" className="text-blue-600 font-semibold hover:underline">
            info@dearoventurecanada.com
          </a>.
        </p>
      </div>
    </section>
  );
}
