import './App.css'

function ToDoList(props: any) {

    // const handleClick = ():void => {
    //     if (props.deleteButton0) props.deleteButton0();
    //     // if (props.deleteButton1) props.deleteButton1();
    //     // if (props.deleteButton2) props.deleteButton2();
    // }

    return (
        <div className="app">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {
                        props.allTasks.length > 0 ?
                            props.allTasks.map((element: any) => {
                                return (
                                    <li key={element.id}>
                                        <input type="checkbox" checked={element.isDone}/> <span>{element.name}</span>
                                        <button onClick={()=>{props.deletedTasksFilter(element.id)}}>x</button>

                                    </li>
                                )
                            })
                            : <li>"There are no tasks"</li>
                    }

                    <button onClick={() => {props.selectedButtonFilter("All")}}>All</button>
                    <button onClick={() => {props.selectedButtonFilter("Active")}}>Active</button>
                    <button onClick={() => {props.selectedButtonFilter("Completed")}}>Completed</button>

                </ul>
                <div>

                </div>
            </div>
        </div>

    )
}

export default ToDoList