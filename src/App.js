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
    <div className='main'>
      <h1 className="header">ToDoList</h1>
      <div className="tasks">
        <form className='createTask'>
          <input type="text" className='createTaskTitle'></input>
          <button className='btnAdd'>Dodaj Zadanie</button>
        </form>
      {loadedData.map(({title, completed, id}) => (
        <Task key={id} title={title} completed={completed}/>
      ))}
      </div>
    </div>
  );
}

export default App;
