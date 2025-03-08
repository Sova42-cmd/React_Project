import './App.css'
import ToDoList from "./ToDoList.tsx";
import Counter from "./Counter.tsx";
import {v1} from "uuid";
import {useState} from "react";

// In JavaScript, especially in React, code is often split into multiple files (or "modules") to keep things organized.
// Instead of cramming all your components, functions, and logic into one giant file, you can:

// state, (set)functionChangingState(this function is newState as a parameter), parameter is new State. useState is Hook.
// <"All"|"Active"|"Completed"> <-These are possible values or types of state
// and () here's the initial state.
//
// Now let’s talk about the brackets ({}) in imports.
//
//     In React, there are two kinds of exports:
//
//     Default exports (like above) — you don’t need brackets.
//     Named exports — you do need brackets.
//
// React relies on modular JavaScript because:
//
//     Components are reusable — You build small, independent pieces (like buttons, forms, etc.) that you can combine.
//     Code splitting — Breaking files into smaller pieces helps React load parts of your app only when needed.
//     Readability — Each file has a clear purpose.

let firstTasks: any = [
    {id: v1(), name: "Science", isDone: true,},
    {id: v1(), name: "History", isDone: false,},
    {id: v1(), name: "Art", isDone: true,},
    {id: v1(), name: "Subject 4", isDone: true,},
    {id: v1(), name: "Subject 5", isDone: false,},
    {id: v1(), name: "Subject 6", isDone: false,},
    {id: v1(), name: "Subject 7", isDone: true,},
    {id: v1(), name: "Religion", isDone: true,},
]

const buttons: any = [
    {id: 1, name: "All"},
    {id: 2, name: "Active"},
    {id: 3, name: "Completed"}
]

// const secondTasks = [
//     {id: 4, name: "Task1", isDone: true},
//     {id: 5, name: "Task2", isDone: true},
//     {id: 6, name: "Task3", isDone: false},
// ]
//
// const thirdTasks = [
//     {id: 7, name: "Task4", isDone: false},
//     {id: 8, name: "Task5", isDone: true},
//     {id: 9, name: "Task6", isDone: true},
// ]
//
// const testButtons = [
//     {id: 4, name: "Render New"},
// ]
//
// const forthTasks = [
//     {id: 10, name: "Task 7", isDone: true},
//     {id: 11, name: "Task 8", isDone: true},
//     {id: 12, name: "Task 9", isDone: true},
// ]
//
// const fifthTasks = [
//     {id: 13, name: "Task 10", isDone: false},
//     {id: 14, name: "Task 11", isDone: true},
//     {id: 15, name: "Task 12", isDone: false},
// ]

function App() {

    let visual

    const [currentButton, setCurrentButton] = useState<"All"|"Active"|"Completed">("All")
    const [tasksWithoutDelete, setTasksWithoutDelete] = useState(firstTasks)

    function removeButton(messageID:any){
        setTasksWithoutDelete(tasksWithoutDelete.filter((element:any)=>{return element.id !==messageID}))
    }

    function handleButtonClick(message:any) {
        setCurrentButton(message)
    }

    function addTask(message:any) {
        setTasksWithoutDelete(
            [
                {id: v1(), name: message, isDone: false}, ...tasksWithoutDelete
            ]
        )
    }

    if (currentButton === "All") {
        visual=tasksWithoutDelete
    } else if (currentButton === "Active") {
        visual=tasksWithoutDelete.filter((element:any)=>{return !element.isDone})
    } else if (currentButton === "Completed") {
        visual=tasksWithoutDelete.filter((element:any)=>{return element.isDone})
    }

    console.log(visual)

    return (<>
            <ToDoList title={"Necessarily Languages"} allTasks={visual} buttons={buttons}
                      handleButtonClick={handleButtonClick}
                      removeButton={removeButton}
                      addTask={addTask}
            />
            {/*<ToDoList title={"Preferred to Know"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Optional"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Without a Title 1"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Without a Title 2"} allTasks={filteredTasks} buttons={testButtons}/>*/}
            <Counter></Counter>
        </>
    )
}


export default App

