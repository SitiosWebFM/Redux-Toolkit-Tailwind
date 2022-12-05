import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/tasksSlice'
import { useNavigate } from 'react-router-dom'

const TasksList = () => {

  const tasks = useSelector(state => state.tasks)
  console.log(tasks);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  const handleDelete = (id) =>{
    dispatch(deleteTask(id))
  }



  
  

  return (
    <div className='w-4/6'>

      <header className='flex justify-between items-center py-4'>
        <h1>Tasks {tasks.length}</h1>
        <button onClick={() => {navigate('/create-task')}} className='bg-indigo-600 px-2 py-2 rounded-md text-sm'>Create Task</button>
      </header>

      <div className='grid grid-cols-3 gap-4'>
        {
          tasks.map(task => {
            return <div key={task.id} className='flex justify-between items-center bg-[#2d2d2dd0] py-4 rounded-md'>
              <div className='mx-2'>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className='mx-2'>
                <button onClick={() => {navigate(`/edit-task/${task.id}`)}} className='bg-green-600 px-1 py-1 rounded-md text-sm mx-1'>Edit</button>
                <button onClick={() => {handleDelete(task.id)}} className='bg-red-600 px-1 py-1 rounded-md text-sm mx-1'>Delete</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
    
  )
}

export default TasksList