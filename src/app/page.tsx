import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4 py-16 text-center">
            <Image
              src="/profile.jpeg"
              alt="Profile photo of Timmy Loos"
              width={160}
              height={160}
              className="mx-auto mb-6 w-40 h-40 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800"
              priority
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Timmy Loos</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
              Computer Science & Economics Student
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              University of Florida
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a passionate Computer Science and Economics double-major at
                the University of Florida. My academic journey combines
                technical expertise with economic analysis, allowing me to
                approach problems from both technical and business perspectives.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I am constantly seeking opportunities to apply my knowledge in
                real-world scenarios and contribute to meaningful projects that
                make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex items-start gap-6">
                  <Image
                    src="/uf-logo.jpeg"
                    alt="University of Florida Logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      University of Florida
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                      Bachelor&apos;s degree, Computer Science and Economics
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Aug 2023 - May 2027
                    </p>
                    <div className="mt-4 space-y-1 text-sm">
                      <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">
                          Relevant Coursework:
                        </span>{" "}
                        Data Structures & Algorithms, Discrete Structures,
                        Programming&nbsp;1&2
                      </p>
                      <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Awards:</span>{" "}
                        Dean&apos;s List, AI Fundamentals and Applications
                        Certificate
                      </p>
                      <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Societies:</span>{" "}
                        ColorStack, ACM, SHPE, GatorAI
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex items-start gap-6">
                  <Image
                    src="/mdc-logo.jpeg"
                    alt="Miami Dade College Logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      Miami Dade College
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                      Associate of Arts - AA
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Aug 2021 - May 2023
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Dual Enrollment
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex items-start gap-6">
                  <Image
                    src="/sas-logo.png"
                    alt="School for Advanced Studies Logo"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      School for Advanced Studies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                      High School Diploma
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Aug 2019 - Jun 2023
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I earned my High School Diploma while concurrently earning
                      my Associate of Arts Degree through the SAS dual
                      enrollment program with Miami Dade College.
                    </p>
                    <div className="mt-4 text-sm">
                      <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                        Honors &amp; Awards:
                      </p>
                      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200">
                        <li>AP Scholar Award</li>
                        <li>
                          Bright Futures Florida Academic Scholarship (FAS)
                        </li>
                        <li>Outstanding Calculus Student Award</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
            <div className="max-w-4xl mx-auto space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Python
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    C++
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Java
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    JavaScript
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    SQL
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    SFML
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    OpenCV
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Keras
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    TensorFlow
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    NumPy
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Pandas
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Linux
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    VSCode
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    CDK
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Cloud
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    NLP
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    AI
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    OOP
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    POS Systems
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Soft & Professional Skills
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Communication
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Client Services
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Management
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Social Media
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Cust. Satisfaction
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Food Service
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Cust. Service
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Data Entry
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Microsoft Office
                  </span>
                  <span className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600">
                    Data Analysis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">
                    Software Engineer Intern
                  </h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    May 2025 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  City of Coral Gables - Innovation & Technology Department
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Coral Gables, FL (On-site)
                </p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Spearheading development efforts on smart city initiatives
                    at the GIS IoT Lab
                  </li>
                  <li className="leading-relaxed">
                    Engineering solutions to advance the city&apos;s technology
                    infrastructure and data systems
                  </li>
                  <li className="leading-relaxed">
                    Collaborating cross-functionally with civic tech teams to
                    deliver innovative digital services
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">Tech Developer Intern</h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    June 2025 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  Sponsors for Educational Opportunity (SEO)
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Remote</p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Selected for a competitive virtual program among top
                    underrepresented CS talent
                  </li>
                  <li className="leading-relaxed">
                    Engaged in weekly 1:1 mentorship with senior engineers to
                    refine technical and career readiness
                  </li>
                  <li className="leading-relaxed">
                    Completing intensive training in Data Structures,
                    Algorithms, and system design
                  </li>
                  <li className="leading-relaxed">
                    Building production-quality portfolio projects to prepare
                    for top-tier tech interviews
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">Private Math Tutor</h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    May 2024 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  Self-Employed
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Remote</p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Delivered personalized tutoring in Calculus and Algebra to
                    high school students
                  </li>
                  <li className="leading-relaxed">
                    Designed tailored lesson plans and tracked student progress
                    to boost academic performance
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">Service Lane Assistant</h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Oct 2023 - May 2024
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  Jenkins Kia of Gainesville
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Gainesville, FL
                </p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Streamlined vehicle intake using CDK Global&apos;s cloud
                    platform, improving workflow efficiency by 30%
                  </li>
                  <li className="leading-relaxed">
                    Reduced manual entry errors by 25% through process
                    optimization
                  </li>
                  <li className="leading-relaxed">
                    Assisted customers with service intake and data processing
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">Assistant Manager</h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Nov 2022 - Aug 2023
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  Poki Bowl Kendall
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Miami, FL
                </p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Managed staff and POS operations, reducing checkout time by
                    15%
                  </li>
                  <li className="leading-relaxed">
                    Analyzed sales trends to optimize staffing and improve
                    service speed
                  </li>
                  <li className="leading-relaxed">
                    Led employee training sessions to ensure consistent
                    operations
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">Event Staff</h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Mar 2023 - Apr 2023
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  Miami Open & Hard Rock Stadium
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Miami Gardens, FL
                </p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Coordinated with teams to maintain crowd flow and logistics
                    at large-scale events
                  </li>
                  <li className="leading-relaxed">
                    Operated under tight timelines in high-volume, dynamic
                    environments
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold">
                    Customer Service Associate
                  </h3>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Jun 2022 - Nov 2022
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                  Taco Bell
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Miami, FL
                </p>
                <ul className="list-disc list-outside ml-8">
                  <li className="leading-relaxed">
                    Processed customer orders and ensured service quality in a
                    fast-paced environment
                  </li>
                  <li className="leading-relaxed">
                    Worked collaboratively with kitchen and front-line teams to
                    maintain speed and satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Minesweeper</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A feature-rich implementation of the classic Minesweeper game
                  using C++ and SFML. Includes a graphical user interface,
                  leaderboard system, game state management, and debugging
                  tools. Features recursive tile clearing, mine flagging, and
                  persistent high score tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    SFML
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    CMake
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    GUI
                  </span>
                </div>
                <a
                  href="https://github.com/timmyloos/Minesweeper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <span>View on GitHub</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">MLTrader</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A machine learning-driven algorithmic trading system that
                  leverages FinBERT sentiment analysis and Lumibot for
                  backtesting and live trading. Features include customizable
                  backtesting periods, efficient memory management, and smart
                  API handling for Alpaca&apos;s trading platform.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    Lumibot
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    FinBERT
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    Alpaca API
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    QuantStats
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    NumPy
                  </span>
                </div>
                <a
                  href="https://github.com/timmyloos/MLTrader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Sudoku</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An interactive Sudoku game built with Python and Pygame
                  featuring multiple difficulty levels, dual input methods
                  (click and keyboard), and real-time validation. Includes a
                  user-friendly interface with reset/restart functionality and
                  win/loss detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    Pygame
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    GUI
                  </span>
                </div>
                <a
                  href="https://github.com/timmyloos/Sudoku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex justify-center gap-4 mb-6">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <i className="fas fa-eye"></i>
                    <span>View in New Tab</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                  >
                    <i className="fas fa-file-download"></i>
                    <span>Download PDF</span>
                  </a>
                </div>
                <div className="w-full">
                  <iframe
                    src="/resume.pdf"
                    title="Resume PDF"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                    style={{ minHeight: "800px" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out to me for opportunities or
                collaborations.
              </p>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://www.linkedin.com/in/timmy-loos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/timmyloos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <i className="fab fa-github text-2xl"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:timmyloos04@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-2xl"></i>
                  <span>Email</span>
                </a>
                <a
                  href="tel:17868104799"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <i className="fas fa-phone text-2xl"></i>
                  <span>(786) 810-4799</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
