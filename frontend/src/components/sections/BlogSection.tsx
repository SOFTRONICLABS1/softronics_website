import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, Clock } from "lucide-react";
import type { BlogCategory } from "../../types/blog";
import { blogPosts, blogCategories } from "../../data/blogData";
import "./HeroStripes.css";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>(
    "Product Engineering"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter((post) => post.category === activeCategory);

    if (searchQuery) {
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  const getCategoryDescription = (category: BlogCategory) => {
    switch (category) {
      case "Product Engineering":
        return "Comprehensive technology services spanning diverse industries from automotive to agriculture. Our expertise includes software development, maintenance, independent validation services, and technology consulting with proven experience across multiple sectors.";
      case "Cloud and DevOps":
        return "Discover best practices, tools, and strategies for cloud infrastructure, DevOps automation, and scalable deployment solutions using modern CICD methodologies.";
      case "Data Engineering":
        return "Advanced analytics solutions with feature-rich user dashboards, DDP Dissection Platform for data insights, and expertise in big data processing using Python and open-source technologies for cost-effective, secure data management.";
      case "AI and ML":
        return "Cutting-edge artificial intelligence and machine learning solutions including decision tree optimization, Named Entity Recognition with SpaCy, and practical AI implementations for business automation and predictive analytics.";
      case "Digital & Experience Engineering":
        return "Specialists in embedded systems, IoT applications, and innovative platforms. From ARM Cortex-A processors to Internet of Farming solutions, gamification in pedagogy, and sustainable clustered applications for home automation and sensor networks.";
      case "News & Insights":
        return "Latest updates from SofTronicLabs including our engineering philosophy, leadership insights, and company developments. Founded in 2017 by passionate engineers committed to solving complex technology challenges.";
      default:
        return "";
    }
  };

  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden bg-hero">
      {/* Animated Vertical Stripes - Left Side */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[120px] sm:w-[140px] md:w-[180px] overflow-hidden z-0 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full vl-fade"
            style={{
              left: `${i * 17}px`,
              width: "8px",
              background: `linear-gradient(to bottom,
                var(--stripe-top) 0%,
                var(--stripe-mid) 50%,
                var(--stripe-bottom) 80%,
                transparent 100%)`,
              animationDuration: `${3 + i * 0.2}s`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            The Softroniclabs Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Insights, best practices, and thought leadership from our
            engineering experts
          </p>
        </div>

        {/* Featured Blog Cards */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={`featured-${post.id}`}
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative"
              >
                <div className="p-6 sm:p-7">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium border border-orange-200">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                      {post.readingTime && (
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readingTime} min</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div
                    className="inline-flex items-center font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    style={{ color: "var(--brand-cyan)" }}
                  >
                    Read More
                    <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Arrow Icon - Top Right */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight
                    className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    style={{ color: "var(--brand-orange)" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? "text-white shadow-lg"
                  : "bg-white/80 text-gray-700 border border-gray-200 hover:border-orange-300"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category.id
                    ? "var(--brand-orange)"
                    : undefined,
                boxShadow:
                  activeCategory === category.id
                    ? "0 4px 12px rgba(255, 165, 0, 0.3)"
                    : undefined,
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        {/* <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:border-transparent text-sm sm:text-base transition-all duration-300"
              style={{
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 165, 0, 0.2)';
                e.currentTarget.style.borderColor = 'var(--brand-orange)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            />
          </div>
        </div> */}

        {/* Category Description */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gray-700 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            {getCategoryDescription(activeCategory)}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative"
            >
              <div className="p-6 sm:p-7">
                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium border border-orange-200">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                    {post.readingTime && (
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readingTime} min</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Read More Button */}
                <div
                  className="inline-flex items-center font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  style={{ color: "var(--brand-cyan)" }}
                >
                  Read More
                  <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Arrow Icon - Top Right */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight
                  className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ color: "var(--brand-orange)" }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts found for the current filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("Product Engineering");
              }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
