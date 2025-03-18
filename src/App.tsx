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

    let initialTasksAlternative: any = initialTasks

    const [buttonSelect, setButtonSelect] = useState<"All" | "Active" | "Completed">("All")

    const [initialTasksDeleteButton, setInitialTasksDeleteButton] = useState(initialTasks)

    function handleButtonSelect(message: "All" | "Active" | "Completed") {
        setButtonSelect(message)
    }

    function handleButtonDelete(taskID: any) {
        setInitialTasksDeleteButton(initialTasksDeleteButton.filter((element) => {
            return element.id !== taskID
        }))
    }
    function addTaskButton(sourceName:any) {
        setInitialTasksDeleteButton(
            [
                {id: v1(), name: sourceName, isDone: false},...initialTasksDeleteButton
            ]
        )
    }


    if (buttonSelect === "All") {
        initialTasksAlternative = initialTasksDeleteButton
    } else if (buttonSelect === "Active") {
        initialTasksAlternative = initialTasksDeleteButton.filter((element: any) => {
            return !element.isDone
        })
    } else if (buttonSelect === "Completed") {
        initialTasksAlternative = initialTasksDeleteButton.filter((element: any) => {
            return element.isDone
        })
    }


    return (<>

            <ToDoList tasksToShow={initialTasksAlternative}
                      handleButtonSelectChild={handleButtonSelect}
                      handleButtonDeleteChild={handleButtonDelete}
                      addTaskButtonChild={addTaskButton}
            />

        </>
    )
}


export default App

