import './App.css'
import ToDoList from "./ToDoList.tsx";
import Counter from "./Counter.tsx";
import {useState} from "react";

let firstTasks = [
    {id: 1, name: "Science", isDone: true,},
    {id: 2, name: "History", isDone: false,},
    {id: 3, name: "Art", isDone: true,},
    {id: 4, name: "Subject 4", isDone: true,},
    {id: 5, name: "Subject 5", isDone: false,},
    {id: 6, name: "Subject 6", isDone: false,},
    {id: 7, name: "Subject 7", isDone: true,},
    {id: 8, name: "Religion", isDone: true,},
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
const buttons = [
    {id: 1, name: "All"},
    {id: 2, name: "Active"},
    {id: 3, name: "Completed"}
]
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



let allTasks: any = firstTasks

let onlyActiveTasks: any = firstTasks.filter((element: any) => {
    return !element.isDone
})

let onlyCompletedTasks: any = firstTasks.filter((element: any) => {
    return element.isDone
})

function App() {

    const [display, setDisplay] = useState(0)

    function onShowAllTasks() {
        setDisplay(allTasks)
    }

    function onShowActiveTasks() {
        setDisplay(onlyActiveTasks)
    }

    function onShowCompletedTasks() {
        setDisplay(onlyCompletedTasks)
    }

    return (<>
            <ToDoList title={"Necessarily Languages"} allTasks={display} buttons={buttons}
                      showAllTasks={onShowAllTasks} showActiveTasks={onShowActiveTasks}
                      showCompletedTasks={onShowCompletedTasks}
            />
            {/*<ToDoList title={"Preferred to Know"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Optional"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Without a Title 1"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Without a Title 2"} allTasks={filteredTasks} buttons={testButtons}/>*/}
            <Counter></Counter>
        </>
    )
}

// Create 3 Callbacks, 3 lets(variable), with 2 filters, Create useState hook
// Also callback for delete(x) button (only with console.log)

export default App
