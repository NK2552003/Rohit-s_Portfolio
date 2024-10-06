import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import Image from 'next/image';
import self from '../images/self.png';


const qualifications = [
    {
      year: "2017",
      course: "Secondary School i.e. 10th",
      description: "Completed at Kirorimal Public School Vil Khewra Dt Sonipat Haryana, Sonipat",
      percentage: "10/10 CGPA"
    },
    {
      year: "2019",
      course: "Senior Secondary School i.e. 12th",
      description: "Kirorimal Public School Vil Khewra Dt Sonipat Haryana, Sonipat",
      percentage:"79.8/100 %"
    },
    {
      year: "2021-25",
      course: "B.Tech - Information Technology",
      description: "J.C Bose University of Science & Technology, YMCA, Faridabad",
      percentage:"8.58/10 CGPA"
    },
  ];
  const certifications = [
    {
      type: "Forest & Their Management",
      aggregate: "98/100",
      description: "Study the ecology and biodiversity of forests, exploring their role in ecosystems and their conservation",
    },
    {
      type: "Air Pollution And Control",
      aggregate: "80 / 100",
      description: "Air quality monitoring and modeling techniques & Strategies for air pollution control ",
    },
    {
      type: "Water And Wastewater Treatment",
      aggregate: "47/100",
      description: "Removes impurities from raw water sources (rivers, lakes, groundwater) to make it safe for drinking and other uses and so on",
    },
  ];
  const skills = [
    { name: 'C', level: 'Advanced'},
    { name: 'CPP', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Data Structure& Algorithm', level: 'Advanced' },
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'ReatJS', level: 'Intermediate' },
    { name: 'OOPs', level: 'Intermediate' },
    { name: 'Computer Networking', level: 'Advanced' },
    { name: 'DataBase Management System', level: 'Advanced' },
    { name: 'Structured Query Language', level: 'Intermediate' },
    { name: 'Operating System', level: 'Advanced' },
  ];

  const projects = [
    {
      name: 'Metro-Route-Application',
      description: 'This is a desktop app which will provide a solution to finding the shortest available metro service in Delhi-NCR. It basically works on Djikstras Shortest path algorithm',
      time: '10-July-2023 - 20-November-2024',
      link: 'https://github.com/Rohit0701-create/Metro-Route-Application',
      skills: ['CPP', 'Data Structure', 'Algorithms'],
      image: 'https://raw.githubusercontent.com/NK2552003/Rohit-s_Portfolio/main/p1.png', // Updated
    },
    {
      name: 'Currency Converter',
      description: 'The application allows users to convert currencies by selecting the source currency and the target currency, and it provides an interface to easily switch between the two selected values.',
      time: '01-February-2023 - 10 May-2023',
      link: 'https://github.com/Rohit0701-create/Currency-Convertor',
      skills: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://raw.githubusercontent.com/NK2552003/Rohit-s_Portfolio/main/p2.png', // Updated
    },
  ];
  const ProjectCard = ({ project }) => {
    return (
      <div className="bg-slate-600 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <img src={project.image} className="w-full h-60 object-cover"/>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <p className="text-slate-300 mt-2">{project.description}</p>
          <p className="text-slate-300 text-sm mt-2">Completed: {project.time}</p>
          <div className="mt-4 p-4 bg-slate-800 rounded-full justify-center flex decoration-slate-800 text-2xl">
            <a
              href={project.link}
              className="text-blue-500 font-semibold hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-white">Key Skills</h4>
            <ul className="list-disc ml-4 text-slate-300">
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };  
export default function Home() {
  return (
    <div>
      <main className="bg-slate-800 px-8 font-roboto ">
        <section className="bg-slate-800 min-h-screen ">
          <nav className="py-4 mb-6 flex justify-between">
            <h1 className="text-4xl text-slate-300 font-bold font-Stylish">Portfolio</h1>
            <ul className="flex items-center z-40">
              <li>    
                <a href="https://github.com/Rohit0701-create/Portfolio/blob/6869039418d2bf0573f5d1104377805ea89cd0b3/Rohit%20Resume.pdf" className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white px-4 py-2 rounded-md ml-6" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
            </nav>
            <div className="blur-background">
              <div className="blur-blob blob1"></div>
              <div className="blur-blob blob2"></div>
              <div className="blur-blob blob3"></div>
            </div>
          <div className="text-center p-10 text-slate-300 font-Stylish">
              <h2 className="text-6xl py-2 font-medium text-white">Rohit</h2>
              <h3 className="text-2xl">Efficient developer blending DSA & Front-End expertise</h3>
              <p className="text-md py-5 text-slate-400">Let's create impactful solutions that drive success and foster growth together!
              </p>
          </div>
          <div className="text-5xl flex justify-center gap-8 text-slate-400">
            <a href="https://www.linkedin.com/in/rohit-prajapati-aa282b222/" className='z-50' target='_blank'><AiFillLinkedin/></a>
            <a href="https://www.instagram.com/rohitrk665/" className='z-50' target='_blank'><AiFillInstagram/></a>
            <a href="https://github.com/Rohit0701-create" className='z-50' target='_blank'><AiFillGithub/></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b animate-rounded from-orange-200 to-orange-100 w-80 h-80 mt-16'>
            <Image src={self} className='rounded-[0%_0%_40%_40%]'/>
          </div>
        </section>
        {/* Qualificaitons Sections Here */}
        <section className="bg-slate-800 min-h-screen py-12 font-Stylish">
          <h1 className="text-4xl text-center text-slate-300 font-bold font-Stylish mb-10 mt-20">
            Qualifications
          </h1>
          <div className="relative container mx-auto px-6 h-full">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-slate-400"></div>

            {/* Timeline Items */}
            {qualifications.map((item, index) => (
              <div
                key={index}
                className="mb-8 flex justify-between items-center w-full"
              >
                {/* Reverse content for index 1 */}
                {index === 1 ? (
                  <>
                    {/* Year on the left side */}
                    <div className="w-5/12 text-right transition-all duration-500 ease-in-out">
                      <p className="text-slate-300 text-lg font-semibold">
                        {item.year}
                      </p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-14 h-8 bg-emerald-400 rounded-full border-4 border-slate-800 relative z-10"></div>

                    {/* Content on the right side */}
                    <div className="w-5/12 text-left transition-all duration-500 ease-in-out">
                      <h3 className="text-xl text-slate-300 font-bold">
                        {item.course}
                      </h3>
                      <p className="text-slate-400">{item.description}</p>
                      <p className="text-emerald-400">{item.percentage}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      } transition-all duration-500 ease-in-out`}
                    >
                      <h3 className="text-xl text-slate-300 font-bold">{item.course}</h3>
                      <p className="text-slate-400">{item.description}</p>
                      <p className="text-emerald-400">{item.percentage}</p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-14 h-8 bg-emerald-400 rounded-full border-4 border-slate-800 relative z-10"></div>

                    {/* Right Side Year */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      } transition-all duration-500 ease-in-out`}
                    >
                      <p className="text-slate-300 text-lg font-semibold">
                        {item.year}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <h1 className="text-4xl text-center text-slate-300 font-bold font-Stylish mb-10 mt-40">
            Certifications
          </h1>
          <div className="relative container mx-auto px-6 h-full">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-slate-400"></div>

            {/* Timeline Items */}
            {certifications.map((item, index) => (
              <div
                key={index}
                className="mb-8 flex justify-between items-center w-full"
              >
                {/* Reverse content for index 1 */}
                {index === 1 ? (
                  <>
                    {/* Year on the left side */}
                    <div className="w-5/12 text-right transition-all duration-500 ease-in-out">
                      <p className="text-slate-300 text-lg font-semibold">
                        {item.type}
                      </p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-14 h-8 bg-blue-500 rounded-full border-4 border-slate-800 relative z-10"></div>

                    {/* Content on the right side */}
                    <div className="w-5/12 text-left transition-all duration-500 ease-in-out">
                      <p className="text-slate-400">{item.description}</p>
                      <p className="text-blue-500">{item.aggregate}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      } transition-all duration-500 ease-in-out`}
                    >
                      <p className="text-slate-400">{item.description}</p>
                      <p className="text-blue-500">{item.aggregate}</p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-14 h-8 bg-blue-500 rounded-full border-4 border-slate-800 relative z-10"></div>

                    {/* Right Side Year */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      } transition-all duration-500 ease-in-out`}
                    >
                      <p className="text-slate-300 text-lg font-semibold">
                        {item.type}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
          {/* Skills Section Here */}
          <section className="bg-slate-800 py-12 min-h-screen">
      <h2 className="text-6xl text-center text-slate-300 font-bold font-Stylish mb-10">
        Skills
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-700 text-slate-300 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-emerald-500 hover:text-slate-900"
          >
            <h3 className="text-2xl font-bold">{skill.name}</h3>
            <p className="text-lg mt-2 text-cyan-300">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Project section here */}
      <section className="bg-slate-800 py-12 min-h-screen font-Stylish">
        <h2 className="text-5xl font-bold text-center text-gray-100 mb-12">
          My Projects
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      </main>
      <footer className="bg-gray-900 text-gray-300 py-8 font-Stylish">
      <div className="container mx-auto px-4">
        {/* Developer Information */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Rohit</h2>
            <p>Front End Developer</p>
            <p>Building creative and efficient solutions.</p>
          </div>

          {/* Mail and Social Links */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="mb-2">
              <a
                href="mailto:rohit.sharma@example.com"
                className="text-blue-400 hover:text-blue-600"
              >
                rk9671598367@gmail.com
              </a>
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rohit-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
               <AiFillLinkedin className='text-4xl'/>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Rohit0701-create"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <AiFillGithub className='text-4xl'/>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rohit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}
