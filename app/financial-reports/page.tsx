"use client";

import { useState, useRef } from "react";

export default function FinancialReportsPage() {
  const [openYear, setOpenYear] = useState<number | null>(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const reports = [
    {
      year: 2025,
      description:
        "Strong asset growth and improved profitability supported by strategic capital structuring.",
      totalAssets: "1,721.14 Mn",
      startupCapital: "100 Mn",
      directorsContribution: "552 Mn",
      liabilities: "828.44 Mn (Directors’ Loans & Deferred Interest)",
      totalEquity: "768.70 Mn",
      profitAfterTax: "55.39 Mn",
      pdf: "/reports/docA.pdf",
    },
    {
      year: 2024,
      description:
        "Continued expansion with stable equity growth and improved operational performance.",
      totalAssets: "849.90 Mn",
      startupCapital: "100 Mn",
      directorsContribution: "552 Mn",
      totalEquity: "713.34 Mn",
      profitAfterTax: "45.95 Mn",
      pdf: "/reports/Audited Financial Statement 22-23.pdf",
    },
    {
      year: 2023,
      description:
        "Foundation year focused on capital formation, asset buildup, and initial profitability.",
      totalAssets: "595.30 Mn",
      startupCapital: "100 Mn",
      directorsContribution: "470 Mn",
      totalEquity: "585.30 Mn",
      profitAfterTax: "15.30 Mn",
      pdf: "/reports/Audited Financial Statement 23-24.pdf",
    },
  ];

  const toggleYear = (year: number) => {
    setOpenYear((prev) => (prev === year ? null : year));
    const el = cardRefs.current[year];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Financial Reports
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Transparency You Can Trust
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Dearo Investment Limited</strong>, we believe in complete
            financial transparency. Our financial reports provide a clear view
            of our performance, risk management practices, and growth strategy—
            ensuring investors and stakeholders have the insights they need to
            make informed decisions.
          </p>
        </div>

        {/* ================= REPORT DETAILS ================= */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You’ll Find in Our Reports
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Annual & Quarterly Financial Statements",
                text: "Balance sheets, income statements, and cash flow statements prepared under international accounting standards.",
              },
              {
                title: "Performance Highlights",
                text: "Key metrics, growth trends, and financial ratios reflecting operational efficiency and profitability.",
              },
              {
                title: "Risk & Compliance Overview",
                text: "Credit, market, and operational risk insights with mitigation strategies and regulatory compliance.",
              },
              {
                title: "Investment & Portfolio Reports",
                text: "Analysis of lending portfolios, sector exposure, and ESG impact outcomes.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= YEAR WISE DOWNLOADS ================= */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Download Financial Reports by Year
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {reports.map((report) => (
              <div
                key={report.year}
                ref={(el) => { cardRefs.current[report.year] = el; }} // ✅ TypeScript fixed
                className="bg-white p-10 rounded-2xl border shadow-sm text-center"
              >
                <h3 className="text-2xl font-bold mb-3">{report.year}</h3>
                <p className="text-gray-600 text-sm mb-6">{report.description}</p>

                <button
                  className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold mb-4 hover:bg-gray-800 transition"
                  onClick={() => toggleYear(report.year)}
                >
                  {openYear === report.year
                    ? "Hide Financial Summary"
                    : "View Financial Summary"}
                </button>

                {openYear === report.year && (
                  <ul className="mt-6 text-gray-700 space-y-2 text-sm text-left">
                    <li>
                      <strong>Total Assets:</strong> {report.totalAssets}
                    </li>
                    <li>
                      <strong>Start Up Capital:</strong> {report.startupCapital}
                    </li>
                    <li>
                      <strong>Directors’ Share Contribution:</strong>{" "}
                      {report.directorsContribution}
                    </li>
                    {report.liabilities && (
                      <li>
                        <strong>Liabilities:</strong> {report.liabilities}
                      </li>
                    )}
                    <li>
                      <strong>Total Equity:</strong> {report.totalEquity}
                    </li>
                    <li>
                      <strong>Profit After Tax:</strong> {report.profitAfterTax}
                    </li>
                  </ul>
                )}

                {/* <a
                  href={report.pdf}
                  download
                  className="inline-block mt-5 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Download Annual Report ({report.year})
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
