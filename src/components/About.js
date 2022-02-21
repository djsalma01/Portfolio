import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center space-between">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Salma.
            <br className="hidden lg:inline-block" />Junior Full-Stack Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a Junior Full stack developer, I'm
currently looking for a new opportunity
(Job or Internship). I have good basics in
algorithme and Coding in diferent
languages, frameworks and APIs.
I also graduated in electronic and
Embedded system engineering and i have
more than 2 years of professional
experience.
Beside the technical parts I'm very
passionate about learning something new
every day and i have very good
interpersonal skills.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className=" lg:w-1/2 object-cover object-center rounded lg:ml-20"
            alt="hero"
            src="./photo2.jpg"
          />
        </div>
      </div>
    </section>
  );
}