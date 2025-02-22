import './App.css'
import ToDoList from "./ToDoList.tsx";
import Counter from "./Counter.tsx";
import {useState} from "react";

let firstTasks:any = [
    {id: 1, name: "Science", isDone: true,},
    {id: 2, name: "History", isDone: false,},
    {id: 3, name: "Art", isDone: true,},
    {id: 4, name: "Subject 4", isDone: true,},
    {id: 5, name: "Subject 5", isDone: false,},
    {id: 6, name: "Subject 6", isDone: false,},
    {id: 7, name: "Subject 7", isDone: true,},
    {id: 8, name: "Religion", isDone: true,},
]

const buttons:any = [
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

    const[firstTasksWithoutDeleted, setFirstTasksWithoutDeleted] = useState(firstTasks)

    let onlyActiveTasks:any =firstTasksWithoutDeleted.filter((element:any)=>{return !element.isDone})
    let onlyCompletedTasks:any =firstTasksWithoutDeleted.filter((element:any)=>{return element.isDone})

    let visual:any=firstTasksWithoutDeleted

    const [chosenButton, setChosenButton] = useState<"All"|"Active"|"Completed">("All")

    if (chosenButton === "All") {
        visual=firstTasks
    } else if (chosenButton === "Active") {
        visual=onlyActiveTasks
    } else if (chosenButton === "Completed") {
        visual=onlyCompletedTasks
    }

    function changeSelectedButton(relevantText:any){
        setChosenButton(relevantText)
    }

    function deleteTask(taskId:any){

        const newFirstTasksWithoutDeleted=firstTasksWithoutDeleted.filter((element:any)=>{return element.id !== taskId})
        console.log(newFirstTasksWithoutDeleted)

        setFirstTasksWithoutDeleted(newFirstTasksWithoutDeleted)

        setChosenButton('All')
    }

    return (<>
            <ToDoList title={"Necessarily Languages"} allTasks={visual} buttons={buttons}
                      chooseSelecetedButton={changeSelectedButton}
                      deleteMe={deleteTask}
            />
            {/*<ToDoList title={"Preferred to Know"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Optional"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Without a Title 1"} allTasks={filteredTasks} buttons={buttons}/>*/}
            {/*<ToDoList title={"Without a Title 2"} allTasks={filteredTasks} buttons={testButtons}/>*/}
            <Counter></Counter>
        </>
    )
}

// Create 3 Callbacks, 3 lets(variable), with 2 filters, Create useState hook ✓
// Also callback for delete(x) button (only with console.log) ✓

export default App
