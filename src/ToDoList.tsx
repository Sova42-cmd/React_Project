import './App.css'

function ToDoList(props: any) {

    console.log(props.allTasks);
    console.log(props.buttons);
    console.log(props.secondTask);
    console.log(props.thirdTask);

    return (
        <div className="app">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>

                    {props.allTasks.map((element: any) => {
                        return (<>
                            <li>
                                <input type="checkbox" checked={element.isDone}/> <span>{element.name}</span>
                            </li>
                        </>)
                    })
                    }

                    {props.buttons.map((element: any) => {
                        return (<>
                            <button>{element.name}</button>
                        </>)
                    })
                    }

                </ul>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ToDoList