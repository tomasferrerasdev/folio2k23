export default async function sitemap() {
  const routes = ['', '/case'].map((route) => ({
    url: `https://tomasferreras.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  return [...routes];
}
