import "./ToDoList.css";

function ToDoList(props: any) {


    return (
        <div>
            <div className="to-do-list">
                <input/>
                <button>+</button>

                {props.tasksToShow.map((element: any) => {

                    return (
                        <>
                            <li key={element.id}>
                                <input type='checkbox' checked={element.isDone}

                                />
                                <span>{element.name}</span>
                                <button>X</button>
                            </li>
                        </>
                    )
                })}


                <button onClick={()=>{props.handleButtonSelectChild("All")}}>All</button>
                <button onClick={()=>{props.handleButtonSelectChild("Active")}}>Active</button>
                <button onClick={()=>{props.handleButtonSelectChild("Completed")}}>Completed</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ToDoList