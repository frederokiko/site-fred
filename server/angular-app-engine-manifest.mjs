
export default {
  basePath: '/site-fred/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
