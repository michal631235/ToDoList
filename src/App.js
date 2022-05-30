import Task from './components/Task';
import { useState , useEffect } from "react";

function App() {

    const [ isLoading, setLoading] = useState(true)
    const [ loadedData, setData] = useState([])
    let title = null

    useEffect(() => {
      fetch('http://localhost:8080/toDo')
      .then(response => response.json())
      .then(data => {
          setData(data)
          setLoading(false)
      })
    }, [isLoading])

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }

    const getTitle = (event) => {
      title = event.target.value;
      console.log(title)
    }

    const sendTitle = () => {
      fetch("http://localhost:8080/toDo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title: title}),
      })
        .then(() => {
          setLoading(true)
        })
    }
  return (
    <div className='main'>
      <h1 className="header"><div>ToDo List</div><div>☑</div></h1>
      <div className="tasks">
        <div className='createTask'>
          <input type="text" id="title" name="title" className='createTaskTitle' onChange={getTitle}></input>
          <button className='btnAdd' type='submit' onClick={sendTitle}>Dodaj Zadanie</button>
        </div>
      {loadedData.map(({title, completed, id}) => (
        <Task id={id} key={id} title={title} completed={completed} setLoading={setLoading}/>
      ))}
      </div>
      {loadedData.length <= 0 ? <div className='noTasks'>"Nie masz żadnych zadań"</div> : null}
    </div>
  );
}

export default App;
