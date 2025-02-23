import './App.css'
import ToDoList from "./ToDoList.tsx";
import Counter from "./Counter.tsx";
import {useState} from "react";
import {v1} from "uuid";

// state, (set)functionChangingState(this function is newState as a parameter), parameter is new State. useState is Hook.
// <"All"|"Active"|"Completed"> <-These are possible values or types of state
// and () here's the initial state.

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

    let visual: any

    const [firstTasksWithoutDeletedTasks, setFirstTasksWithoutDeletedTasks] = useState(firstTasks)

    function deletedTasks(messageID: string) {
        setFirstTasksWithoutDeletedTasks(firstTasksWithoutDeletedTasks.filter((element: any) => {
            return element.id !== messageID
        }))
    }

    function addButtonClick(message: string) {
        setFirstTasksWithoutDeletedTasks(
            [
                {id: v1(), name: message, isDone: false,}, ...firstTasksWithoutDeletedTasks
            ]
        )
    }

    const [selected, setSelected] = useState<"All" | "Active" | "Completed">("All")

    function selectedButton(message: "All" | "Active" | "Completed") {
        setSelected(message)
    }

    if (selected === "All") {
        visual = firstTasksWithoutDeletedTasks
    } else if (selected === "Active") {
        visual = firstTasksWithoutDeletedTasks.filter((element: any) => {
            return !element.isDone
        })
    } else if (selected === "Completed") {
        visual = firstTasksWithoutDeletedTasks.filter((element: any) => {
            return element.isDone
        })
    }


    // const [buttonChoose, setButtonChoose] = useState<"All"|"Active"|"Completed">("All")
    //
    // const [currentState, setCurrentState] = useState(firstTasks)
    //
    // if(buttonChoose==="All") {
    //     visual=currentState
    // } else if(buttonChoose==="Active") {
    //     visual=currentState.filter((element:any)=>{return !element.isDone})
    // } else if(buttonChoose==="Completed") {
    //     visual=currentState.filter((element:any)=>{return element.isDone})
    // }
    // function changeSelectedButton(newButton:any){
    //     setButtonChoose(newButton)
    // }
    // function deleteTask(taskId:any){
    //     setCurrentState(currentState.filter((element:any)=>{return element.id !== taskId}))
    //     }
    // test

    // const[firstTasksWithoutDeleted, setFirstTasksWithoutDeleted] = useState(firstTasks)
    //
    // const [chosenButton, setChosenButton] = useState<"All"|"Active"|"Completed">("All")
    //
    // let visual:any
    //
    // if (chosenButton === "All") {
    //     visual=firstTasksWithoutDeleted
    // } else if (chosenButton === "Active") {
    //     visual=firstTasksWithoutDeleted.filter((element:any):any=>{return !element.isDone})
    // } else if (chosenButton === "Completed") {
    //     visual=firstTasksWithoutDeleted.filter((element:any):any=>{return element.isDone})
    // }
    //
    // function changeSelectedButton(relevantText:any){
    //     setChosenButton(relevantText)
    // }
    //
    // function deleteTask(taskId:any){
    //     setFirstTasksWithoutDeleted(firstTasksWithoutDeleted.filter((element:any)=>{return element.id !== taskId}))
    // }

    return (<>
            <ToDoList title={"Necessarily Languages"} allTasks={visual} buttons={buttons}
                // chooseSelectedButton={changeSelectedButton}
                // deleteMe={deleteTask}
                      selectedButtonFilter={selectedButton}
                      deletedTasksFilter={deletedTasks}
                      addButtonClickFilter={addButtonClick}
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
