
console.log('Logica inicio sesion');

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
function pruebaBoton(){
    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value

    let usuarioLogueado= usuarios.some(usuario=> usuario.usuario.toLocaleUpperCase()==user && usuario.clave==pw)

    if(usuarioLogueado){
        setUser()
        window.open('Index.html')  
    }else{
        bloquearCuenta()
        console.log('error de credenciales'); 
    }

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

