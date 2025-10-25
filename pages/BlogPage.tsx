import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts, Post } from '../lib/posts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(lowercasedQuery) ||
      post.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPosts(filtered);
  }, [searchQuery]);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">From the Blog</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Insights, tutorials, and updates from the Kibo team.
        </p>
        <div className="max-w-md mx-auto">
           <Input 
             type="text"
             placeholder="Search posts..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full"
             aria-label="Search posts"
           />
        </div>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="block hover:no-underline">
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No posts found for "{searchQuery}".</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;