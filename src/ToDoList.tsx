import './App.css'
import {useState} from "react";

function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="app">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input
                        // value={inputValue}
                        // onChange={(event) => {
                        //     setInputValue(event.currentTarget.value)
                        // }}
                        // onKeyDown={(event) => {
                        //     if(event.key==="Enter") {
                        //         props.addMe(inputValue)
                        //     } }}
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                props.addMe(inputValue)
                            }
                        }}

                            />
                            <button
                            onClick={() => {
                            props.addMe(inputValue)
                        }}>+
                    </button>
                </div>
                <ul>
                    {
                        props.allTasks.length > 0 ?
                            props.allTasks.map((element: any) => {
                                return (
                                    <li key={element.id}>
                                        <input type="checkbox" checked={element.isDone}/>
                                        <span>{element.name}</span>
                                        <button onClick={() => {
                                            props.deleteTask(element.id)
                                        }}>x
                                        </button>

                                    </li>
                                )
                            })
                            : <li>"There are no tasks"</li>
                    }

                    <button onClick={() => {
                        props.buttonSelect("All")
                    }}>All
                    </button>
                    <button onClick={() => {
                        props.buttonSelect("Active")
                    }}>Active
                    </button>
                    <button onClick={() => {
                        props.buttonSelect("Completed")
                    }}>Completed
                    </button>
                </ul>
                <div>

                </div>
            </div>
        </div>

    )
}

export default ToDoList