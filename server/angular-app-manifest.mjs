
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/settings"
  },
  {
    "renderMode": 2,
    "route": "/legos"
  },
  {
    "renderMode": 2,
    "route": "/mirco"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 708, hash: '9fdcc65ca39a0385f08849c13cef3bd7b434c9c5f1b482b99b69e3ba76dffe8e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '98df65320cc3ba4371d85bbcadbf909bfa7f21f132f8e00f4e619199225739de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9093, hash: 'cba728b883b8795caa5e7baaa55669cadf6ebb9ca093cd7b2739e9eeb996195a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9560, hash: '2f2d08e772db4d2ac8b57fd5623363713dbf42317538bca5e04b98d8398dfe4a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 20985, hash: '28260e92680c78d5b51522445793d0d6ced0eaf0f145c80d97801f252ee721a4', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 10243, hash: '5f656b41f9f9d2228b5004d7542871b230bfc70df9fdffe2ec9c9a70f0a5e097', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 9637, hash: '895da49a7603680b39a13a25498e50dd56c389db7fa8df8167616017aa04fb0a', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'legos/index.html': {size: 11743, hash: '6f52e2b1656c7df90a1c752568b6f2eb9928267d5b3431141cb29240664a4143', text: () => import('./assets-chunks/legos_index_html.mjs').then(m => m.default)},
    'mirco/index.html': {size: 9355, hash: 'd98da2e95dcd4dc39bf8a0b6c5ae985a1b676b8cd3b5844d28dd2638081ca611', text: () => import('./assets-chunks/mirco_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11612, hash: 'da93850da693db7d6aaf81710916e80eb6c550717abc7718b746b92d04911f40', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5CYBVDY3.css': {size: 78, hash: 'sKF2LJu0BfA', text: () => import('./assets-chunks/styles-5CYBVDY3_css.mjs').then(m => m.default)}
  },
};
