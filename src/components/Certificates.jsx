import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Java",
    issuer: "Introduction Java basic Hacker Rank",
    date: "2024",
    image: "https://my-portfolio-ds.pages.dev/assest/image/certificate/Java-basic.jpg",
    link: "https://www.hackerrank.com/certificates/iframe/64f22bc21312",
    desc: "Learned the fundamentals of Java programming, including syntax, control flow, and basic data structures."
  },
  {
    title: "Python",
    issuer: "Introduction Python basic Hacker Rank",
    date: "2024",
    image: "https://my-portfolio-ds.pages.dev/assest/image/certificate/python-basic.jpg",
    link: "https://www.hackerrank.com/certificates/iframe/250aa21709ae",
    desc: "Mastered the basics of Python, including variables, loops, and functions for solving simple problems."
  },
  {
    title: "Spring Boot",
    issuer: "Introduction Spring boot Learning",
    date: "2024",
    image: "https://my-portfolio-ds.pages.dev/assest/image/certificate/springboot.png",
    link: "https://my-portfolio-ds.pages.dev/pages/cetificate",
    desc: "Gained a comprehensive understanding of Spring Boot for building Java-based enterprise applications."
  },
];

const CertificateCard = ({ index, title, issuer, date, image, link, desc }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-tertiary rounded-2xl overflow-hidden sm:w-[360px] w-full"
      >
        <div className="relative">
          <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-blue-700 via-gray-600 to-blue-900 hover:bg-blue-900 px-6 py-3 text-white transition"
            >
              View Certificate
            </a>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-white font-bold text-[20px] mb-1">{title}</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-300 text-[14px]">{issuer}</p>
            <p className="text-blue-100 text-sm">{date}</p>
          </div>
          <p className="text-gray-300 text-[14px] mt-2">{desc}</p>
        </div>
      </motion.div>
  );
};

const Certificates = () => {
  return (
      <section id="certificates" className="relative w-full min-h-screen">
        <div className="section-container">
          <div className="text-center mb-5">
            <motion.h2
                initial={{scale: 0.8}}
                whileInView={{scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-500 mb-5"
            >
              My Achievements
            </motion.h2>
            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.2, duration: 0.6}}
                className="mt-4 text-slate-400 max-w-2xl mx-auto"
            >
              Explore my certificates, which represent key milestones in my journey as a developer, demonstrating my
              proficiency in various technologies and programming languages.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-7">
            {certificates.map((certificate, index) => (
                <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="https://my-portfolio-ds.pages.dev/pages/cetificate" target="_blank" rel="noopener noreferrer">
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

export default Certificates;
