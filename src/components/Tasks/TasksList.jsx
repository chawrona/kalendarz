
import getPriorityNumber from '../../utils/getPriorityNumber';
import parseCustomDate from '../../utils/parseCustomDate';
import toggleDialog from '../../utils/toggleDialog';
import Task from './Task';
import styles from './TasksList.module.scss';
import TaskDialogContent from '../TaskDialog/TaskDialogContent';
import { TasksContext } from '../../contexts/TasksContext';
import { useContext } from 'react';

export default function TasksList({setDialogContent, dialogRef}) {

    const { tasks } = useContext(TasksContext);

    return <div className={styles.container}>

        {
            tasks
            .sort((a, b) => {
                const dateDifference = parseCustomDate(a.date) - parseCustomDate(b.date)
                if (dateDifference !== 0 || a.priority === b.priority) return dateDifference;
                return getPriorityNumber(b.priority) - getPriorityNumber(a.priority)
            })
            .map(task => <Task task={task} key={task.id} onClick={() => {
                    setDialogContent(<TaskDialogContent task={task} key={task.id} toggleDialog={() => toggleDialog(dialogRef)}/>);
                    toggleDialog(dialogRef);
                }
            }/>) 
        }
    </div>
}
