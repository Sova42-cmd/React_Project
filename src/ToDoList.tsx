import {useState} from "react";

function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState('')

    return (<>
            <div>
                <input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                    props.addTaskFilter(inputValue)
                        }
                    }}
                />
                <button onClick={() => {
                    props.addTaskFilter(inputValue)
                }}>+
                </button>
                <ul>

                    {props.allTasks.map((element: any) => {
                        return <li>
                            <input type='checkbox' checked={element.isDone}/>
                            {element.name}
                            <button onClick={() => {
                                props.removeTaskFilter(element.id)
                            }}>X
                            </button>
                        </li>

                    })}

                </ul>
                <button onClick={() => {
                    props.tellingWhichButtonFilter("All")
                }}>All
                </button>
                <button onClick={() => {
                    props.tellingWhichButtonFilter("Active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.tellingWhichButtonFilter("Completed")
                }}>Completed
                </button>
            </div>
        </>
    )
}

export default ToDoList