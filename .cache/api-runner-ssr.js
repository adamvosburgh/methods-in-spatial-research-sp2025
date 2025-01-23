var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-plugin-mdx/gatsby-ssr.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-images","id":"d4bb4911-6c75-56a1-ab96-dc92001ad515","name":"gatsby-remark-images","version":"6.25.0","modulePath":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":800,"linkImagesToOriginal":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-image-attributes","id":"951f2ce3-31d6-5a06-88e4-6f28e1991ffd","name":"gatsby-remark-image-attributes","version":"1.1.0","modulePath":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby-remark-image-attributes/dist/index.js","module":{},"pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      name: 'partytown',
      plugin: require('/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
