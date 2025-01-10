
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/site-fred/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/site-fred"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/about"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/contact"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/profile"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/settings"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/legos"
  },
  {
    "renderMode": 2,
    "route": "/site-fred/mirco"
  },
  {
    "renderMode": 2,
    "redirectTo": "/site-fred",
    "route": "/site-fred/**"
  }
],
  assets: {
    'index.csr.html': {size: 718, hash: '407865fc998feadbbf5ead92d2a0428001d0a78e752f95c62364345c2afe2c5b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'f78db6dd3e4fcc20b3403e24e1a562fd72f341bc3b62a3a68a98edae2c9ea56c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9650, hash: 'ff4f0b334782047652ec9bfdece0f1a16d2ffd992f8d6244b730f1da9e376655', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 21075, hash: 'f9f231ef106830225e77daa619703c25f9fdd6a1bc33bcc8851651b1119449e5', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11702, hash: '54951f68b5484c7cbdb53e6965f567112a2474b12c46ae90c3c4de2a8028d646', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 9727, hash: 'c6ecd46a8317fd47bdca2e4e398dbc5fc820e7769e32942c3d6c3e8889bdbe8d', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 10333, hash: 'c8252eeac1d55cf3834010becb4506878633f75edd7bea597d76d8f845e8ec54', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9183, hash: '5c98ec23b966a329c778b23710ecbb852753c26893e8341c28eeba7814dde68a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'legos/index.html': {size: 11833, hash: '735cf523221bfafb9bec5c46f5ad3e10def5bcfa3767587680e71e7c7d2dde75', text: () => import('./assets-chunks/legos_index_html.mjs').then(m => m.default)},
    'mirco/index.html': {size: 9445, hash: '11d7a50cd2e3ebc839e3f5972686ff5ea27efc6c0e7f56eb40c4a7183c00f10c', text: () => import('./assets-chunks/mirco_index_html.mjs').then(m => m.default)},
    'styles-5CYBVDY3.css': {size: 78, hash: 'sKF2LJu0BfA', text: () => import('./assets-chunks/styles-5CYBVDY3_css.mjs').then(m => m.default)}
  },
};
