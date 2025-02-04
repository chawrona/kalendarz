import { createContext, useState } from 'react';
import getNewMonth from '../utils/getNewMonth';

const DateContext = createContext();

function DateProvider({children}) {

    const [calendarDate, setCalendarDate] = useState(new Date())
    const changeMonth = (direction) => setCalendarDate(prevDate => getNewMonth(prevDate, direction))


    return (
        <DateContext.Provider value={{changeMonth, calendarDate}}>
            {children}
        </DateContext.Provider>
    )
     
}


export {DateContext, DateProvider}