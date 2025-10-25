import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { posts } from '../lib/posts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      // Handle post not found, maybe redirect to a 404 page in a real app
      navigate('/blog');
      return;
    }

    setIsLoading(true);
    fetch(`/content/posts/${post.slug}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => {
        console.error("Failed to fetch post:", error);
        setContent('Failed to load post content.');
      })
      .finally(() => setIsLoading(false));

  }, [slug, post, navigate]);

  if (!post) {
    return null; // or a "Post not found" component
  }
  
  if (isLoading) {
      return (
        <div className="text-center text-muted-foreground">
            <p>Loading post...</p>
        </div>
      );
  }

  return (
    <article className="max-w-4xl mx-auto prose prose-invert">
      <Link to="/blog" className="text-sm text-primary hover:underline no-underline mb-4 block">&larr; Back to all posts</Link>
      <h1 className="text-4xl font-bold tracking-tighter mb-2">{post.title}</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};

export default BlogPostPage;