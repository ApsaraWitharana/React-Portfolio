import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Getting Started with React Q & A",
    description: "A beginner-friendly guide covering essential React concepts, including components, state, and props, to help you build your first React application.",
    date: "Feb 28, 2025",
    image: "https://files.oaiusercontent.com/file-3C2M8sU2mCva8aj8yaWRLn?se=2025-03-03T09%3A27%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D200b8091-f85a-4225-a005-79ab54305cbf.webp&sig=4Q6RGdo/CPTcg3gqfnbdAbB8%2BUVR1KB93RQ%2BLyhGWAk%3D",
    link: "https://medium.com/@asachini095/react-q-a-93e2545be7a1",
  },
  {
    title: "Spring Boot Annotation",
    description: "Explore the core annotations in Spring Boot, their use cases, and how they simplify application development with powerful metadata-driven configurations.",
    date: "Aug 20, 2024",
    image: "https://files.oaiusercontent.com/file-11B6FYUN9Hkbg8AMcmxMbJ?se=2025-03-03T09%3A41%3A39Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De3de101d-873c-4393-9d17-b0b19a8a2749.webp&sig=1wrf0G/h33aUXyS8qhRl5iEltt5XU12i6QRo4GyMIr4%3D",
    link: "https://medium.com/@asachini095/springbootannotations-eb091cfdb662",
  },
  {
    title: "Microservices Architecture And Design Patterns",
    description: "Understand the principles of microservices architecture and learn key design patterns to build scalable, resilient, and efficient distributed systems.",
    date: "Feb 5, 2025",
    image: "https://files.oaiusercontent.com/file-Fry7ExAdYaiAmCM8t8eSby?se=2025-03-03T09%3A28%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3903e4f9-8ed6-49fb-8ce6-106e4a9e273c.webp&sig=M9FqdSWD1Bz3EwC4uM0JKSNB1/0Tlls9xkDidMZmfns%3D",
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