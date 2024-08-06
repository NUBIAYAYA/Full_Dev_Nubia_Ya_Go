

const usuario = 'admin'
const clave = '1234'
let contador =0
let intentosFallidos = {};

let  usuarios = [
    { id: 1, usuario: 'usuario1', clave: '1234' },
    { id: 2, usuario: 'usuario2', clave: '5678' },
    { id: 3, usuario: 'usuario3', clave: '9101' },
    { id: 4, usuario: 'usuario4', clave: '1121' },
    { id: 5, usuario: 'usuario5', clave: '3141' }
];

function pruebaBoton(){
    let user = document.getElementById('user').value
    let buscarUsuario= usuarios.find(usuario=> usuario.usuario===user)

}