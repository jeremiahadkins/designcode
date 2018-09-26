module.exports = {
  siteMetadata: {
    title: 'K Dot Fan Club',
    description: 'Consectetur incididunt eu eiusmod eiusmod id nostrud excepteur. Esse minim consequat ad adipisicing anim duis quis. Velit quis ipsum ipsum exercitation minim.',
    keywords: 'Ay, I remember syrup sandwiches and crime allowances'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'e1nzni4j8cxh',
        accessToken: '16051ae5f2ba0942815c5f19b8da3b49fd2bda5ae035f738a97a6fc2419dfa15'
      }
    }
  ],
}
