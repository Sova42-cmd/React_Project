import "./ToDoList.css";
import {useState} from "react";
function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <div className="to-do-list">
                <input
                value={inputValue}
                onChange={(event) => {setInputValue(event.target.value)}}
                // onKeyDown={(event)=> {
                //     if (event.key === 'Enter') {
                //         props.addTaskChild(inputValue);
                //     }
                // }}
                />

                {/*<button onClick={props.addTaskChild(inputValue)}>+</button> // todo:Dav this was old version causing infinite loop*/}
                <button onClick={()=>props.addTaskChild(inputValue)}>+</button>

                {props.tasksToShow.map((element: any) => {

                    return (
                        <>
                            <li key={element.id}>
                                <input type='checkbox'
                                       checked={element.isDone}/>
                                <span>{element.name}</span>
                                <button onClick={()=>{props.deleteButtonChild(element.id)}}>X</button>
                            </li>
                        </>
                    )
                })}


                <button onClick={()=>{props.buttonFilterChild("All")}}>All</button>
                <button onClick={()=>{props.buttonFilterChild("Active")}}>Active</button>
                <button onClick={()=>{props.buttonFilterChild("Completed")}}>Completed</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ToDoList
