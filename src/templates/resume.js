import * as React from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import avatar from "../assets/images/me.jpg";
import github from "../assets/images/github.png";
import linkedIn from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import { graphql } from "gatsby";
import Projects from "../components/Resume/Projects";
import PDFLayout from "../components/PDFLayout/index";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default (data) => {
    const socials = {
        github: github,
        linkedin: linkedIn,
        youtube: youtube,
    };
    const resume = data.data.resumeJson;
    const fileName = `${resume.name.replace(" ", "-")}-${resume.slug}.pdf`;

    return (
        <>
            {typeof window !== `undefined` && (
                <div className="absolute left-2/3 top-5 w-36 max-[1100px]:left-5">
                    <PDFDownloadLink
                        className="p-2 bg-red-500 text-white font-bold no-underline rounded-md duration-300 hover:bg-red-700 hover:shadow-xl"
                        document={<PDFLayout resume={resume} />}
                        fileName={fileName}
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? "Loading document..." : "Download PDF!"
                        }
                    </PDFDownloadLink>
                </div>
            )}
            <Layout className="block font-sans">
                <header>
                    <div>
                        <div className="w-1/2 h-14 border-r-2 border-black"></div>
                        <h1 className="text-4xl max-[1100px]:text-3xl font-mono text-center pt-2 josefinsans text-red-600">
                            <strong>{resume.name}</strong>
                        </h1>
                    </div>
                    <div className="flex flex-row pt-3 pb-8">
                        <div className="flex-1 h-4  mr-2">
                            <div className="border-b-2 border-red-700 w-full h-full"></div>
                        </div>
                        <h2 className="flex-1 text-lg font-sans">{resume.title}</h2>
                    </div>
                </header>
                <main className="flex max-w-screen-xl mx-auto flex-wrap">
                    <div className="sidebar hidden max-[1100px]:block">
                        <div className="flex justify-center p-5">
                            <div className="rounded-lg border-2 border-red-700 p-1 hover:p-2 duration-300">
                                <img
                                    src={avatar}
                                    className="aspect-auto rounded-md hover:shadow-xl shadow-black duration-300"
                                />
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-1 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">CONTACT</h3>
                                <ul className="dot-margin list-disc list-inside">
                                    {resume.contact.map((item, index) => (
                                        <li className="py-1 px-5" key={index}>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    ))}

                                    <li className="flex flex-row justify-around py-3 px-5 max-w-xs">
                                        {resume.social.map((item, index) => (
                                            <a href={item.link} key={index}>
                                                <img src={socials[item.name]} width={25} />
                                            </a>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">SKILLS</h3>
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    {resume.skills.map((item, index) => (
                                        <li key={index} className="py-1 px-5">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">LANGUAGES</h3>
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    {resume.languages.map((item, index) => (
                                        <li key={index} className="py-1 px-5">
                                            {item}
                                        </li>
                                    ))}
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
                        {/* <Projects projects={resume.projects} /> */}
                    </div>

                    <div className="main">
                        <div className="px-10 max-[1100px]:px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-1 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">ABOUT ME</h3>
                                <p
                                    className="px-4 text-sm pb-4 text-justify"
                                    dangerouslySetInnerHTML={{ __html: resume.about }}
                                ></p>
                            </div>
                        </div>
                        <div className="px-10 max-[1100px]:px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">EXPERIENCES</h3>
                                {resume.experiences.map((item, index) => (
                                    <article className="py-4" key={index}>
                                        <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                            <li className="py-1 px-5">
                                                <a
                                                    href={item.url}
                                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                                ></a>
                                                <h4 className="font-extralight my-2 ml-3">
                                                    {item.time} - {item.type}
                                                </h4>
                                                <p className="text-justify">{item.description}</p>
                                                <ul>
                                                    {item.responsibilities.map((item, index) => (
                                                        <li
                                                            className="py-1 px-5 text-justify"
                                                            key={index}
                                                            dangerouslySetInnerHTML={{
                                                                __html: item,
                                                            }}
                                                        ></li>
                                                    ))}
                                                </ul>
                                                {/* {item.technologies && (
                          <>
                            <h6 className="text-xs">
                              <b>Technologies I used</b>
                            </h6>
                            <div className="flex flex-row justify-around text-xs">
                              {item.technologies.map((item, index) => (
                                <span
                                  key={index}
                                  dangerouslySetInnerHTML={{
                                    __html: item,
                                  }}
                                ></span>
                              ))}
                            </div>
                          </>
                        )} */}
                                            </li>
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="px-10 max-[1100px]:px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">SELECTED PROJECT</h3>
                                {resume.selectedProject.map((item, index) => (
                                    <article className="py-4" key={index}>
                                        <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                            <li className="py-1 px-5">
                                                <a
                                                    href={item.url}
                                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                                ></a>
                                                <p className="text-justify">{item.description}</p>
                                                <ul>
                                                    {item.responsibilities.map((item, index) => (
                                                        <li
                                                            className="py-1 px-5 text-justify"
                                                            key={index}
                                                            dangerouslySetInnerHTML={{
                                                                __html: item,
                                                            }}
                                                        ></li>
                                                    ))}
                                                </ul>
                                                {item.technologies && (
                                                    <>
                                                        <h6 className="text-xs my-3">
                                                            <b>Technologies I used</b>
                                                        </h6>
                                                        <div className="flex flex-row justify-around text-xs">
                                                            {item.technologies.map(
                                                                (item, index) => (
                                                                    <span
                                                                        key={index}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: item,
                                                                        }}
                                                                    ></span>
                                                                )
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </li>
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sidebar max-[1100px]:hidden">
                        <div className="flex justify-center p-5">
                            <div className="rounded-lg border-2 border-red-700 p-1 hover:p-2 duration-300">
                                <img
                                    src={avatar}
                                    className="aspect-auto rounded-md hover:shadow-xl shadow-black duration-300"
                                />
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-1 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">CONTACT</h3>
                                <ul className="dot-margin list-disc list-inside">
                                    {resume.contact.map((item, index) => (
                                        <li className="py-1 px-5" key={index}>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    ))}

                                    <li className="flex flex-row justify-around py-3 px-5 max-w-xs">
                                        {resume.social.map((item, index) => (
                                            <a href={item.link} key={index}>
                                                <img src={socials[item.name]} width={25} />
                                            </a>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">SKILLS</h3>
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    {resume.skills.map((item, index) => (
                                        <li key={index} className="py-1 px-5">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="mx-auto border-l-8 border-red-700 my-7 rounded-lg josefinsans">
                                <h3 className="p-4 text-2xl text-red-600">LANGUAGES</h3>
                                <ul className="dot-margin list-disc list-inside text-sm align-top font-sans">
                                    {resume.languages.map((item, index) => (
                                        <li key={index} className="py-1 px-5">
                                            {item}
                                        </li>
                                    ))}
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
                        {/* <Projects projects={resume.projects} /> */}
                    </div>
                </main>
            </Layout>
        </>
    );
};

export const Head = () => <title>Resume Mohammad Javad Ghasemy</title>;

export const query = graphql`
    query ($slug: String!) {
        resumeJson(slug: { eq: $slug }) {
            id
            slug
            name
            title
            contact {
                link
                name
                title
            }
            social {
                title
                name
                link
            }
            skills
            projects {
                title
                url
                thumbnail
                stack
                description
            }
            about
            experiences {
                title
                role
                company
                time
                type
                url
                description
                responsibilities
            }
            selectedProject {
                title
                role
                company
                time
                type
                url
                description
                responsibilities
                technologies
            }
            languages
            educations
        }
    }
`;
