import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext
import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  return (
    <div className={`m-auto ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <section className="about section container mx-auto py-12" id="about">
        <h2 className="text-4xl font-bold mb-8">About me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="about__data space-y-4">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-2xl">Hello, I am <br /> </span>
              Enthusiastic and detail-oriented Web Developer with a solid foundation in HTML, CSS, and JavaScript,
              complemented by hands-on experience with frameworks and libraries such as Bootstrap and React.
              Adept at both front-end and back-end development, with proficiency in Node.js, Java, PHP, and SQL
              databases including MongoDB and MySQL. Knowledgeable in Spring Boot for building robust, scalable
              applications. Eager to leverage technical skills and a passion for problem-solving to contribute
              effectively to a dynamic development team. Adept at learning new technologies quickly and committed
              to continuous improvement and professional growth.
            </p>
          </div>

          <img
            src="./src/assets/duke.jpg"
            alt="Boopathi"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Qualification Section */}
      <section className="qualification container mx-auto py-12">
        <span className="font-bold text-lg">Experience and education</span>
        <h2 className="text-4xl font-bold mb-8">Qualification</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="qualification__content">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <i className='bx bx-book-bookmark mr-2'></i> Education
            </h2>

            <div className="space-y-6">
              <div className="qualification__data">
                <h3 className="text-xl font-medium">MERN Stack Development</h3>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <i className='bx bx-book-alt mr-2'></i> KG Micro College
                  </span>
                  <span className="flex items-center">
                    <i className='bx bx-calendar-alt mr-2'></i> May 2024 - Dec 2024
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="text-xl font-medium">BSc Mathematics</h3>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <i className='bx bx-book-alt mr-2'></i> Government Arts College - Coimbatore
                  </span>
                  <span className="flex items-center">
                    <i className='bx bx-calendar-alt mr-2'></i> Jun 2017 - Aug 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
