import styles from './ControlPanel.module.scss';
import today from "../../assets/today.svg";
import list from "../../assets/list.svg";
import { Link } from 'react-router-dom';

export default function ControlPanelNavigation({ resetMonth }) {
    return  (
        <div className={styles.options}>
            <ul>
                <li onClick={resetMonth}>Aktualny miesiąc <img src={today} alt="Go back to current month" /></li>
                <li>
                    <Link to="/tasks" className={styles.link}>
                        Zadania <img src={list} alt="Show list of all tasks" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
