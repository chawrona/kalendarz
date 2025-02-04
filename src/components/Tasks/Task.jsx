import styles from './Task.module.scss';
import today from "../../assets/today.svg"


export default function Task({task, onClick}) {

    return (
        <div 
            className={`${styles.container}`}
            onClick={onClick}
        >
            <div className={`${styles.priority} ${styles[task.priority]}`}>{task.priority}</div>

            <p className={styles.title}>{task.title}</p>

            <div className={styles.date}>
                <img src={today} alt="Data" />
                {task.date}
            </div>
        </div>
    )
}
