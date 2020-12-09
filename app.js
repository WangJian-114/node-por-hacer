// const argv = require("yargs").argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const { actualizar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando){

    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);

    break;

    case 'listar' :
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('=======Por Hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('=========================='.green);
        }

    break;

    case 'actualizar':
        
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        if(actualizado){
            console.log('Se actualizo con existo');
        }else {
            console.log('Hubo un error');
        }
    
    break;


    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);    

    break

    case 'ver':
        let listado2 = porHacer.verTarea(argv.completado);
        if(listado2){
            for(let tarea of listado2){
                console.log('=======Las tareas son =========='.red);
                console.log(tarea.descripcion);
                console.log('Estado: ',tarea.completado);
                console.log('=========================='.red);
            }
        }else{
            console.log('No existe tarea que cumpla la condicion');
        }
        

    break

    default:
        console.log('Comando no es reconocido');
}