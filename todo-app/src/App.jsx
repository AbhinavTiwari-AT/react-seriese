import React,{useState,useEffect} from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskColumn from './Components/TaskColumn'
import todoicon from './assets/target.png'
import doingIcon from './assets/star.png'
import doneIcon from './assets/check_5610944.png'


const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);


function App() {

  
  const [tasks, setTasks] = useState(JSON.parse(oldTasks));

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))  
  },[tasks])
  
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks)
  }

  console.log("tasks", tasks)
 
  return (
    <>
      <div className='app'>
        <TaskForm setTasks={setTasks}/>
        <main className='app_main'>
          <TaskColumn title ="To do " icon={todoicon} tasks={tasks} status="todo"  handleDelete={handleDelete}/>
          <TaskColumn title ="Doing" icon={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
          <TaskColumn title ="Done" icon={doneIcon} tasks={tasks} status="done"  handleDelete={handleDelete}/>
        </main>
      </div>
    </>
  )
}

export default App
