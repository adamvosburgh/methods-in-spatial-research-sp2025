module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-images","id":"d4bb4911-6c75-56a1-ab96-dc92001ad515","name":"gatsby-remark-images","version":"6.25.0","modulePath":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":800,"linkImagesToOriginal":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-image-attributes","id":"951f2ce3-31d6-5a06-88e4-6f28e1991ffd","name":"gatsby-remark-image-attributes","version":"1.1.0","modulePath":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-image-attributes/dist/index.js","module":{},"pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800,"linkImagesToOriginal":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
