import React, { useEffect, useMemo, useRef, useState } from "react";
import softCircle from "../../assets/images/soft-logo2.webp";
import IOT from "../../assets/images/IOT.png";
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
        kicker:
          "Three-layered architecture combining ETL, AI, and Visualization",
        title:
          "DDP Dissection Platform: Transforming Data into Actionable Insights",
        summary:
          "The DDP Dissection Platform is a cutting-edge three-layered architecture solution that seamlessly combines Extract, Transform, Load (ETL), Artificial Intelligence (AI), and Visualization. It's your one-stop solution for unlocking insights from your data, making data-driven decisions, and achieving actionable results with advanced algorithms and customizable dashboards. Transform your raw data into strategic business intelligence.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        kicker:
          "Customizable dashboards with Python processing on big data platforms",
        title:
          "Analytics Solutions: Feature-Rich User Dashboards for Data-Driven Decisions",
        summary:
          "Analytics solutions from SofTronicLabs concentrate on providing feature-rich user dashboards for underlying data. Our dashboards are highly customizable and configurable for user needs, with processing carried out using Python on big data platforms. We utilize open-source technologies to provide cost-effective solutions while maintaining strong security and user management features for comprehensive data analysis.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        kicker:
          "Single-point IoT platform for agriculture and embedded applications",
        title:
          "Internet of Things & Internet of Farming: Revolutionizing Agriculture",
        summary:
          "Being specialists in designing and developing embedded applications, we focus on collating data from different units to a single platform. This gives rise to our single-point IoT platform designed to acquire data across different units into a common protocol IoT cloud. One key application is in agriculture, where we've pioneered customizing IoT platforms for the Internet of Farming, constantly researching plant growth and monitoring systems.",
        image: IOT,
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
        by: "Chetan G",
        date: "Nov 20, 2023",
      },
      {
        id: 2,
        badge: "Product Engineering",
        title: "The Roadmap to Digital Product Development: 6 Stages…",
        blurb:
          "From discovery to growth: artifacts, activities, and ownership for execution velocity.",
        by: "Chetan G",
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
        // cta: { label: "Download", href: "#" },
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
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 50%, #F0F0F0 100%)",
      }}
    >
      <div className="relative mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 lg:py-16 z-10">
        {/* ===== TITLE ===== */}
        <h2 className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight leading-tight">
          Featured Stories
        </h2>

        {/* ===== VERTICAL CAROUSEL WITH IMAGES ===== */}
        <div
          className="mt-4 sm:mt-6 rounded p-2 sm:p-3 md:p-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 247, 232, 0.95) 0%, rgba(236, 253, 255, 0.95) 100%)",
          }}
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
                      className="w-full rounded-full"
                      style={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)",
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
                    className="cursor-pointer bg-transparent p-3 sm:p-4 md:p-5"
                    onClick={() => setVIndex(index)}
                  >
                    <div className="flex flex-col">
                      <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold text-gray-800 leading-tight">
                        {story.title}
                      </h3>

                      {index === vIndex && (
                        <div className="opacity-100 transition-opacity duration-300 delay-200">
                          <div className="flex gap-6 items-start">
                            <div className="flex-[3]">
                              <p className="mt-3 text-[14px] leading-6 text-gray-700">
                                {story.summary}
                              </p>

                              <a
                                href={story.href || "#"}
                                className="hero-title-cyan mt-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-300"
                                // style={{
                                //   background:
                                //     "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)",
                                //   boxShadow:
                                //     "0 4px 12px rgba(255, 165, 0, 0.2)",
                                // }}
                                // onMouseEnter={(e) => {
                                //   e.currentTarget.style.background =
                                //     "linear-gradient(135deg, #FFB84D 0%, #FFA500 100%)";
                                // }}
                                // onMouseLeave={(e) => {
                                //   e.currentTarget.style.background =
                                //     "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)";
                                // }}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-cyan-900/30 to-transparent" />
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
          <div className="lg:hidden mt-3 sm:mt-4">
            <div className="relative h-40 sm:h-48 md:h-52 rounded overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-cyan-900/30 to-transparent" />
                </div>
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
          // src="https://www.simform.com/wp-content/uploads/2024/12/hm-hero-image.svg"
          src={softCircle}
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
