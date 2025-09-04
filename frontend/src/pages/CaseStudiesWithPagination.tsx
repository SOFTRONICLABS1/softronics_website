import React, { useMemo, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

type Study = {
  id: number;
  tag: string;
  title: string;
  blurb: string;
  img: string;
};

const PAGE_SIZE = 6;

const ALL_STUDIES: Study[] = [
  // --- add/replace with your real items; need >6 to see pagination ---
  {
    id: 1,
    tag: "Fintech",
    title:
      "Streamlining B2B payments and invoicing through automation and real-time processing",
    blurb:
      "Enabled a B2B payments platform to simplify complex financial workflows, delivering faster and more flexible payment experiences…",
    img: "https://images.unsplash.com/photo-1634446815840-198c164d3fb2",
  },
  {
    id: 2,
    tag: "Fintech",
    title:
      "Real estate lender cuts loan processing time by 35% with platform overhaul",
    blurb:
      "Modernized legacy systems, automated workflows, and migrated to AWS — reducing loan processing time by 35%…",
    img: "https://images.unsplash.com/photo-1607082349566-1873421bba12",
  },
  {
    id: 3,
    tag: "Retail",
    title: "Retail ML boosts forecast accuracy by 18%",
    blurb:
      "Built end-to-end demand forecasting pipelines, improving accuracy and reducing stockouts across 2K+ SKUs…",
    img: "https://images.unsplash.com/photo-1521334726092-b509a19597c6",
  },
  {
    id: 4,
    tag: "HealthTech",
    title: "HIPAA-ready patient portal with 0 P1 incidents in 12 months",
    blurb:
      "Replatformed to a zero-trust architecture with automated compliance checks and end-to-end observability…",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    id: 5,
    tag: "Logistics",
    title: "Route optimizer trims line-haul costs by 22%",
    blurb:
      "Developed a mixed-integer optimizer and dispatch UI that reduced empty miles and improved OTIF…",
    img: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
  },
  {
    id: 6,
    tag: "EdTech",
    title: "Video infra scaled to 1.1M DAU with 40% lower egress cost",
    blurb:
      "ABR tuning + regional caches + fine-grained CDN rules delivered smoother playback and lower cost…",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
  },
  {
    id: 7,
    tag: "Travel",
    title: "Personalization lifts conversion by 11% on mobile",
    blurb:
      "Real-time feature store + bandits for card sorting; significant uplift on last-click bookings…",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7",
  },
  {
    id: 8,
    tag: "SaaS",
    title: "Billing revamp cuts invoice disputes by 63%",
    blurb:
      "Event-based metering with human-readable diff statements and Slack-native approvals…",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    id: 9,
    tag: "Gaming",
    title: "Anti-cheat telemetry reduces abuse by 70%",
    blurb:
      "Edge detection + anomaly scoring + rapid ban appeals pipeline lowered false positives…",
    img: "https://images.unsplash.com/photo-1605901309584-818e25960a8b",
  },
  // …add more as needed
];

const CaseStudiesWithPagination: React.FC = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(ALL_STUDIES.length / PAGE_SIZE));

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return ALL_STUDIES.slice(start, start + PAGE_SIZE);
  }, [page]);

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <section className="bg-hero relative py-16 px-4 sm:px-6 md:px-12 text-brand-gray-dark overflow-hidden">
      {/* subtle left ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[900px] w-[900px] rounded-full bg-gradient-to-tr from-[#4ECCEF33] to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading + Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-gray-dark">
            Case Studies
          </h2>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
            {/* Offerings */}
            <div className="relative w-full sm:w-auto min-w-0">
              <select className="appearance-none border border-brand-orange rounded-md px-4 py-2 pr-8 bg-white text-brand-gray-dark focus:outline-none w-full sm:w-auto min-w-[140px]">
                <option>Select Option</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gray-dark pointer-events-none" />
              <span className="absolute -top-3 left-2 text-xs text-brand-gray-dark service-card-gradient-1 px-1 rounded">
                Offerings
              </span>
            </div>
            {/* Industry */}
            <div className="relative w-full sm:w-auto min-w-0">
              <select className="appearance-none border border-brand-orange rounded-md px-4 py-2 pr-8 bg-white text-brand-gray-dark focus:outline-none w-full sm:w-auto min-w-[140px]">
                <option>Select Option</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gray-dark pointer-events-none" />
              <span className="absolute -top-3 left-2 text-xs text-brand-gray-dark service-card-gradient-1 px-1 rounded">
                Industry
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pageItems.map((cs) => (
            <article
              key={cs.id}
              className="rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow ring-1 ring-brand-orange/20 bg-white/70 min-w-0"
            >
              <img
                src={cs.img}
                alt={cs.title}
                className="rounded-lg w-full h-48 sm:h-44 md:h-40 xl:h-44 object-cover mb-4"
              />
              <span className="inline-block service-card-gradient-1 text-xs font-semibold px-2 py-1 rounded mb-3 text-brand-gray-dark">
                {cs.tag}
              </span>
              <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug text-brand-gray-dark break-words">
                {cs.title}
              </h3>
              <p className="mb-4 line-clamp-3 text-sm sm:text-base text-brand-gray-dark/80 break-words">
                {cs.blurb}
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium hover:underline text-brand-orange text-sm sm:text-base"
              >
                Read More <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0" />
              </a>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2"
          aria-label="Pagination"
        >
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="w-full sm:w-auto px-3 py-2 rounded-md border text-sm text-white disabled:opacity-40 transition-all duration-300 min-w-[80px]"
            style={{
              background: "var(--brand-orange)",
              borderColor: "var(--brand-orange)",
              boxShadow: "0 2px 8px var(--shadow-orange)",
            }}
          >
            Prev
          </button>

          <div className="flex items-center gap-1 overflow-x-auto py-2 sm:py-0 max-w-full">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  aria-current={active ? "page" : undefined}
                  className="h-9 min-w-[36px] px-3 rounded-md text-sm border transition-all duration-300 flex-shrink-0"
                  style={{
                    background: active
                      ? "var(--brand-orange)"
                      : "var(--gradient-orange-primary)",
                    borderColor: "var(--brand-orange)",
                    color: active ? "white" : "var(--brand-gray-dark)",
                    boxShadow: active
                      ? "0 4px 15px var(--shadow-orange)"
                      : "0 2px 8px var(--shadow-orange)",
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="w-full sm:w-auto px-3 py-2 rounded-md border text-sm text-white disabled:opacity-40 transition-all duration-300 min-w-[80px]"
            style={{
              background: "var(--brand-orange)",
              borderColor: "var(--brand-orange)",
              boxShadow: "0 2px 8px var(--shadow-orange)",
            }}
          >
            Next
          </button>
        </nav>

        <p className="mt-3 text-center text-xs text-brand-gray-dark/70">
          Showing {(page - 1) * PAGE_SIZE + 1}–
          {Math.min(page * PAGE_SIZE, ALL_STUDIES.length)} of{" "}
          {ALL_STUDIES.length}
        </p>
      </div>
    </section>
  );
};

export default CaseStudiesWithPagination;
