var button = document.querySelector('#notificacionBtn');

button.addEventListener('click', function (e) {
    if (Notification.permission == 'granted') {
        NotificacionRandom();
    }
});

function NotificacionRandom() {
    var notifTitle = 'Mucho love';
    var notifBody = 'Gracias por habilitar notificaiones!';
    var notifImg = './imagenes/iconos/icono-72.png';

    var options = {
        body: notifBody,
        icon: notifImg,
    };

    var notif = new Notification(notifTitle, options);
}