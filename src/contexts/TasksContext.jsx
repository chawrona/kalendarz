import { createContext, useState, useEffect } from 'react';
import generateUUID from "../utils/uuid";

const TasksContext = createContext();

const getTasksFromLocaleStorage = () => JSON.parse(localStorage.getItem("tasks") || '[]');
const saveTasksToLocaleStorage = tasks => localStorage.setItem("tasks", JSON.stringify(tasks));

function TasksProvider({children}) {
    const [tasks, setTasks] = useState(() => getTasksFromLocaleStorage());

    const addTask = newTask => setTasks(oldTasks => [...oldTasks, {id: generateUUID(), ...newTask}])

    const deleteTask = taskId => setTasks(oldTasks => {
        const newTasks = [...oldTasks]
        const taskIndex = newTasks.findIndex(task => task.id === taskId);
        newTasks.splice(taskIndex, 1);
        return newTasks;
    })

    const editTask = (taskId, newTask) => {
        setTasks(oldTasks => {
            let newTasks = [...oldTasks]
            const taskIndex = newTasks.findIndex(task => task.id === taskId);
            newTasks.splice(taskIndex, 1);
            newTasks = [...newTasks, {...newTask, id: generateUUID()}]
            return newTasks
        })
    }

    useEffect(() => saveTasksToLocaleStorage(tasks), [tasks])

    return (
        <TasksContext.Provider value={{tasks, addTask, deleteTask, editTask}}>
            {children}
        </TasksContext.Provider>
    )
     
}



export {TasksContext, TasksProvider}
