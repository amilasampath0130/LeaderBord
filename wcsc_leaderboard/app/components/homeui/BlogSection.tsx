"use client";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

interface BlogSectionProps {
  blogs: BlogPost[];
}

export const BlogSection = ({ blogs }: BlogSectionProps) => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Latest <span className="text-blue-400">News</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Stay up to date with the latest news, events, and updates from the WCSC DEV team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-3 py-1">
                  {blog.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm">{blog.excerpt}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
