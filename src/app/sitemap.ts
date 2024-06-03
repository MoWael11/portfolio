export default function sitemap() {
  const routes = [''].map((route) => ({
    url: `${process.env.NODE_URL}${route}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes]
}
