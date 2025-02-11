import './App.css'

function ToDoList(props: any) {

    console.log(props.tasks);
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

                    {props.tasks.map((element: any) => {
                        return (<>
                            <li>
                                <input type="checkbox" checked={element.isDone}/> <span>{element.name}</span>
                            </li>
                        </>)
                    })
                    }
                    {/*{props.secondTask.map((element: any) => {*/}
                    {/*    return (<>*/}
                    {/*        <li>*/}
                    {/*            <input type="checkbox" checked={element.isDone}/> <span>{element.name}</span>*/}
                    {/*        </li>*/}
                    {/*    </>)*/}
                    {/*})*/}
                    {/*}*/}
                    {/*{props.thirdTask.map((element: any) => {*/}
                    {/*    return (<>*/}
                    {/*        <li>*/}
                    {/*            <input type="checkbox" checked={element.isDone}/> <span>{element.name}</span>*/}
                    {/*        </li>*/}
                    {/*    </>)*/}
                    {/*/!*})*!/*/}
                    {/*}*/}

                    {props.buttons.map((element: any) => {
                        return (<>
                            <button>{element.name}</button>
                        </>)
                    })
                    }

                    {/*<li>*/}
                    {/*  <input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].name}</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].name}</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].name}</span>*/}
                    {/*</li>*/}
                </ul>
                <div>
                    {/*<button>{props.buttons}</button>*/}
                    {/*<button>{props.buttons}</button>*/}
                    {/*<button>{props.buttons}</button>*/}
                </div>
            </div>
        </div>
    )
}

export default ToDoList