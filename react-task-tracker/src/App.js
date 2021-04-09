import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Dinner at parents house',
      day: 'Feb 7th at 5:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Meeting at school',
      day: 'Feb 4th at 11:15am',
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
