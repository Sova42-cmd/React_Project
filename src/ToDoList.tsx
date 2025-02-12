import './App.css'

function Button(props: any) {
    return (
        <button>{props.name}</button>
    )
}

function ToDoList(props: any) {

    console.log(3 > 2 ? "yes" : "no")

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
                                    </li>
                                )
                            })
                            : <li>"There are no tasks"</li>
                    }

                    {
                        props.allTasks.length > 0 ?
                            props.buttons.map((element: any) => {
                                return (<>
                                    {/*<button key={element.id}>{element.name}</button>*/}
                                    <Button name={element.name} key={element.id}/>
                                </>)
                            })
                            : <button>Test Button</button>
                    }
                    {

                    }

                </ul>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ToDoList
// export default UserList;