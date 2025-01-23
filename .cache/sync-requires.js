
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/404.js")),
  "component---src-pages-assignments-index-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/assignments/index.js")),
  "component---src-pages-assignments-mdx-slug-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/assignments/{mdx.slug}.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/index.js")),
  "component---src-pages-resources-index-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/resources/index.js")),
  "component---src-pages-resources-mdx-slug-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/resources/{mdx.slug}.js")),
  "component---src-pages-tutorials-index-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/tutorials/index.js")),
  "component---src-pages-tutorials-mdx-slug-js": preferDefault(require("/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/src/pages/tutorials/{mdx.slug}.js"))
}

