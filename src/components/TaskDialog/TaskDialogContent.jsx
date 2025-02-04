
import { TasksContext } from '../../contexts/TasksContext';
import styles from './TaskDialog.module.scss';
import { useContext, useState } from 'react';

export default function TaskDialogContent({ task, toggleDialog }) {
  const [taskData, setTaskData] = useState(() => {
    return task ? task : { title: '', date: '', priority: 'small' }
  });


  const { addTask, deleteTask, editTask } = useContext(TasksContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDelete = () => {
    if (confirm("Czy chcesz usunąć to zadanie?")) { 
        toggleDialog() 
        deleteTask(task.id) 
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleDialog()
    console.log(!!task);
    if (task) editTask(task.id, taskData)
    else addTask(taskData);
  };

  return (
    <div className={styles.dialogWrapper}>
      <form onSubmit={handleSubmit}>
        <h2>{task ? "Edytuj zadanie" : "Dodaj zadanie"}</h2>
        <label htmlFor="task">
          <p className={styles.dateLabel}>Tytuł</p>
          <textarea name="title" id="task" placeholder="Do zrobienia..." value={taskData.title} onChange={handleInputChange} required></textarea>
        </label>

        <label htmlFor="date">
          <p className={styles.dateLabel}>Data</p>
          <input type="date" id="date" name="date" value={taskData.date} onChange={handleInputChange} required/>
        </label>

        <p className={styles.p}>Priorytet</p>
        <div className={styles.prioritiesContainer}>
          <input type="radio" name="priority" id="small" value="small" checked={taskData.priority === 'small'} onChange={handleInputChange} />
          <label htmlFor="small" data-priority="small" className={styles.priorityLabel}>Small</label>
          <input type="radio" name="priority" id="medium" value="medium" checked={taskData.priority === 'medium'} onChange={handleInputChange} />
          <label htmlFor="medium" data-priority="medium" className={styles.priorityLabel}>Medium</label>
          <input type="radio" name="priority" id="high" value="high" checked={taskData.priority === 'high'} onChange={handleInputChange} />
          <label htmlFor="high" data-priority="high" className={styles.priorityLabel}>High</label>
        </div>

        <div className={styles.buttonsContainer}>
          {task && <button type="button" className={styles.delete} onClick={handleDelete}>Usuń</button>}
          <button type="submit" className={styles.submit}>{task ? "Edytuj" : "Dodaj"}</button>
        </div>
      </form>
    </div>
  );
}
