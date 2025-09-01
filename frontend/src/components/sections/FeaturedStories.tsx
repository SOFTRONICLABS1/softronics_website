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
          "What does it take to cut shipment costs by 20% and speed up deliveries by 25%? This case study unpacks how a top supply chain operator partnered with softroniclabs to build a connected supply chain platform that fuses edge intelligence, IoT, and cloud-native architecture. From battery life gains to fewer connectivity disruptions, the results show what's possible when infrastructure and insight align. If you're exploring smarter operations, this succinct overview points toward actionable next steps.",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        kicker: "Enterprise data fabric improves SLA adherence by 35%",
        title: "How platform thinking cuts cost of change in large orgs",
        summary:
          "Clutch's 2025 rankings are in, and softroniclabs has been named the #1 AI services provider globally. The recognition emphasizes our strength in delivering AI expertise with measurable results. We break down how Clutch evaluated hundreds of vendors and why softroniclabs's focus on engineering-led delivery stood out. If you're researching vendors for your AI initiatives and want to understand what credibility looks like in this space, this article provides concise insights and clear considerations to make a decision.",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        kicker: "Fintech scales to 10M MAU with zero-downtime releases",
        title: "Shipping faster with DevEx guardrails on Kubernetes",
        summary:
          "softroniclabs is now an Advanced Tier Partner in Datadog's global ecosystem. It showcases our ability to deliver full-stack observability for modern cloud-native systems. This post breaks down what the partnership level means, how it improves monitoring capabilities for our clients, and where it fits into broader platform engineering goals. If you're scaling distributed systems or seeking faster root-cause analysis across services, A quick look at how better visibility and response work in action.",
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

  // Measure slide width + gap and translate in pixels
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstSlideRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [gapPx, setGapPx] = useState(0);

  const measure = () => {
    const el = firstSlideRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = el.getBoundingClientRect();
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || "0") || 0; // flex gap resolves to columnGap
    setSlideWidth(rect.width);
    setGapPx(gap);
  };

  // Re-measure on load, resize, perView change, and after fonts/images stabilize
  useEffect(() => {
    measure();
    const onR = () => measure();
    window.addEventListener("resize", onR);
    const id = window.setTimeout(measure, 50);
    return () => {
      window.removeEventListener("resize", onR);
      window.clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView]);

  // Keep index valid after perView or viewport changes
  useEffect(() => {
    if (hIndex > maxIndex) setHIndex(maxIndex);
  }, [maxIndex, hIndex]);

  // Mobile-only auto-scroll for horizontal carousel
  const horizontalAutoRef = useRef<number | null>(null);
  const startHorizontalAuto = () => {
    stopHorizontalAuto();
    if (window.innerWidth < 1024) {
      horizontalAutoRef.current = window.setInterval(() => {
        setHIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
  };
  const stopHorizontalAuto = () => {
    if (horizontalAutoRef.current) {
      window.clearInterval(horizontalAutoRef.current);
      horizontalAutoRef.current = null;
    }
  };
  useEffect(() => {
    const handle = () => {
      if (window.innerWidth < 1024) startHorizontalAuto();
      else stopHorizontalAuto();
    };
    handle();
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
      stopHorizontalAuto();
    };
  }, [maxIndex]);

  const goToPrevious = () => {
    stopHorizontalAuto();
    setHIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  const goToNext = () => {
    stopHorizontalAuto();
    setHIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleHorizontalMouseEnter = () => {
    if (window.innerWidth < 1024) stopHorizontalAuto();
  };
  const handleHorizontalMouseLeave = () => {
    if (window.innerWidth < 1024) startHorizontalAuto();
  };

  // Pixel-perfect offset
  const translateX = -(hIndex * (slideWidth + gapPx));

  return (
    <section className="relative w-full overflow-hidden bg-[#38106F]">
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 z-10">
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
          <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr] gap-3 md:gap-6">
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
                      className="w-full rounded-full bg-[#AC8DE4]"
                      style={{
                        height: "100%",
                        animation: `progress-fill-${vIndex} ${AUTOPLAY_MS}ms linear`,
                      }}
                    />
                  )}
                  {i < vIndex && <div className="w-full h-full rounded-full" />}
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
                      index === vIndex ? "bg-[#D9C3FF]" : "bg-[#D9C3FF]"
                    } p-4 sm:p-5`}
                    onClick={() => setVIndex(index)}
                  >
                    <div className="flex flex-col">
                      <h3 className="text-[18px] md:text-[20px] font-semibold text-purple-900">
                        {story.title}
                      </h3>

                      {index === vIndex && (
                        <div className="opacity-100 transition-opacity duration-300 delay-200">
                          <div className="flex gap-6 items-start">
                            <div className="flex-[3]">
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

                            {/* Integrated image on the right - 40% width */}
                            <div className="hidden lg:block flex-[2]">
                              <div className="relative w-full h-64 rounded overflow-hidden">
                                <img
                                  src={story.image}
                                  alt={story.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://via.placeholder.com/192x112/8B5CF6/FFFFFF?text=Image+${
                                      index + 1
                                    }`;
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile image section - simplified horizontal rectangle */}
          <div className="lg:hidden mt-4">
            <div className="relative h-32 rounded overflow-hidden">
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
                      target.src = `https://via.placeholder.com/400x128/8B5CF6/FFFFFF?text=Image+${
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

          <div
            className="relative mt-6"
            onMouseEnter={handleHorizontalMouseEnter}
            onMouseLeave={handleHorizontalMouseLeave}
          >
            {/* Navigation (desktop) */}
            {/* Navigation (desktop) */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 sm:hidden lg:flex">
              <button
                onClick={goToPrevious}
                aria-label="Previous"
                className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full 
               bg-purple-200 text-purple-900 shadow hover:scale-[1.03] transition 
               -ml-20 min-h-[44px] min-w-[44px]" // 👈 moved left
              >
                <ArrowLeft strokeWidth={1.5} />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next"
                className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full 
               bg-purple-200 text-purple-900 shadow hover:scale-[1.03] transition 
               -mr-20 min-h-[44px] min-w-[44px]" // 👈 moved right
              >
                <ArrowRight strokeWidth={1.5} />
              </button>
            </div>

            <div className="overflow-hidden px-2 sm:px-0">
              <div
                ref={trackRef}
                className="flex gap-3 sm:gap-4 lg:gap-6 transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {perspectives.map((p, idx) => (
                  <article
                    key={p.id}
                    ref={idx === 0 ? firstSlideRef : undefined}
                    className="
                      flex-shrink-0
                      basis-full
                      sm:basis-1/2
                      lg:basis-1/3
                    "
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
                              className="grid h-9 w-9 place-items-center rounded-full bg-white text-purple-900 shadow hover:shadow-md transition mr-[24px]"
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

            {/* mobile pagination dots */}
            <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
              {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    stopHorizontalAuto();
                    setHIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === hIndex
                      ? "bg-purple-200 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-120px] sm:left-[-240px] lg:left-[-120px] xl:left-[-280px] top-1/2 hidden -translate-y-1/2 md:block z-0"
      >
        <img
          src="https://www.simform.com/wp-content/uploads/2024/12/hm-hero-image.svg"
          alt=""
          className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[480px] h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[480px] max-w-none opacity-30 object-cover"
          loading="lazy"
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes progress-fill-${vIndex} {
            from { height: 0%; }
            to   { height: 100%; }
          }
        `,
        }}
      />
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
