import {useState} from "react";
import "./ToDoList.css";

function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <div className="to-do-list">
                <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        props.addNewTaskFilter(inputValue);
                    }
                }}
                />
                <button onClick={()=>{props.addNewTaskFilter(inputValue)}}>+</button>

                {props.initialTasksFilter.map((element: any) => {

                    return (
                        <>
                            <li key={element.id}>
                                <input type='checkbox' checked={element.isDone}

                                />
                                <span>{element.name}</span>
                                <button onClick={()=>{props.removeTaskFilter(element.id)}}>X</button>
                            </li>
                        </>
                    )
                })}


                <button onClick={()=>{props.handleLowerButtonClickFilter("All")}}>All</button>
                <button onClick={()=>{props.handleLowerButtonClickFilter("Active")}}>Active</button>
                <button onClick={()=>{props.handleLowerButtonClickFilter("Completed")}}>Completed</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ToDoList