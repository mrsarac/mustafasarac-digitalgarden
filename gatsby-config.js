module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/mustafasarac-digitalgarden-home`,
      },
    },
  ],
  siteMetadata: {
    title: `Mustafa Saraç Digital Garden`,
  },
}
