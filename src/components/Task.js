import { useState } from "react";

function Task({id, title, completed, setLoading}) {

    const [isEditable, setEditable] = useState(false);

    const markAs = (data) => {
        fetch("http://localhost:8080/toDo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: id, title: title, completed: data}),
      })
        .then(() => {
            setLoading(true)
        })
    }

    const deleteTask = () => {
        fetch("http://localhost:8080/toDo/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(() => {
            setLoading(true)
        })
    }

    const changeTask = () => {
        fetch("http://localhost:8080/toDo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id, title: title, completed: completed}),
          })
            .then(() => {
                setLoading(true)
            })
    }

    const changeEditable = () => {
        if(isEditable)
        {
            console.log(title)
            changeTask()
        }
        else
        {
            setEditable(true)
        }
    }

    const getTitle = (event) => {
        title = event.target.value;
    }

    return(
        <div className="fullTask">
            {completed === "COMPLETED" ? <div className="leftBar bar-c"/> : completed === "INPROGRESS" ? <div className="leftBar bar-p"/> : <div className="leftBar bar-n"/>}
            <div className="task">
                <div className="bar-g"/>
                {isEditable ? <input type="text" className="taskTitle" defaultValue={title} onChange={getTitle}></input> : <div className="taskTitle">{title}</div>}
                <div>
                    {completed !== "TODO" ? <button className="btn btn-n" onClick={() => markAs("TODO")}>Niewykonane</button> : <button className="btn btn-n-f">Niewykonane</button> }
                    {completed !== "INPROGRESS" ? <button className="btn btn-p" onClick={() => markAs("INPROGRESS")}>W trakcie</button> : <button className="btn btn-p-f">W trakcie</button>}
                    {completed === "COMPLETED" ? <button className="btn btn-c-f">Wykonane</button> : <button className="btn" onClick={() => markAs("COMPLETED")} >Wykonane</button>}
                </div>
            </div>
            <div className="taskBar">
                {completed === "COMPLETED" ? <button onClick={deleteTask}>✘</button>: <button onClick={changeEditable}>✎</button>}
            </div>
        </div>
    );
}

export default Task;