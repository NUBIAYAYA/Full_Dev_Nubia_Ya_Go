
let usuario = JSON.parse(localStorage.getItem("usuarios")) || [];
let  usuarios = [
    { id: 1, usuario: 'usuario1', clave: '1234' },
    { id: 2, usuario: 'usuario2', clave: '5678' },
    { id: 3, usuario: 'usuario3', clave: '9101' },
    { id: 4, usuario: 'usuario4', clave: '1121' },
    { id: 5, usuario: 'usuario5', clave: '3141' }
];
let intentosFallidos = {};

function iniciarSesion() {
    const usuarioInput = document.getElementById('usuario').value;
    const claveInput = document.getElementById('clave').value;
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuarioInput);

    if (!usuarioEncontrado) {
        alert('Usuario no encontrado');
        incrementarIntentos(usuarioInput);
        return;
    }

    if (usuarioEncontrado.clave !== claveInput) {
        alert('Clave incorrecta');
        incrementarIntentos(usuarioInput);
        return;
    }

    alert('Inicio de sesión exitoso');
    resetIntentos(usuarioInput);
}

function incrementarIntentos(usuario) {
    if (!intentosFallidos[usuario]) {
        intentosFallidos[usuario] = 1;
    } else {
        intentosFallidos[usuario]++;
    }

    if (intentosFallidos[usuario] >= 3) {
        alert('Usuario bloqueado. Demasiados intentos fallidos.');
        bloquearUsuario(usuario);
    }
}
function resetIntentos(usuario) {
    if (intentosFallidos[usuario]) {
        intentosFallidos[usuario] = 0;
    }
}

function bloquearUsuario(usuario) {
    const usuarioBloqueado = usuarios.find(u => u.usuario === usuario);
    if (usuarioBloqueado) {
        usuarioBloqueado.bloqueado = true;
    }
}

function estaBloqueado(usuario) {
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario);
    return usuarioEncontrado && usuarioEncontrado.bloqueado;
}

