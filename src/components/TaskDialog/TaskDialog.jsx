/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styles from './TaskDialog.module.scss';


const TaskDialog = forwardRef(({children, toggleDialog}, ref) => {
    return <dialog 
        className={styles.container} 
        ref={ref}
        onClick={e => e.currentTarget === e.target && toggleDialog()}
    >
        { children }
    </dialog>
})


export default TaskDialog;