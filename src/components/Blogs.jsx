import { motion } from 'framer-motion';

import reactQnAImage from '../assets/blog/reactqanda.webp';
import springBootImage from '../assets/blog/springbootannotation.webp';
import microservicesImage from '../assets/blog/microserviceimage.webp';

const blogs = [
  {
    title: "Getting Started with React Q & A",
    description: "A beginner-friendly guide covering essential React concepts...",
    date: "Feb 28, 2025",
    image: reactQnAImage, // Imported Image
    link: "https://medium.com/@asachini095/react-q-a-93e2545be7a1",
  },
  {
    title: "Spring Boot Annotation",
    description: "Explore the core annotations in Spring Boot...",
    date: "Aug 20, 2024",
    image: springBootImage,
    link: "https://medium.com/@asachini095/springbootannotations-eb091cfdb662",
  },
  {
    title: "Microservices Architecture And Design Patterns",
    description: "Understand the principles of microservices architecture...",
    date: "Feb 5, 2025",
    image: microservicesImage,
    link: "https://medium.com/@asachini095/microservices-and-software-architecture-6d17c7cd1c3e",
  },
];



const BlogCard = ({ index, title, description, date, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-tertiary rounded-2xl overflow-hidden sm:w-[360px] w-full"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-5">
        <p className="text-blue-100 text-sm mb-2">{date}</p>
        <h3 className="text-white font-bold text-[20px] mb-2">{title}</h3>
        <p className="text-gray-300 text-[14px] mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 inline-flex items-center"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <section id="blogs" className="relative w-full min-h-screen">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.h2
              initial={{scale: 0.8}}
              whileInView={{scale: 1}}
              transition={{duration: 0.8, ease: "easeOut"}}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-500 mb-5"
          >
            My Latest Articles
          </motion.h2>
          <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 0.2, duration: 0.6}}
              className="mt-4 text-slate-400 max-w-2xl mx-auto"
          >
            Explore my daily articles on Medium, where I share insights, tutorials, and best practices on web and mobile
            development, Spring Boot,python,react and emerging tech trends.
          </motion.p>

        </div>

        <div className="flex flex-wrap justify-center gap-7">
          {blogs.map((blog, index) => (
              <BlogCard key={`blog-${index}`} index={index} {...blog} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="https://medium.com/@asachini095" target="_blank" rel="noopener noreferrer">
            <button
                className="rounded-full bg-gradient-to-r from-blue-700 via-gray-600 to-blue-900 hover:bg-blue-900 px-6 py-3 text-white transition">
              View More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;