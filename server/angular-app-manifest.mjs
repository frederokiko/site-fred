
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
    'index.csr.html': {size: 762, hash: 'cfe722f11104ade578e129240b7c0281bb6d81bb9e46dba1422790d47109b449', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: '01d795bd7972cae2119dad79338ed2c0c651eb823da0618c0292b823e4b3b4f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9227, hash: 'dca1497266b4d746f9f8a05a91c874f30bdf5fc1cc340f2c34d3fc9aecad184c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 21119, hash: 'aeea2c3d49f1c9defa0b72fc7f226498b82aa47bc2827fac041fb789b0afcfbf', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 9771, hash: '3d0ab8a3bd5f84aa602f128e959e7aa0ff14f26cff180205f42ff3b6e735a118', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 10377, hash: '5715b1e23fd1f3099815b9b53f5c326df762d43f422db2bc91bdd8a03f173638', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'legos/index.html': {size: 11877, hash: '0fbe20de8789a23e33fd4ec8a7164c57c49fdb07d969bce7dfae6959ac624e1f', text: () => import('./assets-chunks/legos_index_html.mjs').then(m => m.default)},
    'mirco/index.html': {size: 9489, hash: 'd96ab9729d980579ae3290aa0d1d1d86431d5fef8e0cf56e8f627da3ba6a9d4e', text: () => import('./assets-chunks/mirco_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9694, hash: 'b414e9e27cdede317f8ee7f0884bf999710dfeed7f091764b5ea9e686b3590a4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11746, hash: '62180315b43ccd790b8401cc4581f96534d46377fed615c943f1e7858e0c3666', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5CYBVDY3.css': {size: 78, hash: 'sKF2LJu0BfA', text: () => import('./assets-chunks/styles-5CYBVDY3_css.mjs').then(m => m.default)}
  },
};
