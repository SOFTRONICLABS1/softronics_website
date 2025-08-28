import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Story = {
  id: number;
  kicker: string;
  title: string;
  summary: string;
  image: string;
  href?: string;
};

type Perspective = {
  id: number;
  badge: string;
  title: string;
  blurb: string;
  by: string;
  date: string;
  cover?: string;
  cta?: { label: string; href: string };
};

const AUTOPLAY_MS = 4200;

const FeaturedStories: React.FC = () => {
  // ------- DATA (replace with your API as needed) -------
  const stories = useMemo<Story[]>(
    () => [
      {
        id: 1,
        kicker: "Supply chain giant used AI to reduce shipment costs by 20%",
        title: "Softronic Labs Ranks #1 in AI on Clutch 2025 Spring Edition",
        summary:
          "What does it take to cut shipment costs by 20% and speed up deliveries by 25%? This case study unpacks how a top supply chain operator partnered with Simform to build a connected supply chain platform that fuses edge intelligence, IoT, and cloud-native architecture. From battery life gains to fewer connectivity disruptions, the results show what's possible when infrastructure and insight align. If you're exploring smarter operations, this succinct overview points toward actionable next steps.",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        kicker: "Enterprise data fabric improves SLA adherence by 35%",
        title: "How platform thinking cuts cost of change in large orgs",
        summary:
          "Clutch's 2025 rankings are in, and Simform has been named the #1 AI services provider globally. The recognition emphasizes our strength in delivering AI expertise with measurable results. We break down how Clutch evaluated hundreds of vendors and why Simform's focus on engineering-led delivery stood out. If you're researching vendors for your AI initiatives and want to understand what credibility looks like in this space, this article provides concise insights and clear considerations to make a decision.",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        kicker: "Fintech scales to 10M MAU with zero-downtime releases",
        title: "Shipping faster with DevEx guardrails on Kubernetes",
        summary:
          "Simform is now an Advanced Tier Partner in Datadog's global ecosystem. It showcases our ability to deliver full-stack observability for modern cloud-native systems. This post breaks down what the partnership level means, how it improves monitoring capabilities for our clients, and where it fits into broader platform engineering goals. If you're scaling distributed systems or seeking faster root-cause analysis across services, A quick look at how better visibility and response work in action.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    []
  );

  const perspectives = useMemo<Perspective[]>(
    () => [
      {
        id: 1,
        badge: "Product Engineering",
        title: "CTO's Guide to the Total Cost of Ownership (TCO) of …",
        blurb:
          "A practical map of cloud + people + platform costs for durable product decisions.",
        by: "Hiren Dhaduk",
        date: "Nov 20, 2023",
      },
      {
        id: 2,
        badge: "Product Engineering",
        title: "The Roadmap to Digital Product Development: 6 Stages…",
        blurb:
          "From discovery to growth: artifacts, activities, and ownership for execution velocity.",
        by: "Hiren Dhaduk",
        date: "May 29, 2023",
      },
      {
        id: 3,
        badge: "Ebook",
        title: "CTOs Handbook to Build an Enterprise Kubernetes Strategy",
        blurb: "Learn from GitHub, Spotify, and other tech superpowers.",
        by: "Softronic Labs",
        date: "—",
        cover:
          "https://images.unsplash.com/photo-1714146682506-d6f86fe8517a?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cta: { label: "Download", href: "#" },
      },
      {
        id: 4,
        badge: "Product Engineering",
        title: "Designing data contracts for reliable analytics at scale",
        blurb: "Schemas, versioning, producer ownership—keep downstream calm.",
        by: "Team",
        date: "Jan 12, 2024",
      },
    ],
    []
  );

  // ------- FEATURED (vertical auto carousel) -------
  const [vIndex, setVIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const nextV = () => setVIndex((i) => (i + 1) % stories.length);
  const prevV = () =>
    setVIndex((i) => (i - 1 + stories.length) % stories.length);

  const startAuto = () => {
    stopAuto();
    timerRef.current = window.setInterval(nextV, AUTOPLAY_MS);
  };
  const stopAuto = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") nextV();
      if (e.key === "ArrowUp") prevV();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ------- PERSPECTIVE (horizontal carousel) -------
  const [hIndex, setHIndex] = useState(0);
  const perView = usePerView(); // 1 / 2 / 3
  const maxIndex = Math.max(0, perspectives.length - perView);
  const clampH = (n: number) => Math.max(0, Math.min(maxIndex, n));

  return (
    <section className="relative w-full overflow-hidden bg-[#38106F]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* ===== TITLE ===== */}
        <h2 className="text-white text-3xl md:text-[40px] font-bold tracking-tight">
          Featured Stories
        </h2>

        {/* ===== VERTICAL CAROUSEL WITH IMAGES ===== */}
        <div
          className="mt-6 rounded bg-[#D9C3FF] p-3 sm:p-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_300px] md:grid-cols-[auto_1fr] gap-3 md:gap-6">
            {/* Progress indicator */}
            <div className="relative hidden md:flex flex-col items-center justify-center pl-1 my-2 gap-1">
              {stories.map((_, i) => (
                <div
                  key={i}
                  className="relative w-1.5 h-[90px] rounded-full bg-white/40 overflow-hidden"
                >
                  {i === vIndex && (
                    <div
                      key={`${vIndex}-${i}`}
                      className="w-full rounded-full bg-purple-600 animate-pulse"
                      style={{
                        height: "100%",
                        animation: `progress-fill ${AUTOPLAY_MS}ms linear`,
                      }}
                    />
                  )}
                  {i < vIndex && (
                    <div className="w-full h-full rounded-full " />
                  )}
                </div>
              ))}
            </div>

            {/* Content area */}
            <div className="relative overflow-hidden rounded">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`transition-all duration-500 overflow-hidden ${
                    index === vIndex ? "opacity-100 h-auto" : "opacity-60 h-16"
                  }`}
                >
                  <div
                    className={`cursor-pointer ${
                      index === vIndex ? "bg-[#D9C3FF]" : "bg-purple-[#D9C3FF]"
                    } p-4 sm:p-5`}
                    onClick={() => setVIndex(index)}
                  >
                    <div className="flex flex-col">
                      <h3 className="text-[18px] md:text-[20px] font-semibold text-purple-900">
                        {story.title}
                      </h3>

                      {index === vIndex && (
                        <div className="opacity-100 transition-opacity duration-300 delay-200">
                          <p className="mt-3 text-[14px] leading-6 text-purple-800">
                            {story.summary}
                          </p>

                          <a
                            href={story.href || "#"}
                            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-white transition"
                          >
                            Read More{" "}
                            <span className="translate-y-[1px]">↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image section - Now visible on larger screens */}
            <div className="hidden lg:block">
              <div className="relative h-full min-h-[300px] rounded overflow-hidden">
                {stories.map((story, index) => (
                  <div
                    key={story.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === vIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback in case image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Image+${
                          index + 1
                        }`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile image section */}
          <div className="lg:hidden mt-4">
            <div className="relative h-48 rounded overflow-hidden">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === vIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Image+${
                        index + 1
                      }`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== OUR PERSPECTIVE (HORIZONTAL) ===== */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-white text-2xl md:text-[32px] font-bold">
            Our Perspective on{" "}
            <span className="underline decoration-purple-400 underline-offset-4">
              Product Engineering
            </span>
          </h3>

          <div className="relative mt-6">
            {/* Navigation controls */}
            <div className="absolute inset-y-0 left-[-8px] right-[-8px] flex items-center justify-between pointer-events-none z-10">
              <button
                onClick={() => setHIndex((i) => clampH(i - 1))}
                disabled={hIndex === 0}
                aria-label="Previous"
                className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-purple-200 text-purple-900 shadow hover:scale-[1.03] transition disabled:opacity-50 disabled:cursor-not-allowed ml-[-40px]"
              >
                <ArrowLeft strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setHIndex((i) => clampH(i + 1))}
                disabled={hIndex >= maxIndex}
                aria-label="Next"
                className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-purple-200 text-purple-900 shadow hover:scale-[1.03] transition disabled:opacity-50 disabled:cursor-not-allowed mr-[-40px]"
              >
                <ArrowRight strokeWidth={1.5} />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-400 ease-out will-change-transform"
                style={{
                  transform: `translateX(calc(${hIndex * -100}% - ${
                    hIndex * 1.5
                  }rem))`,
                }}
              >
                {perspectives.map((p) => (
                  <article
                    key={p.id}
                    className="min-w-[88%] sm:min-w-[48%] lg:min-w-[32%]"
                  >
                    <div className="rounded bg-purple-100 p-3 h-full">
                      <div className="relative rounded p-5 h-full">
                        {/* badge */}
                        <span className="inline-block rounded-md bg-purple-500 px-3 py-1 text-[12px] font-semibold text-white">
                          {p.badge}
                        </span>

                        {/* optional cover (ebook card) */}
                        {p.cover && (
                          <div className="mt-4 overflow-hidden rounded-lg">
                            <img
                              src={p.cover}
                              alt={p.title}
                              className="h-44 w-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                  "https://via.placeholder.com/300x180/8B5CF6/FFFFFF?text=Ebook";
                              }}
                            />
                          </div>
                        )}

                        <h4 className="mt-4 text-[18px] font-semibold text-purple-900 leading-snug">
                          {p.title}
                        </h4>
                        <p className="mt-2 text-[14px] leading-6 text-purple-800">
                          {p.blurb}
                        </p>

                        <div className="mt-5 flex items-center justify-between">
                          <div className="text-[12px] text-purple-700">
                            <div>By {p.by}</div>
                            <div className="opacity-80">{p.date}</div>
                          </div>

                          {p.cta ? (
                            <a
                              href={p.cta.href}
                              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-900 shadow hover:shadow-md transition"
                            >
                              {p.cta.label}
                            </a>
                          ) : (
                            <button
                              aria-label="Open"
                              className="grid h-9 w-9 place-items-center rounded-full bg-white text-purple-900 shadow hover:shadow-md transition"
                            >
                              ↗
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* mobile pagination bars */}
            <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
              {Array.from({
                length: Math.max(1, perspectives.length - perView + 1),
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHIndex(i)}
                  className={`h-1.5 w-6 rounded-full transition ${
                    i === hIndex ? "bg-purple-200" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-180px] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle
            cx="240"
            cy="240"
            r="220"
            stroke="rgb(147 51 234)"
            strokeOpacity="0.35"
            strokeWidth="36"
          />
          <circle
            cx="240"
            cy="240"
            r="140"
            stroke="rgb(147 51 234)"
            strokeOpacity="0.35"
            strokeWidth="36"
          />
          <circle
            cx="240"
            cy="240"
            r="70"
            stroke="rgb(147 51 234)"
            strokeOpacity="0.35"
            strokeWidth="36"
          />
        </svg>
      </div>

      {/* <style jsx>{`
        @keyframes progress-fill {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }
      `}</style> */}
    </section>
  );
};

export default FeaturedStories;

/* ---------- hooks ---------- */
function usePerView() {
  const [per, setPer] = useState(1);
  useEffect(() => {
    const on = () => {
      if (window.innerWidth >= 1024) setPer(3);
      else if (window.innerWidth >= 640) setPer(2);
      else setPer(1);
    };
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return per;
}
