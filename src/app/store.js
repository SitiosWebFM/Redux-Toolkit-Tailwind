import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';//traemos el por defecto


//configureStore 
/*
  Configuramos y creamos el store, el cual acepta un solo parametro que es un objeto, dentro de el va la propiedad reducer, en cual es donde vamos a poner
  nuestras funciones o estados que vamos a posar a nustros demás componentes..
*/

//Agrupa archivos donde se guardan datos o se definen estados todo de 1
export const store = configureStore({
  reducer:{
    tasks: tasksReducer
  }
})
