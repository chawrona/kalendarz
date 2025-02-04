import CalendarContainer from './components/CalendarContainer/CalendarContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksContainer from './components/TasksContainer/TasksContainer';
import { DateProvider } from './contexts/dateContext';
import { TasksProvider } from './contexts/TasksContext';

export default function App() {

    return (
      <TasksProvider>
        <DateProvider>
          <BrowserRouter>
            <Routes>
                <Route index element={ <CalendarContainer /> } />
                <Route path="/tasks" element={ <TasksContainer />} />
            </Routes>
          </BrowserRouter>
        </DateProvider>
      </TasksProvider>
    )
    
}


