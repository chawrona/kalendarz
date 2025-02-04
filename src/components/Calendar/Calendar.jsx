import { useContext, useRef, useState } from 'react';
import getDaysOfMonth from '../../utils/getDaysOfMonth';
import styles from './Calendar.module.scss';
import Day from './Day';
import { DateContext } from '../../contexts/dateContext';
import TaskDialog from '../TaskDialog/TaskDialog';
import toggleDialog from '../../utils/toggleDialog';
import { TasksContext } from '../../contexts/TasksContext';

export default function Calendar() {
    const { tasks } = useContext(TasksContext);
    const { calendarDate } = useContext(DateContext);

    const [dialogContent, setDialogContent] = useState(<h1>Test</h1>);
    const dialogRef = useRef(null);


    const days = getDaysOfMonth(calendarDate);
    const tasksOfTheMonth = tasks.filter(task => calendarDate.getMonth() + 1 === Number(task.date.substring(5,7)))  

    
    return <div className={styles.container}>
        <TaskDialog toggleDialog={() => toggleDialog(dialogRef)} ref={dialogRef}> { dialogContent } </TaskDialog>
            
        <div className={styles.calendar}>
            {
                dialogRef && days.map((day, index) => (
                    <Day 
                        key={index} 
                        day={day} 
                        tasks={tasksOfTheMonth.filter(task => Number(task.date.substring(8, 10)) === day)}
                        onClick={content => {
                            setDialogContent(content);
                            toggleDialog(dialogRef);
                        }}
                        toggleDialog={() => toggleDialog(dialogRef)}
                    />
                ))
            }
        </div>
    </div>
}
