if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!a[e]&&(await new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}),!a[e]))throw new Error(`Module ${e} didn’t register its module`);return a[e]},i=async(i,a)=>{const c=await Promise.all(i.map(e));a(1===c.length?c[0]:c)};i.toUrl=e=>`./${e}`;const a={require:Promise.resolve(i)};self.define=(i,c,r)=>{a[i]||(a[i]=new Promise(async a=>{let n={};const s={uri:location.origin+i.slice(1)},o=await Promise.all(c.map(i=>"exports"===i?n:"module"===i?s:e(i))),f=r(...o);n.default||(n.default=f),a(n)}))}}define("./service-worker.js",["./workbox-7c85bfc1"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/about.9cf274f2.css",revision:"9d31b2f416ec5d687b1634abe719b5c7"},{url:"css/app.1b59762c.css",revision:"1a9e6690fc946f32d7cd912a57132987"},{url:"css/chunk-vendors.68a31c38.css",revision:"7803598da28c6d7f03726cbf29ec9a90"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"fonts/element-icons.535877f5.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"fonts/element-icons.732389de.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"fonts/source-sans-pro-italic.72217712.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"fonts/source-sans-pro-italic.8256cfd7.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"fonts/source-sans-pro-italic.e74f0128.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"fonts/source-sans-pro-regular.1d714384.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"fonts/source-sans-pro-regular.2da39ecf.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"fonts/source-sans-pro-regular.e7acc589.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"fonts/source-sans-pro-semibold.0f3da1ed.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"fonts/source-sans-pro-semibold.1cb8e94f.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"fonts/source-sans-pro-semibold.f3565095.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"fonts/source-sans-pro-semibolditalic.58153ac7.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"fonts/source-sans-pro-semibolditalic.6b058fc2.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"fonts/source-sans-pro-semibolditalic.c7e698a4.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"img/Clear_Plastic.6ab8c866.png",revision:"6ab8c8661b6826e63149061463eaf2e7"},{url:"img/Clear_Plastic_+Sunblock.64fd3fb1.png",revision:"64fd3fb15490e4fe9f9c359ad26954c8"},{url:"img/Green_Cellophane.6b9682a3.png",revision:"6b9682a3bd120fde18b9edcc75b497f9"},{url:"img/Kraft_Paper.3ddf0292.png",revision:"3ddf02928e241553b2cfee3544615aab"},{url:"img/LUXlearn.38c35843.png",revision:"38c358430448ea694352efbfba109b62"},{url:"img/Paper_Napkin.332b0a76.png",revision:"332b0a76a350ef2f1012fd46577b4475"},{url:"img/Pic.301deb2b.png",revision:"301deb2bfbbb26d8fab55b62557a3101"},{url:"img/Red_Paper.ca951bed.png",revision:"ca951beda92ffacfda0ccd974d990c1e"},{url:"img/UVlearn.d9ee413e.png",revision:"d9ee413e5037011c5f27a3f3d24b5be2"},{url:"img/UVlearn2.099afa2e.png",revision:"099afa2ebb2e91deeb81943baf539c51"},{url:"img/ZallyConnect.4152f3a7.png",revision:"4152f3a7228a2238be24b5e9eb10e07b"},{url:"img/ZallyMaterial.31a46b2a.png",revision:"31a46b2a9acde8bdda1d4ef791cc24b9"},{url:"img/ZallyMaterialQuestion.17305a08.png",revision:"17305a08525476e16b096ca8226fd15d"},{url:"img/ZallyText.dbb5d714.png",revision:"dbb5d714cfa3104f0fa21075728844df"},{url:"img/addYourMaterial.f8e7ef89.png",revision:"f8e7ef8926bf653ea81332e4f52b7be9"},{url:"img/collectdata.314bf698.png",revision:"314bf6988cec6192f29c335a80e12f73"},{url:"img/dashed_line.235c06ee.png",revision:"235c06ee608dda6aea1e37abee8d18ed"},{url:"img/data-collector-badge.603d5c13.png",revision:"603d5c13c88f6b44bee92e1a9da79ebe"},{url:"img/great-job.483c61c6.png",revision:"483c61c6ba2b1740cbf3a5ccfe7a31fa"},{url:"img/guide.5db1b3c2.png",revision:"5db1b3c2fe362e4ca77f2cf44fe95f75"},{url:"img/guide2.3a925fcd.png",revision:"3a925fcd20e559e8e6e56fc9e9877f9e"},{url:"img/handmadepaper.c0d8859c.png",revision:"c0d8859c1a91583fbb1e34f21c3f5bb7"},{url:"img/happy_sally.ce2ab30a.png",revision:"ce2ab30a160d683bf9cf31e8ec60c9f8"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"f78c0251d6ddd56ee219a1830ded71b4"},{url:"img/kiwrious_sensor.bdd86f5d.png",revision:"bdd86f5d873b83c560f15544fcae83b4"},{url:"img/logo.82b9c7a5.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"img/pausebtn.f4fd495a.png",revision:"f4fd495aa8559c62de6d11bc8351375a"},{url:"img/playbtn.9ad0f1e8.png",revision:"9ad0f1e8355ab26b11b2e44608f78b74"},{url:"img/sad_sally.c0cd6967.png",revision:"c0cd696757e385f634b31d65a7ccfe9c"},{url:"img/sunburnt_sally.541331d3.png",revision:"541331d3767ed4e12da9ca7d5df7b914"},{url:"img/uv_arrow.f6937a75.png",revision:"f6937a755bc612e5d1eda12272937f57"},{url:"index.html",revision:"40b20103512371704228bde3f6432841"},{url:"js/about.ad527d7b.js",revision:"9b71d45c401e80ec4f8be65cd54d0901"},{url:"js/app.196cc7a7.js",revision:"93f769682d44eca067c2a6f1e21a92b3"},{url:"js/chunk-vendors.22c3cc6f.js",revision:"7f76030619ca844c6ee75db4b12786aa"},{url:"manifest.json",revision:"f6a46f4f30bc161e67ad07e29efe9393"},{url:"robots 2.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
