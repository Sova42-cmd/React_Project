import './App.css'
import {useState} from "react";

function ToDoList(props: any) {

    const [inputValue, setInputValue] = useState('')


    return (
        <div className="app">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={inputValue}
                           onChange={(event) => {
                               setInputValue(event.currentTarget.value)
                           }}
                           onKeyPress={(event) => {
                               if (event.key === "Enter") {
                                   props.addButtonClickFilter(inputValue)
                               }
                           }}
                    />
                    <button onClick={() => {
                        props.addButtonClickFilter(inputValue)
                    }}>+
                    </button>
                </div>
                <ul>
                    {
                        props.allTasks.length > 0 ?
                            props.allTasks.map((element: any) => {
                                return (
                                    <li key={element.id}>
                                        <input type="checkbox" checked={element.isDone}/> <span>{element.name}</span>
                                        <button>x</button>

                                    </li>
                                )
                            })
                            : <li>"There are no tasks"</li>
                    }

                    <button onClick={() => {
                        props.chooseButtonFilter("All")
                    }}>All
                    </button>
                    <button onClick={() => {
                        props.chooseButtonFilter("Active")
                    }}>Active
                    </button>
                    <button onClick={() => {
                        props.chooseButtonFilter("Completed")
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