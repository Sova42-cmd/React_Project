import {useState} from "react";

function ToDoList(props: any) {

    const [inputValue, setValue] = useState('');

    return (
        <div>
            <div>
                <input
                value={inputValue}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {if (event.key === 'Enter') {
                    props.addTaskFilter(inputValue);
                }}}
                />
                <button onClick={()=>{props.addTaskFilter(inputValue)}}>+</button>

                {props.initialTasksFilter.map((element: any) => {

                    return (
                        <>
                            <li key={element.id}>
                                <input type='checkbox' checked={element.isDone}/>
                                <span>{element.name}</span>
                                <button onClick={()=>{props.deleteTaskFilter(element.id)}}>X</button>
                            </li>
                        </>
                    )
                })}


                <button onClick={() => {
                    props.handleButtonsBelowFilter("All")
                }}>All
                </button>
                <button onClick={() => {
                    props.handleButtonsBelowFilter("Active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.handleButtonsBelowFilter("Completed")
                }}>Completed
                </button>
            </div>
            <div></div>
        </div>
    )
}

export default ToDoList