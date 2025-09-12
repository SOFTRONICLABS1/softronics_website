import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost } from '../../types/blog';
import { blogPosts } from '../../data/blogData';
import './HeroStripes.css';

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail: FC<BlogPostDetailProps> = ({ post }) => {
  // Get related posts from the same category, excluding current post
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const formatContent = (content: string) => {
    // Convert markdown-like syntax to HTML
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-5">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$2</code></pre>')
      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside space-y-1 mb-4">$1</ul>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/^(?!<[hl]|<ul|<li|<pre)(.*$)/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>')
      .replace(/\n\n/g, '\n');
  };

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 z-10">
        {/* Back to Blog */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-orange-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200">
              <Tag className="inline w-3 h-3 mr-1" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
            {post.description}
          </p>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <span className="text-sm text-gray-600 flex items-center">
              <Share2 className="w-4 h-4 mr-2" />
              Share:
            </span>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors duration-300"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 lg:p-10 mb-12">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.fullContent ? formatContent(post.fullContent) : '<p>Content coming soon...</p>'
            }}
          />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio Section */}
        <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{post.author}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.author === 'Manjesh HB' 
                  ? 'Data Scientist at SofTronicLabs with expertise in machine learning, data analytics, and AI solutions. Passionate about solving complex data challenges and building scalable analytics platforms.'
                  : post.author === 'Varshith S'
                  ? 'Software Developer at SofTronicLabs specializing in NLP, machine learning implementations, and full-stack development. Focused on creating innovative AI-driven applications.'
                  : 'Engineering team at SofTronicLabs dedicated to delivering cutting-edge technology solutions across diverse industries. Our expertise spans embedded systems, IoT, data analytics, and software development.'
                }
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogPostDetail;