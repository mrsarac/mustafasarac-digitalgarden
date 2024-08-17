module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/pages`,
        rootNote: `/000 Digital Garden`,
      },
    }
  ],
  siteMetadata: {
    title: `Mustafa Saraç - Digital Garden`,
  },
  
}
