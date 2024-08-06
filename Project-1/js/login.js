

const usuario = 'admin'
const clave = '1234'
let contador =0


let  usuarios = [
    { usuario: 'usuario1', clave: '1234' },
    { usuario: 'usuario2', clave: '5678' },
    { usuario: 'usuario3', clave: '9101' },
    { usuario: 'usuario4', clave: '1121' },
    { usuario: 'usuario5', clave: '3141' },
];

function pruebaBoton(){
    let user = document.getElementById('user').value
    let buscarUsuario= usuarios.find(usuario=> usuario.usuario===user)

}