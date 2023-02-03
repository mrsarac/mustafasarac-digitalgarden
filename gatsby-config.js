module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-Q5GQHSWLE6",
        head: true,
        anonymize: true,
      },
    },
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
