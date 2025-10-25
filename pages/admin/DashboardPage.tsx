import React, { useState, useEffect } from 'react';
import { posts, Post } from '../../lib/posts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../components/ui/Card';

interface PostWithStats extends Post {
  wordCount: number;
  charCount: number;
}

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalWords: 0,
    totalChars: 0,
  });
  const [postsWithStats, setPostsWithStats] = useState<PostWithStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPostContent = async () => {
      setIsLoading(true);
      const postsData = await Promise.all(
        posts.map(async (post) => {
          const response = await fetch(`/content/posts/${post.slug}.md`);
          const content = await response.text();
          const wordCount = content.split(/\s+/).filter(Boolean).length;
          const charCount = content.length;
          return { ...post, wordCount, charCount };
        })
      );

      const totalWords = postsData.reduce((sum, post) => sum + post.wordCount, 0);
      const totalChars = postsData.reduce((sum, post) => sum + post.charCount, 0);

      setPostsWithStats(postsData);
      setStats({
        totalPosts: postsData.length,
        totalWords,
        totalChars,
      });
      setIsLoading(false);
    };

    fetchPostContent();
  }, []);

  if (isLoading) {
    return <p>Loading dashboard data...</p>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPosts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Words</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalWords.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Characters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalChars.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Analytics</CardTitle>
          <CardDescription>Detailed statistics for each blog post.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">Title</th>
                  <th scope="col" className="px-6 py-3">Words</th>
                  <th scope="col" className="px-6 py-3">Characters</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {postsWithStats.map((post) => (
                  <tr key={post.slug} className="border-b">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{post.title}</th>
                    <td className="px-6 py-4">{post.wordCount.toLocaleString()}</td>
                    <td className="px-6 py-4">{post.charCount.toLocaleString()}</td>
                    <td className="px-6 py-4">{new Date(post.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
