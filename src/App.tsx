import './App.css'
import {v1} from "uuid";
import ToDoList from "./ToDoList.tsx";
import {useState} from "react";

let firstTasks = [
    {id: v1(), name: "Science", isDone: true},
    {id: v1(), name: "History", isDone: false},
    {id: v1(), name: "Mathematics", isDone: false},
    {id: v1(), name: "Physical Education", isDone: true},
    {id: v1(), name: "Subject", isDone: true},
    {id: v1(), name: "Subject bul", isDone: false},

]

function App() {

    let tasksToShow: any = firstTasks;

    const [selectedButton, setSelectedButton] = useState<"All" | "Active" | "Completed">("All")

    const [tasksWithoutRemove, setTasksWithoutRemove] = useState(firstTasks)

    function removeTask(messageID: any) {
        setTasksWithoutRemove(tasksWithoutRemove.filter((element: any) => {
            return element.id !== messageID
        }))
    }

    function handleSelected(message: "All" | "Active" | "Completed") {
        setSelectedButton(message)
    }

    function addTask(message: string) {
        setTasksWithoutRemove(
            [
                {id: v1(), name: message, isDone: false}, ...tasksWithoutRemove
            ]
        )
    }

    if (selectedButton === "All") {
        tasksToShow = tasksWithoutRemove
    } else if (selectedButton === "Active") {
        tasksToShow = tasksWithoutRemove.filter((element) => {
            return !element.isDone
        })
    } else if (selectedButton === "Completed") {
        tasksToShow = tasksWithoutRemove.filter((element) => {
            return element.isDone
        })
    }


    return (<>

            <ToDoList addTask={addTask} removeTask={removeTask} handleSelected={handleSelected}
                      allTasks={tasksToShow}></ToDoList>

        </>
    )
}


export default App

