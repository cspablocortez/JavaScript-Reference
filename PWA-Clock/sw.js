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
    console.log('Service Worker: Installed');
    // e.waitUntil((async () => {
    //     const cache = await caches.open(CACHE_NAME);
    //     cache.addAll(APP_STATIC_RESOURCES);
    // })(),
    // );
});

self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    e.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache.');
                        return caches.delete(name);
                    }
                }),
            );
            await clients.claim();
        })(),
    );
});

self.addEventListener('fetch', (e) => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
            .then((res) => {
                const resClone = res.clone();
                caches
                    .open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(e.request, resClone)
                    });
                return res;
            }).catch((err) => caches.match(e.request).then((res) => res))
    );
});