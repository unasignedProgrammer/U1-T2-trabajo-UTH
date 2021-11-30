if (navigator.serviceWorker) {
    console.log('Si esta disponible el trabajo con el Service worker');
    //instalar el service worker
    navigator.serviceWorker
        .register('./sw.js')
        .then((registration) => {
            console.log('Service Worker Registration Success : ', registration);
        })
        .catch((err) => {
            console.log('Service Worker Registration Failed: ', err);
        });

    if (navigator.serviceWorker.controller) {
        console.log(
            'This page currently controlled by : ',
            navigator.serviceWorker.controller
        );
    }
    navigator.serviceWorker.oncontrollerchange = function () {
        console.log(
            'This page is now controlled by:',
            navigator.serviceWorker.controller
        );
    };
} else {
    console.log(
        'NO esta disponible el trabajo con el Service worker en este browser'
    );
}
