import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, f as deserializeManifest } from './chunks/astro.5ef005db.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5 } from './chunks/pages/all.1da07180.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                */import '@sanity/client';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/itineraries.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/videos.astro", _page3],["src/pages/blog.astro", _page4],["src/pages/post/[slug].astro", _page5],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"function e(){document.getElementById(\"menu-bar\").classList.toggle(\"change\"),document.getElementById(\"nav\").classList.toggle(\"change\"),document.getElementById(\"menu-bg\").classList.toggle(\"change-bg\")}document.getElementById(\"menu-bar\").addEventListener(\"click\",e);\n"}],"styles":[{"type":"external","src":"/_astro/blog.fdd3dabd.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function e(){document.getElementById(\"menu-bar\").classList.toggle(\"change\"),document.getElementById(\"nav\").classList.toggle(\"change\"),document.getElementById(\"menu-bg\").classList.toggle(\"change-bg\")}document.getElementById(\"menu-bar\").addEventListener(\"click\",e);\n"}],"styles":[{"type":"external","src":"/_astro/blog.fdd3dabd.css"}],"routeData":{"route":"/itineraries","type":"page","pattern":"^\\/itineraries\\/?$","segments":[[{"content":"itineraries","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/itineraries.astro","pathname":"/itineraries","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function e(){document.getElementById(\"menu-bar\").classList.toggle(\"change\"),document.getElementById(\"nav\").classList.toggle(\"change\"),document.getElementById(\"menu-bg\").classList.toggle(\"change-bg\")}document.getElementById(\"menu-bar\").addEventListener(\"click\",e);\n"}],"styles":[{"type":"external","src":"/_astro/blog.fdd3dabd.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function e(){document.getElementById(\"menu-bar\").classList.toggle(\"change\"),document.getElementById(\"nav\").classList.toggle(\"change\"),document.getElementById(\"menu-bg\").classList.toggle(\"change-bg\")}document.getElementById(\"menu-bar\").addEventListener(\"click\",e);\n"}],"styles":[{"type":"external","src":"/_astro/blog.fdd3dabd.css"}],"routeData":{"route":"/videos","type":"page","pattern":"^\\/videos\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/videos.astro","pathname":"/videos","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function e(){document.getElementById(\"menu-bar\").classList.toggle(\"change\"),document.getElementById(\"nav\").classList.toggle(\"change\"),document.getElementById(\"menu-bg\").classList.toggle(\"change-bg\")}document.getElementById(\"menu-bar\").addEventListener(\"click\",e);\n"}],"styles":[{"type":"external","src":"/_astro/blog.fdd3dabd.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/[slug]","type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["C:/Users/jimen/Documents/TikirRaiders/TikiRaidersWeb/fontend/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/jimen/Documents/TikirRaiders/TikiRaidersWeb/fontend/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/jimen/Documents/TikirRaiders/TikiRaidersWeb/fontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/jimen/Documents/TikirRaiders/TikiRaidersWeb/fontend/src/pages/itineraries.astro",{"propagation":"none","containsHead":true}],["C:/Users/jimen/Documents/TikirRaiders/TikiRaidersWeb/fontend/src/pages/videos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.d21e178d.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/blog.fdd3dabd.css","/favicon1.ico","/fullFrame_main.psd","/fullFrame_main_1.1.2.drx","/fullFrame_main_1.1.2.png","/logo.png","/MainPhoto (2).png","/MainPhoto.png","/MainPhoto_2.png","/MainPhoto_2_min.png","/MainPhoto_3.png","/MainPhoto_3_mid.png","/MainPhoto_3_min.png","/MainPhoto_new_1.1.1.drx","/MainPhoto_new_1.1.1.png","/MenuPicture.exr","/MenuPicture.psd","/MenuPicture_2.psd","/Untitled Project.aep","/assest/Bronco_edit.png","/assest/facebook.png","/assest/instagram.png","/assest/JimmyKimTree.jpg","/assest/JimmyKim_Bryce.jpg","/assest/JimmyKim_Island.jpg","/assest/JimmyKim_Ocean.jpg","/assest/JimmyKim_Ocean2.jpg","/assest/Kimanddog.png","/assest/MainPhotoNew_2.png","/assest/MainPhotoNew_2_large.png","/assest/MainPhotoNew_3_mid.png","/assest/MainPhotoNew_3_min.png","/assest/RV.jpg","/assest/tik-tok.png"]}), {
	pageMap: pageMap,
	renderers: renderers,
	
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };