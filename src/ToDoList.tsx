import './App.css'


function ToDoList(props: any) {


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
                                        <button onClick={() => {}}>x</button>
                                    </li>
                                )
                            })
                            : <li>"There are no tasks"</li>
                    }

                    <button onClick={() => {props.phone0("I'm button ALL")}}>All</button>
                    <button onClick={() => {props.phone1("I'm button ACTIVE")}}>Active</button>
                    <button onClick={() => {props.phone2("I'm button COMPLETED")}}>Completed</button>

                </ul>
                <div>

                </div>
            </div>
        </div>

    )
}

export default ToDoList;
// export default UserList;