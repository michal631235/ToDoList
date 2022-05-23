import Task from './components/Task';
import { useState , useEffect } from "react";

function App() {

    const [ isLoading, setLoading] = useState(true)
    const [ loadedData, setData] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        let changedData = [];
        for(let i = 0; i<10; i++)
        {
          changedData.push(data[i]) 
        }
          setLoading(false)
          setData(changedData)
      })
    }, [isLoading])

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

  return (
    <div>
      <h1 className="header">ToDoList</h1>
      <div className="tasks">
      {loadedData.map(({title, completed}) => (
        <Task title={title} completed={completed}/>
      ))}
      </div>
    </div>
  );
}

export default App;
