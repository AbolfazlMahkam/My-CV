/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: "/MY-CV",
    siteMetadata: {
        title: `Resume Abolfazl Mahkam`,
        siteUrl: `https://resume.abolfazl-mahkam.ir`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        // "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/assets/logo.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/assets/images/",
            },
            __key: "images",
        },
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "resume",
                path: "./src/resume/",
            },
            __key: "resume",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
