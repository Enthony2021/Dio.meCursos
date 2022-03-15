const usuario = new Map();

usuario.set('Luiz', 'ADMIN');
usuario.set('Stephany', 'ADMIN');
usuario.set('Jorge', 'USER');
usuario.set('Natália', 'ADMIN');

const getAdmins = (map) => {
    let admins = [];

    for([key, value] of map) {
        if(value === 'ADMIN') {
            admins.push(key);
        }
    }

    return admins;
};

console.log(getAdmins(usuario));