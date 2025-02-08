import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="absolute left-2/3 top-5 w-36 max-[1100px]:left-5">
        <a
          className="p-2 bg-red-500 text-white font-bold no-underline rounded-md duration-300 hover:bg-red-700 hover:shadow-xl"
          href="https://drive.google.com/file/d/13wgIMH6ERZUGRAwfz8Ay7_PIf8FpdpF-/view?usp=sharing"
          target="_blank"
        >
          Download PDF!
        </a>
      </div>
      <div className="block font-sans">
        <header>
          <div>
            <div className="w-1/2 h-14 border-r-2 border-black"></div>
            <h1 className="text-4xl max-[1100px]:text-3xl font-mono text-center pt-2 josefinsans text-red-600">
              <strong>Abolfazl Mahkam</strong>
            </h1>
          </div>
          <div className="flex flex-row pt-3 pb-8">
            <div className="flex-1 h-4  mr-2">
              <div className="border-b-2 border-red-700 w-full h-full"></div>
            </div>
            <h2 className="flex-1 text-lg font-sans">FrontEnd Developer</h2>
          </div>
        </header>
        <main className="grid grid-cols-6 px-80 max-[1100px]:px-0 max-[1100px]:grid-cols-1">
          <div className="sidebar hidden max-[1100px]:block">
            <div className="flex justify-center p-5">
              <div className="rounded-lg border-2 border-red-700 p-1 hover:p-2 duration-300">
                <img
                  src="/img/me.jpg"
                  className="aspect-auto rounded-md hover:shadow-xl shadow-black duration-300"
                />
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-1 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">CONTACT</h3>
                <ul className="dot-margin list-disc list-inside">
                  <li className="py-1 px-5">
                    <a
                      className="underline"
                      href="tel:+989104531958"
                      target="_blank"
                    >
                      (+98)9104531958
                    </a>
                  </li>
                  <li className="py-1 px-5">
                    <a
                      className="underline"
                      href="mailto:a.mahkam.9500@gmail.com"
                      target="_blank"
                    >
                      a.mahkam.9500@gmail.com
                    </a>
                  </li>

                  <li className="flex flex-row justify-around py-3 px-5">
                    <a
                      href="https://github.com/AbolfazlMahkam/"
                      target="_blank"
                    >
                      <img src="/img/github.png" width={25} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abolfazl-mahkam/"
                      target="_blank"
                    >
                      <img src="/img/linkedin.png" width={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">SKILLS</h3>
                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                  <li className="py-1 px-5">
                    Full proficiency in HTML, CSS, JavaScript.
                  </li>
                  <li className="py-1 px-5">
                    Proficiency TypeScript, ReactJS, and NextJS.
                  </li>
                  <li className="py-1 px-5">
                    Skilled in TailwindCSS, Bootstrap, and responsive design
                    principles.
                  </li>
                  <li className="py-1 px-5">
                    Proficient in Node.js and MongoDB.
                  </li>
                  <li className="py-1 px-5">
                    Proficiency in Git, Figma, AdobeXD, and collaborative
                    workflows.
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">LANGUAGES</h3>
                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                  <li className="py-1 px-5">Persian - Native</li>
                  <li className="py-1 px-5">English - Intermediate(B1)</li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">EDUCATION</h3>
                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                  <div className="p-4 pl-6">
                    <h1 className="font-semibold text-xl">
                      Isalmic Azad University
                    </h1>
                    <h4 className="font-extralight">Oct 2023 - present</h4>
                    <h3>
                      Pursuing a Bachelor’s Degree in Computer Engineering
                    </h3>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className=" col-span-4">
            <div className="px-10 max-[1100px]:px-5">
              <div className="mx-auto border-l-8 border-red-700 my-1 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">ABOUT ME</h3>
                <p className="px-4 text-sm pb-4 text-justify">
                  I am a dedicated Front-End Developer with a passion for
                  building responsive, user-friendly websites and web
                  applications. Proficient in HTML, CSS, JavaScript, TypeScript,
                  and modern frameworks like React.js, I specialize in
                  transforming designs into functional, accessible, and visually
                  appealing interfaces. My focus is on creating seamless digital
                  experiences that meet user needs and solve real-world
                  problems.
                </p>
              </div>
            </div>
            <div className="px-10 max-[1100px]:px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">EXPERIENCES</h3>

                <article className="py-4">
                  <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                    <li className="py-1 px-5">
                      <a
                        className="underline"
                        href="https://mobasheran.org/"
                        target="_blank"
                      >
                        <strong>Front-End Developer</strong> at{" "}
                        <strong>Mobasheran</strong>
                      </a>
                      <h4 className="font-extralight my-2 ml-3">
                        Mar 2024 - Apr 2024 - Remote
                      </h4>
                      <ul>
                        <li className="py-1 px-5 text-justify">
                          Developed and optimized public pages and user panels
                          using HTML, CSS, and Tailwind, resulting in a 25%
                          improvement in site performance. Integrated
                          accessibility features to enhance usability for a
                          diverse range of users.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </article>
              </div>
            </div>

            <div className="px-10 max-[1100px]:px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">SELECTED PROJECT</h3>

                <article className="py-4">
                  <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                    <li className="py-1 px-5">
                      <a
                        className="underline"
                        href="https://github.com/AbolfazlMahkam/CRM-Workroom"
                        target="_blank"
                      >
                        <strong>CRM-Workroom</strong> Jan 2025
                      </a>
                      <ul>
                        <li className="py-1 px-5 text-justify">
                          Built a responsive web application inspired by a Figma
                          design using React.js, TailwindCSS, and Vite. Added
                          dark/light mode, dynamic data fetching with React
                          Query and Axios, and served data locally via
                          JSON-Server.
                        </li>
                      </ul>
                      <>
                        <h6 className="text-xs my-3">
                          <b>Technologies I used</b>
                        </h6>
                        <div className="flex flex-row justify-around text-xs">
                          <span className="cursor-pointer">ReactJS</span>
                          <span className="cursor-pointer">TailwindCSS</span>
                          <span className="cursor-pointer">Json-Server</span>
                          <span className="cursor-pointer">React Query</span>
                          <span className="cursor-pointer">Axios</span>
                        </div>
                      </>
                    </li>
                  </ul>
                </article>
                <article className="py-4">
                  <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                    <li className="py-1 px-5">
                      <a
                        className="underline"
                        href="https://github.com/AbolfazlMahkam/CRM-Workroom"
                        target="_blank"
                      >
                        <strong>ToDo List</strong> Dec 2024
                      </a>
                      <ul>
                        <li className="py-1 px-5 text-justify">
                          Built a task management tool using HTML, CSS,
                          TailwindCSS, and JavaScript. Integrated MongoDB for
                          efficient data storage and dynamic task handling.
                          Improved user productivity by 15% through seamless
                          task categorization and drag-and-drop functionality.
                        </li>
                      </ul>
                      <>
                        <h6 className="text-xs my-3">
                          <b>Technologies I used</b>
                        </h6>
                        <div className="flex flex-row justify-around text-xs">
                          <span className="cursor-pointer">EJS</span>
                          <span className="cursor-pointer">JavaScript</span>
                          <span className="cursor-pointer">TailwindCSS</span>
                          <span className="cursor-pointer">NodeJS</span>
                          <span className="cursor-pointer">ExpressJS</span>
                          <span className="cursor-pointer">MongoDB</span>
                        </div>
                      </>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>

          <div className="col-span-2 max-[1100px]:hidden">
            <div className="flex justify-center p-5">
              <div className="rounded-lg border-2 border-red-700 p-1 hover:p-2 duration-300">
                <img
                  src="/img/me.jpg"
                  className="aspect-auto rounded-md hover:shadow-xl shadow-black duration-300"
                />
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-1 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">CONTACT</h3>
                <ul className="dot-margin list-disc list-inside">
                  <li className="py-1 px-5">
                    <a className="underline" href="tel:+989104531958" target="_blank">
                      (+98)9104531958
                    </a>
                  </li>
                  <li className="py-1 px-5">
                    <a className="underline" href="mailto:a.mahkam.9500@gmail.com" target="_blank">
                      a.mahkam.9500@gmail.com
                    </a>
                  </li>

                  <li className="flex flex-row justify-around py-3 px-5 max-w-xs">
                    <a
                      className="underline"
                      href="https://github.com/AbolfazlMahkam/"
                      target="_blank"
                    >
                      <img src="/img/github.png" width={25} />
                    </a>
                    <a
                      className="underline"
                      href="https://www.linkedin.com/in/abolfazl-mahkam/"
                      target="_blank"
                    >
                      <img src="/img/linkedin.png" width={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">SKILLS</h3>
                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                  <li className="py-1 px-5">
                    Full proficiency in HTML, CSS, JavaScript.
                  </li>
                  <li className="py-1 px-5">
                    Proficiency TypeScript, ReactJS, and NextJS.
                  </li>
                  <li className="py-1 px-5">
                    Skilled in TailwindCSS, Bootstrap, and responsive design
                    principles.
                  </li>
                  <li className="py-1 px-5">
                    Proficient in Node.js and MongoDB.
                  </li>
                  <li className="py-1 px-5">
                    Proficiency in Git, Figma, AdobeXD, and collaborative
                    workflows.
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">LANGUAGES</h3>
                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                  <li className="py-1 px-5">Persian - Native</li>
                  <li className="py-1 px-5">English - Intermediate(B1)</li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                <h3 className="p-4 text-2xl text-red-600">EDUCATION</h3>
                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                  <div className="p-4 pl-6">
                    <h1 className="font-semibold text-xl">
                      Isalmic Azad University
                    </h1>
                    <h4 className="font-extralight">Oct 2023 - present</h4>
                    <h3>
                      Pursuing a Bachelor’s Degree in Computer Engineering
                    </h3>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
