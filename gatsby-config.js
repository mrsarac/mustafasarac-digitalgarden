module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/garden`,
        rootNote: `/000-mustafasarac-digitalgarden-home`,
      },
    },
  ],
  siteMetadata: {
    title: `Mustafa Saraç Digital Garden`,
  },
}
