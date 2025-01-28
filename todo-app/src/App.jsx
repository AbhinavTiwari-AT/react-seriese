import React,{useState,useEffect} from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskColumn from './Components/TaskColumn'
import todoicon from './assets/target.png'
import doingIcon from './assets/star.png'
import doneIcon from './assets/check_5610944.png'


const oldTasks = localStorage.getItem("tasks");


function App() {

  
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))  
  },[tasks])
  
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks)
  }

  // console.log("tasks", tasks)

  const onDrop = (status, position) => {
    console.log(`${activeCard} is going to place into ${status} and at the position ${position}`);

    if(activeCard == null || activeCard == undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task,index) => index !== activeCard )

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    })

    setTasks(updatedTasks)
  }
 
  return (
    <>
      <div className='app'>
        <TaskForm setTasks={setTasks}/>
        <main className='app_main'>
          <TaskColumn title ="To do " 
                      icon={todoicon} 
                      tasks={tasks} 
                      status="todo"  
                      handleDelete={handleDelete}
                      setActiveCard={setActiveCard}
                      onDrop={onDrop}
          />
          <TaskColumn title ="Doing" 
                      icon={doingIcon} 
                      tasks={tasks} 
                      status="doing" 
                      handleDelete={handleDelete}
                      setActiveCard={setActiveCard}
                      onDrop={onDrop}
          />
          <TaskColumn title ="Done" 
                      icon={doneIcon} 
                      tasks={tasks} 
                      status="done"  
                      handleDelete={handleDelete}
                      setActiveCard={setActiveCard}
                      onDrop={onDrop}
          />
        </main>
      </div>
    </>
  )
}

export default App
