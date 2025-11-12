const CACHE_NAME = 'hoc-works-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './empresa.html',
    './contato.html',
    './css/style.css',
    './js/script.js',
    './img/icones/icones_png/icone_192.png',
    './img/icones/icones_png/icone_512.png'
];

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Fazendo cache dos arquivos');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Ativado');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
