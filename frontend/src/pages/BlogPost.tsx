import { useParams, Navigate } from 'react-router-dom';
import BlogPostDetail from '../components/sections/BlogPostDetail';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug);

  // If post not found, redirect to 404 or blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogPostDetail post={post} />;
};

export default BlogPost;