import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles and insights from Shadojus on web development, technology trends, and digital innovation.',
};

export default function Blog() {
  // Sample blog posts - in a real application, these would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt: "Exploring the latest trends and technologies that will shape web development in the coming year, including AI integration, performance optimization, and new frameworks.",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "Web Development",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn how to structure your React applications for maximum scalability and maintainability with proven patterns and architectural decisions.",
      date: "2024-12-10",
      readTime: "8 min read",
      category: "React"
    },
    {
      id: 3,
      title: "From Idea to Launch: My Development Process",
      excerpt: "A behind-the-scenes look at how I approach client projects from initial concept through deployment and maintenance.",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "Process"
    },
    {
      id: 4,
      title: "The Art of Digital Storytelling for Brands",
      excerpt: "How to craft compelling narratives that resonate with your audience and drive engagement across digital platforms.",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Content Strategy"
    },
    {
      id: 5,
      title: "Performance Optimization: Making Your Website Lightning Fast",
      excerpt: "Practical techniques for improving website performance, from code splitting to image optimization and caching strategies.",
      date: "2024-11-20",
      readTime: "10 min read",
      category: "Performance"
    },
    {
      id: 6,
      title: "Building an Authentic Personal Brand Online",
      excerpt: "Strategies for establishing and growing your personal brand in the digital space while staying true to your values.",
      date: "2024-11-15",
      readTime: "5 min read",
      category: "Branding"
    }
  ];

  const categories = ["All", "Web Development", "React", "Process", "Content Strategy", "Performance", "Branding"];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights about web development, digital innovation, 
            and the ever-evolving world of technology.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="ml-4 text-gray-600">
                  {blogPosts.find(post => post.featured)?.category}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blogPosts.find(post => post.featured)?.title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                {blogPosts.find(post => post.featured)?.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span>{blogPosts.find(post => post.featured)?.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts.find(post => post.featured)?.readTime}</span>
                </div>
                
                <Link
                  href={`/blog/${blogPosts.find(post => post.featured)?.id}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered straight to your inbox. 
            No spam, just valuable content about web development and digital innovation.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Articles Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new content to share insights and knowledge with the community. 
              Follow me on social media to get notified when new articles are published.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}