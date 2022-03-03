require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "32ewkwNTh2TkFG4UE8oAjQtt",
        version: "draft",
        localAssets: true,
      },
    },
  ],
};
