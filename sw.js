var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/U1-T2-trabajo-UTH/',
    '/U1-T2-trabajo-UTH/index.html',
    '/U1-T2-trabajo-UTH/imagenes/computah.png',
    '/U1-T2-trabajo-UTH/imagenes/user.png',
    'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css',
];

self.addEventListener('install', function (event) {
    //Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then((caches) => {
            console.log('Opened cache');
            return caches.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('El SW se ha activado.');
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
