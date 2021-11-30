if (navigator.serviceWorker) {
    console.log('Si esta disponible el trabajo con el Service worker');
    //instalar el service worker
    navigator.serviceWorker
        .register('./sw.js')
        .then((registration) => {
            console.log('Service Worker Registration Success');
        })
        .catch((err) => {
            console.log('Service Worker Registration Failed: ');
        });
} else {
    console.log(
        'NO esta disponible el trabajo con el Service worker en este browser'
    );
}
