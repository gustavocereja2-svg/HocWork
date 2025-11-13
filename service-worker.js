const CACHE_NAME = 'hoc-works-cache';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './empresa.html',
    './contato.html',
    './css/style.css',
    './js/script.js',
    './img/ícones/ícones png/icone oficial 192 - revisado.png',
    './img/ícones/ícones png/icone oficial 512 - revisado.png'
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );

});



