import './App.css'
import Button from './Button'

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
                                        <button onClick={() =>props.deleteTask("removed "+element.id)}>+</button>
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