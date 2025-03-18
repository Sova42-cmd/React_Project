import "./ToDoList.css";
import {useState} from "react";

function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <div className="to-do-list">
                <input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            props.addTaskButtonChild(inputValue);
                        }
                    }}
                />
                <button onClick={() => {
                    props.addTaskButtonChild(inputValue)
                }}>+
                </button>

                {props.tasksToShow.map((element: any) => {

                    return (
                        <>
                            <li key={element.id}>
                                <input type='checkbox'
                                       checked={element.isDone}
                                       onChange={(event) => {
                                           props.handleChangeStatusChild(element.id, event.currentTarget.checked);
                                       }}
                                />
                                <span>{element.name}</span>
                                <button onClick={() => {
                                    props.handleButtonDeleteChild(element.id)
                                }}>X
                                </button>
                            </li>
                        </>
                    )
                })}


                <button onClick={() => {
                    props.handleButtonSelectChild("All")
                }}>All
                </button>
                <button onClick={() => {
                    props.handleButtonSelectChild("Active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.handleButtonSelectChild("Completed")
                }}>Completed
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ToDoList