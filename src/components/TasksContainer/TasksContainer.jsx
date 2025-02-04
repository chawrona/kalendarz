import { useRef, useState } from 'react';
import TasksList from '../Tasks/TasksList';
import TasksNavbar from '../Tasks/TasksNavbar';
import styles from './TasksContainer.module.scss';
import TaskDialog from '../TaskDialog/TaskDialog';
import toggleDialog from '../../utils/toggleDialog';
import TaskDialogContent from '../TaskDialog/TaskDialogContent';
import generateUUID from '../../utils/uuid';

export default function TasksContainer() {


    const [dialogContent, setDialogContent] = useState(<h1>Test</h1>);
    const dialogRef = useRef(null);


    return <div className={styles.container}>
        <TaskDialog toggleDialog={() => toggleDialog(dialogRef)} ref={dialogRef}> { dialogContent } </TaskDialog>


        <TasksNavbar 
            addTask={() => {
                setDialogContent(<TaskDialogContent toggleDialog={() => toggleDialog(dialogRef)} key={generateUUID()} />); 
                toggleDialog(dialogRef);
            }} 
            dialogRef={dialogRef}/>

        <TasksList setDialogContent={setDialogContent} dialogRef={dialogRef}  toggleDialog={() => toggleDialog(dialogRef)}></TasksList>
    </div>
}
