import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
 
 {
  name: "Lovina Fashion Store",
  description:
    "A modern and elegant fashion e-commerce website UI designed for trendy clothing collections, featuring a stylish dark green theme, smooth shopping experience, and visually engaging summer fashion showcase.",
  tags: ["ui/ux", "figma", "e-commerce"],
  category: "UI Design",
  image:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  source_code_link: "#",
  live_demo_link:
    "https://www.figma.com/proto/tjvFOIzE1uofpW3p236AaR/Lovina",
},
  {
    name: "Admin Car Parking App",
    description: "A mobile app for ordering coffee, tracking rewards, and exploring new flavors.",
    tags: ["ui/ux", "figma", "design"],
    category: "UI Design",
    image: 'https://i.pinimg.com/736x/22/80/02/228002020f155f1d74a24caacb064f05.jpg',
    source_code_link: "#",
    live_demo_link: "https://www.figma.com/design/0xUGzIuyK9K0sTBszSNyFy/My-Coffee-shop?node-id=0-1&p=f&t=1ycaW3R3tvG3HX72-0",
  },
  {
    name: "Admin Tropy Medelo Ecommerce App",
    description: "A mobile app for ordering fruit for an e-commerce platform.",
    tags: ["ui/ux", "figma", "design"],
    category: "UI Design",
    image: 'https://i.pinimg.com/736x/53/d3/af/53d3af2869245433607c4750d75b5089.jpg',
    live_demo_link: "https://www.figma.com/design/9YOAelrTuFhIs8swfDDaFT/my-fruits-app?node-id=0-1&p=f&t=uR4K8lnTfGvMI4qR-0",
  },
  {
  name: "Lovina Fashion Store",
  description:
    "A modern and elegant fashion e-commerce website UI designed for trendy clothing collections, featuring a stylish dark green theme, smooth shopping experience, and visually engaging summer fashion showcase.",
  tags: ["ui/ux", "figma", "e-commerce"],
  category: "UI Design",
  image:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  source_code_link: "#",
  live_demo_link:
    "https://www.figma.com/proto/tjvFOIzE1uofpW3p236AaR/Lovina",
},
  {
    name: "Coffee Shop App",
    description: "A mobile app for ordering coffee, tracking rewards, and exploring new flavors.",
    tags: ["ui/ux", "figma", "design"],
    category: "UI Design",
    image: 'https://i.pinimg.com/736x/22/80/02/228002020f155f1d74a24caacb064f05.jpg',
    source_code_link: "#",
    live_demo_link: "https://www.figma.com/design/0xUGzIuyK9K0sTBszSNyFy/My-Coffee-shop?node-id=0-1&p=f&t=1ycaW3R3tvG3HX72-0",
  },
  {
    name: "Fruit Delivery App",
    description: "A mobile app for ordering fruit for an e-commerce platform.",
    tags: ["ui/ux", "figma", "design"],
    category: "UI Design",
    image: 'https://i.pinimg.com/736x/53/d3/af/53d3af2869245433607c4750d75b5089.jpg',
    live_demo_link: "https://www.figma.com/design/9YOAelrTuFhIs8swfDDaFT/my-fruits-app?node-id=0-1&p=f&t=uR4K8lnTfGvMI4qR-0",
  },
];


const Design = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
      <section id="projects" className="relative w-full min-h-screen">
        <div className="section-container">
          <div className="text-center mb-5">
            <motion.h2
                initial={{scale: 0.8}}
                whileInView={{scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-500 mb-5"
            >
              Featured UI Design
            </motion.h2>
            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.2, duration: 0.6}}
                className="mt-4 text-slate-400 max-w-2xl mx-auto"
            >
             Explore my latest UI/UX design projects, featuring modern interfaces, creative concepts, and user-focused digital experiences.            </motion.p>
          </div>

          <motion.div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {["all", "Destop App UI", "Web App UI", "Mobile App UI"].map((category) => (
                  <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-6 py-2 rounded-full font-medium transition-colors ${
                          filter === category
                              ? 'bg-gradient-to-r from-blue-600 via-gray-800 to-blue-900 text-white'
                              : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                      }
                      `}
                  >
                    {category}
                  </button>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-7">
            {filteredProjects.map((project, index) => (
                <motion.div key={index} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}} viewport={{once: true}}
                            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                  <div className="relative w-full h-[230px]">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute inset-0 flex justify-end m-3 gap-2">
                      <div onClick={() => window.open(project.source_code_link, "_blank")}
                           className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <FaGithub className="w-1/2 h-1/2 text-white"/>
                      </div>
                      <div onClick={() => window.open(project.live_demo_link, "_blank")}
                           className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <FaExternalLinkAlt className="w-1/2 h-1/2 text-white"/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                    <p className="mt-2 text-gray-300 text-[14px]">{project.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <p key={tag} className="text-[14px] text-blue-400">#{tag}</p>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="https://github.com/ApsaraWitharana" target="_blank" rel="noopener noreferrer">
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

export default Design;
