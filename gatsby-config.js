module.exports = {
  siteMetadata: {
    title: `Xavier Marcus Duncan | Software Engineer`,
    description: `✨ open-sourcerer.`,
    author: `@xmd404`,
    baseUrl: `https://www.xavier.fun`, // No trailing slash allowed!
    image: `/images/xavier_duncan_headshot.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@xmd404`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/xavier_duncan_headshot.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}