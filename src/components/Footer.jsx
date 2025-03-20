import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-[24px] font-bold">
              <span className="blue-text-gradient">Portfolio</span>
            </h2>
            <p className="text-gray-300 mt-2 max-w-md">
              Creating innovative web solutions with modern technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'about', 'technologies', 'projects', 'blogs', 'certificates', 'contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      className="text-gray-300 hover:text-blue-100 transition-colors duration-300 cursor-pointer capitalize"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">asachini095@example.com</li>
                <li className="text-gray-300">+94 71 362 7595</li>
                <li className="text-gray-300">Matara,Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Sachini Apsara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;