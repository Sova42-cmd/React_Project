import {useState} from "react";

function ToDoList(props:any) {

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
         <div>
            <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event)=>{if (event.key === 'Enter'){
                props.addTaskFilter(inputValue);
            }}}
            />
            <button onClick={()=>{props.addTaskFilter(inputValue)}}>+</button>

             <ul></ul>

            {props.tasksToShow.map((element:any)=>{
                return (

                        <li>
                            <input
                                checked={element.isDone}
                            type="checkbox"/>
                            {element.name}

                            <button onClick={()=>{props.deleteTaskFilter(element.id)}}>X</button>
                        </li>
                )
            })}


            <button onClick={()=>{props.handleBottomButtons("All")}}>All</button>
            <button onClick={()=>{props.handleBottomButtons("Active")}}>Active</button>
            <button onClick={()=>{props.handleBottomButtons("Completed")}}>Completed</button>
        </div>
        <div></div>
    </div>
    )
}
export default ToDoList