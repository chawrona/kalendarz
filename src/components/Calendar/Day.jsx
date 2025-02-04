import { useContext } from 'react';
import getPriorityNumber from '../../utils/getPriorityNumber';
import styles from './Day.module.scss';
import { DateContext } from '../../contexts/dateContext';
import TaskDialogContent from '../TaskDialog/TaskDialogContent';
import generateUUID from '../../utils/uuid';

export default function Day({ day, tasks, onClick, toggleDialog}) {

    const {calendarDate} = useContext(DateContext);

    

    const isDisabled = day === 0 ? styles.disabled : ""
    const isPast = calendarDate.getDate() - day > 0 && !isDisabled ? styles.isPast : "";

    return <div className={`${styles.container} ${isDisabled} ${isPast}`} onClick={e => !e.target.dataset.task && onClick(<TaskDialogContent toggleDialog={toggleDialog} key={generateUUID()}/>) }>
        <div className={styles.day}>{day}</div>
        <div className={styles.tasks}>
            {
                tasks
                .sort((a, b) => {
                    if (a.priority === b.priority) return 0;
                    return getPriorityNumber(b.priority) - getPriorityNumber(a.priority)
                })
                .map((task, index) => (

                    <div 
                        data-task={true}
                        className={`${styles.task} ${styles[task.priority]}`}
                        key={index}
                        onClick={() => onClick(<TaskDialogContent task={task} key={task.id} toggleDialog={toggleDialog}/>)}
                        >
                        {task.title}
                    </div>
                ))
            }
        </div>
    </div>
}
