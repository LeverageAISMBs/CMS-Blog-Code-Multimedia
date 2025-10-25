export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello, World!',
    date: '2024-07-29',
    description: 'This is the first post on our new blog platform, built with a modern Markdown workflow.',
  },
  {
    slug: 'second-post',
    title: 'The Power of Component-Based Architecture',
    date: '2024-07-30',
    description: 'Discover how component-based architecture revolutionizes web development by promoting reusability and maintainability.',
  },
];