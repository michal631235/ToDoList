function Task({title}) {
    return(
        <div className="task">
            <div><h2>{title}</h2></div>
            <div>
                <p>treść zadania</p>
                <div className="bottomTask">
                    <div>data</div><div>stan</div>
                </div>
                <div>
                    <button className="btn">Edytuj</button><button className="btn">Wykonane</button>
                </div>
            </div>
        </div>
    );
}

export default Task;