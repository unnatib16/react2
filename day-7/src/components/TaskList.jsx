import { useState } from 'react'

const TaskList = ()=>{
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    const [selectedTask,setSelectedTask]=useState(null);

    const addTaskBhai=()=>{
        if(newTask.trim()==="")
            return;
        setTasks([...tasks,newTask])
        setNewTask("")
    };
    return(
        <>
        <h1>My Task App</h1>
        <input 
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}></input>
        <button onClick={addTaskBhai}>Add your task</button>
        <ul>
            {tasks.map((task,index)=>(
                <li key={index}>{task}</li>
            ))}
        </ul>
        </>
    )
}

export default TaskList