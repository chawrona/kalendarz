export default function getDaysOfMonth(date) {
    const year = date.getFullYear();
    const month  = date.getMonth();

    const firstDayOfTheMonthDate = new Date(year, month, 1)
    const numberOfDaysInTheMonth = new Date(year, month + 1, 0).getDate()
    const lastDayOfTheMonth = new Date(year, month, numberOfDaysInTheMonth)

    // Tablica dni przed miesiącem
    const dayBeforeFirstOne = firstDayOfTheMonthDate.getDay() === 0 ? 6 : firstDayOfTheMonthDate.getDay() - 1;

    // tablica dni miesiąca
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    // tablica dni po miesiącu
    const daysAfterLastOne = lastDayOfTheMonth == 0 ? 0 : 7 - lastDayOfTheMonth.getDay();
    console.log("DATA: ", date);
    return [
        ...new Array(dayBeforeFirstOne).fill(0),
        ...Array.from({ length: numberOfDays }, (_, i) => i + 1),
        ...new Array(daysAfterLastOne).fill(0)
    ]
}