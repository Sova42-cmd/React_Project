import {useState} from "react";

function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState('')

    return (<>
            <div>
                <input
                value={inputValue}
                onChange={(event)=>{setInputValue(event.target.value)}}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        props.addTask(inputValue)
                    }
                }}
                />
                <button onClick={()=>{props.addTask(inputValue)}}>+</button>
                <ul>

                    {props.allTasks.map((element:any)=>{
                        return<li>
                            <input type='checkbox' checked={element.isDone}  />
                            {element.name}
                            <button onClick={()=>{props.removeTask(element.id)}}>X</button>
                        </li>

                    })}

                </ul>
                <button onClick={()=>{props.handleSelected("All")}}>All</button>
                <button onClick={()=>{props.handleSelected("Active")}}>Active</button>
                <button onClick={()=>{props.handleSelected("Completed")}}>Completed</button>
            </div>
        </>
    )
}

export default ToDoList