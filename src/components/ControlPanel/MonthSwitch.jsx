import styles from './ControlPanel.module.scss';
import leftArrow from "../../assets/chevron-left.svg";
import rightArrow from "../../assets/chevron-right.svg";

export default function MonthSwitch({previousMonth, monthName, year, nextMonth}) {
    return (
        <div className={styles.monthSwitch}>

            <button className={`bg-dark ${styles.leftButton}`} onClick={previousMonth}>
                <img src={leftArrow} alt="previous month" />
            </button>

            <h1 className={styles.month}> {monthName} {year} </h1>

            <button className={`bg-dark ${styles.rightButton}`} onClick={nextMonth}>
                <img src={rightArrow} alt="next month" />
            </button>
        </div>
    )
}
