import { Link } from 'react-router-dom';
import styles from './TasksNavbar.module.scss';
import today from "../../assets/today.svg";
import add from "../../assets/add.svg";

export default function TasksNavbar({addTask}) {
    return <div className={styles.container}>


         <h1 className={styles.title}>Zadania</h1>

        <div className={styles.nav}>
            <p className={styles.link} onClick={addTask}>
                Dodaj Zadanie
                <img src={add} alt="Kalendarz" />
            </p>
            <Link to="/" className={styles.link}>
                Kalendarz 
                <img src={today} alt="Kalendarz" />
            </Link>
         </div>
    </div>
}
