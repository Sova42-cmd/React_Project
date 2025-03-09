import ToDoList from "./ToDoList.tsx";
import {v1} from "uuid";
import {useState} from "react";

let initialTasks = [
    {id: v1(), name: "Subject 1", isDone: false},
    {id: v1(), name: "Subject 2", isDone: true},
    {id: v1(), name: "Subject 3", isDone: true},
    {id: v1(), name: "Subject 4", isDone: false},
    {id: v1(), name: "Subject 5", isDone: false},
    {id: v1(), name: "Subject 6", isDone: true},
]

// console.log(initialTasks)

function App() {

    let tasksToChild = initialTasks

    const [buttonPick, setButtonPick] = useState<"All" | "Active" | "Completed">("All")

    const [initialWithoutDelete, setInitialWithoutDelete] = useState(initialTasks)

    function addTask(taskName:string) {
        setInitialWithoutDelete(
            [
                {id: v1(), name: taskName, isDone: false}, ...initialWithoutDelete
            ]
        )
    }

    function deleteTask(taskID:any) {
        setInitialWithoutDelete(initialWithoutDelete.filter((element) => {
            return element.id !== taskID
        }))
    }

    function handleBottomButtons(message: "All"|"Active"|"Completed") {
        setButtonPick(message)
    }

    if (buttonPick === "All") {
        tasksToChild = initialWithoutDelete;
    } else if (buttonPick === "Active") {
        tasksToChild = initialWithoutDelete.filter((element) => {
            return !element.isDone
        })
    } else if (buttonPick === "Completed") {
        tasksToChild = initialWithoutDelete.filter((element) => {
            return element.isDone
        })
    }

    return (<>

            <ToDoList addTaskFilter={addTask} deleteTaskFilter={deleteTask} handleBottomButtons={handleBottomButtons} tasksToShow={tasksToChild}/>
        </>
    )
}


export default App

