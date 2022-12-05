import { createSlice } from "@reduxjs/toolkit";

//createSlice
/* 
  Creamos el estado inicial, es un objeto el cual como primera instancia debe de tener un name, un estado inicial(claramente) y
  la propiedad reducer la cual es un objeto, donde vamos a poder crear nuestras funciones.
*/

const initialState = JSON.parse(localStorage.getItem('tasks'));


//Crear el estado inicial
export const taskSlice = createSlice({
  name:'tasks',
  initialState,
  reducers:{//Vamos a poder crear funciones para poder anadir, actualizar, eliminar, etc
    addTask: (state, action) =>{
      state.push(action.payload)
    },

    deleteTask:(state, action) =>{
      state.find(task => task.id === action.payload ? state.splice(state.indexOf(task), 1) : null)
    },
    editTask:(state, action) =>{
      const {id,title,description} = action.payload;
      const itFound = state.find(task => task.id === id)
      if(itFound){
        itFound.title = title;
        itFound.description = description;
      }

    }
  }
})

//Para traer las funciones de taskSlice
export const {addTask, deleteTask, editTask} = taskSlice.actions
//Para traer solo los reducer de taskSlice
export default taskSlice.reducer
