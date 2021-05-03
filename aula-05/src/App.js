import "./App.css";
import Navbar from './components/Navbar/Navbar'
import TaskList from './components/TaskList/TaskList'

function App() {
    return <div className="App">

        <Navbar />

        <div className="body-container">

            <TaskList title="To-Do" />

            <TaskList title="Doing" />

            <TaskList title="Done" />
            
            <TaskList title="Canceled" />

        </div>

    </div>;
}

export default App;
