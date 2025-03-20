import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaLinkedin, FaMedium, FaTwitter} from 'react-icons/fa';
import profilePic from '../assecc/image/aboutmepic.jpg';
import resume from '../assecc/cv/sachini_apsara_resume.pdf  (8).pdf';
const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center">
      <div className="section-container flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
          <div className="flex flex-col justify-center items-start mt-5 mr-20">
            <h3 className="text-white font-black text-3xl sm:text-3xl lg:text-4xl ">
              Hi, I'm <span className="blue-text-gradient">Sachini Apsara</span>
            </h3>
            <div className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-100 text-50"
              />
            </div>
            <p className="text-white-100 mt-4 text-base sm:text-lg max-w-md">
              I develop modern, responsive websites and web applications with cutting-edge technologies.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={resume}
                 className="rounded-full bg-gradient-to-r from-blue-700 via-gray-600 to-blue-900 hover:bg-blue-900 px-6 py-3 text-white transition">
                Download CV
              </a>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/ApsaraWitharana"
                   className="text-white hover:text-blue-100 transition-colors duration-300">
                  <FaGithub size={24}/>
                </a>
                <a href="https://www.linkedin.com/in/sachini-apsara-840067299/"
                   className="text-white hover:text-blue-100 transition-colors duration-300">
                  <FaLinkedin size={24}/>
                </a>
                <a href="https://medium.com/@asachini095"
                   className="text-white hover:text-blue-100 transition-colors duration-300">
                  <FaMedium size={24}/>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
            <img 
              src={profilePic}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/*<div className="w-[35px] h-[64px] rounded-3xl border-4 border-blue-100 flex justify-center items-start p-2">*/}
          {/*  <motion.div*/}
          {/*    animate={{*/}
          {/*      y: [0, 24, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 1.5,*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatType: "loop",*/}
          {/*    }}*/}
          {/*    className="w-3 h-3 rounded-full bg-blue-100 mb-1"*/}
          {/*  />*/}
          {/*</div>*/}
        </a>
      </div>
    </section>
  );
};

export default Hero;