function Task({title, completed}) {
    return(
        <div className="fullTask">
            {completed ? <div className="leftBar bar-c"/> : <div className="leftBar bar-n"/>}
            <div className="task">
                <div className="bar-g"/>
                <div className="taskTitle">{title}</div>
                <div>
                    {completed ? <button className="btn btn-n">Niewykonane</button> : <button className="btn btn-n-f">Niewykonane</button> }
                    <button className="btn btn-p">W trakcie</button>
                    {completed ? <button className="btn btn-c-f">Wykonane</button> : <button className="btn">Wykonane</button>}
                </div>
            </div>
            <div className="taskBar">
                <button>{completed ? "✎": "✘"}</button>
            </div>
        </div>
    );
}

export default Task;