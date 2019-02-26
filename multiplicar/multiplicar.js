// requireds
// const fs = require('express'); no nativo descargable
// const fs = require('./fs'); creado por nosotros

const fs = require('fs'); //nativo
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.magenta);
    console.log(`tabla de ${base}`.magenta);
    console.log('===================='.magenta);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato: ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${ limite }.txt`.green)
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}