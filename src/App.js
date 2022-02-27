import './App.css';
import ToDo from './components/ToDo';
import { ToDoProvider } from './context/ToDoContext';

function App() {
  return (
    <ToDoProvider>
      <div className='container is-fluid'>
        <ToDo />
      </div>
    </ToDoProvider>
  );
}

export default App;
