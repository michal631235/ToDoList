import Task from './components/Task';

function App() {
  return (
    <div>
      <h1 className="header">ToDoList</h1>
      <div className="tasks">
        <Task title="zadanie1"/>
        <Task title="zadanie2"/>
        <Task title="zadanie3"/>
      </div>
    </div>
  );
}

export default App;
