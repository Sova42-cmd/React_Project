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

    function handleSelected(message: "All" | "Active" | "Completed") {
        setSelectedButton(message)
    }

    if (selectedButton === "All") {
        tasksToShow = firstTasks
    } else if (selectedButton === "Active") {
        tasksToShow = firstTasks.filter((element) => {
            return !element.isDone
        })
    } else if (selectedButton === "Completed") {
        tasksToShow = firstTasks.filter((element) => {
            return element.isDone
        })
    }



    return (<>

            <ToDoList handleSelected={handleSelected} allTasks={tasksToShow}></ToDoList>

        </>
    )
}


export default App

