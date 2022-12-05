import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {addTask, editTask} from '../features/tasks/tasksSlice'; //traer la funcion
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams} from 'react-router-dom'; 

const TasksFomr = () => {
  //useDispatch ==> Funcion que te permite disparar eventos desde nuestro Slice
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tasksSelector = useSelector(state => state.tasks)
  const params = useParams()
  const {idTask} = params

  const [task, setTask] = useState({
    title:'',
    description:''
  })

  useEffect(() =>{
    if(idTask){
      setTask(tasksSelector.find(res => res.id === idTask))
    }

  },[params,tasksSelector,idTask,task])


  const handleChange = e =>{
    setTask({
      ...task,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault()
    idTask ? dispatch(editTask(task)) : dispatch(addTask({id:uuid(), ...task}))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className='grid gap-5 w-2/6 bg-[#222] p-10 rounded-md'>
      <input name='title' type='text' placeholder='title' onChange={handleChange} value={idTask ? task.title : undefined} className='bg-transparent border-4 border-indigo-600 rounded-md py-3 px-2 outline-none'/>
      <textarea name='description' placeholder='description' onChange={handleChange} value={idTask ? task.description : undefined} className='bg-transparent border-4 border-indigo-600 resize-none rounded-md py-5 px-2 outline-none'></textarea>
      <div className='flex items-center justify-center'>
        <button type='submit' className='bg-green-500 rounded-sm p-2 px-10 border-2 border-transparent hover:bg-transparent hover:border-white ease duration-200'>Save</button>
      </div>
    </form>
  )
}

export default TasksFomr