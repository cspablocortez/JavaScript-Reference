const VERSION = "v1"
const CACHE_NAME = `PWA-Clock-${VERSION}`
const APP_STATIC_RESOURCES = [
    "/",
    "index.html",
    "style/normalize",
    "style/skeleton.css",
    "style/style.css",
    "js/clock.js",
    "js/darkMode.js",
    "icons/android-chrome-512x512.png"
]

self.addEventListener("install", (e) => {
    e.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(APP_STATIC_RESOURCES);
    })(),
    );
});