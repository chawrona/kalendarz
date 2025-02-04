import styles from './CalendarContainer.module.scss';
import ControlPanel from '../ControlPanel/ControlPanel';
import Calendar from '../Calendar/Calendar';

export default function CalendarContainer() {

    return <div className={styles.container}>
        <ControlPanel />
        <Calendar />
    </div>
}
