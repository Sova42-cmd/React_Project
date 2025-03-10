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


function App() {

    const [buttonsBelow, setButtonsBelow] = useState<"All" | "Active" | "Completed">("All")

    const [withoutDelete, setWithoutDelete] = useState(initialTasks)

    function handleButtonsBelow(message: "All" | "Active" | "Completed") {
        setButtonsBelow(message);
    }

    function deleteTask(taskID: any) {
        setWithoutDelete(withoutDelete.filter((element) => {
            return element.id !== taskID
        }))
    }

    function addTask(inputName: any) {
        setWithoutDelete(
            [
                {id: v1(), name: inputName, isDone: false}, ...withoutDelete
            ]
        )
    }

    if (buttonsBelow === "All") {
        initialTasks = withoutDelete;
    } else if (buttonsBelow === "Active") {
        initialTasks = withoutDelete.filter((element) => {
            return !element.isDone
        });
    } else if (buttonsBelow === "Completed") {
        initialTasks = withoutDelete.filter((element) => {
            return element.isDone
        });
    }


    return (<>

            <ToDoList  addTaskFilter={addTask} deleteTaskFilter={deleteTask} handleButtonsBelowFilter={handleButtonsBelow}
                      initialTasksFilter={initialTasks}/>

        </>
    )
}


export default App

