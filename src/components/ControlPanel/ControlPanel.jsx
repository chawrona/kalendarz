import { useContext } from 'react';
import styles from './ControlPanel.module.scss';
import ControlPanelNavigation from './ControlPanelNavigation';
import MonthSwitch from './MonthSwitch';
import { DateContext } from '../../contexts/dateContext';

export default function ControlPanel() {

    const {calendarDate, changeMonth} = useContext(DateContext);

    const nextMonth = () => changeMonth("next");
    const previousMonth = () => changeMonth("prev");
    const resetMonth = () => changeMonth("reset");
    
    const monthName =  calendarDate.toLocaleString('default', { month: 'long' })
    const year =  calendarDate.getFullYear()

    return <div className={styles.container}>
          
        <MonthSwitch 
            nextMonth={nextMonth} 
            previousMonth={previousMonth}
            monthName={monthName}
            year={year}
        />

        <ControlPanelNavigation resetMonth={resetMonth}/>

    </div>
}
