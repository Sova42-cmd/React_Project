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

    let tasksToShow = firstTasks;

    const [bottomButtons, setBottomButtons] = useState<"All" | "Active" | "Completed">("All")

    const [tasksToShowWithoutDelete, setTasksToShowWithoutDelete] = useState(firstTasks);

    function removeTask(taskID: any) {
        setTasksToShowWithoutDelete(tasksToShowWithoutDelete.filter((element) => {
            return element.id !== taskID
        }))
    }

    function tellingWhichButton(buttons: "All" | "Active" | "Completed") {
        setBottomButtons(buttons)
    }

    function addTask(taskID: any) {
        setTasksToShowWithoutDelete(
            [
                {id: v1(), name: taskID, isDone: false}, ...tasksToShowWithoutDelete
            ]
        )
    }

    if (bottomButtons === "All") {
        tasksToShow = tasksToShowWithoutDelete;
    } else if (bottomButtons === "Active") {
        tasksToShow = tasksToShowWithoutDelete.filter((element) => {
            return !element.isDone
        })
    } else if (bottomButtons === "Completed") {
        tasksToShow = tasksToShowWithoutDelete.filter((element) => {
            return element.isDone
        })
    }

    return (<>

            <ToDoList addTaskFilter={addTask} removeTaskFilter={removeTask} tellingWhichButtonFilter={tellingWhichButton}
                      allTasks={tasksToShow}></ToDoList>

        </>
    )
}


export default App

