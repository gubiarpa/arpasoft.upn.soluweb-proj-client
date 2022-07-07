
function onSubmit() {
    grecaptcha.ready(async function () {
        grecaptcha.execute('6Le-DrsgAAAAAFm0vlahrJBIl7GGeckE-a0ScTpI', { action: 'submit' })
            .then(async function (token) {
                
                const captcha = token;

                const nombre = document.querySelector('#txtNombre');
                const telefono = document.querySelector('#txtTelefono');
                const mensaje = document.querySelector('#txtMensaje');

                const contacto = {
                    name: nombre.value,
                    telephone: telefono.value,
                    message: mensaje.value
                };

                const data = await postEndpoint('contacto', contacto, captcha);
            });
    });
}
