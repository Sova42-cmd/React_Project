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

    const [lowerButtons, setLowerButtons] = useState<"All" | "Active" | "Completed">("All")

    const [initialTasksDelete, setInitialTasksDelete] = useState(initialTasksAlternative)

    function addNewTask(sourceName: any) {
        setInitialTasksDelete(
            [
                {id: v1(), name: sourceName, isDone: false}, ...initialTasksDelete
            ]
        )
    }

    function removeTask(taskID: any) {
        setInitialTasksDelete(initialTasksDelete.filter((element: any) => {
            return element.id !== taskID;
        }))
    }

    function handleLowerButtonClick(message: any) {
        setLowerButtons(message)
    }


    if (lowerButtons === "All") {
        initialTasksAlternative = initialTasksDelete
    } else if (lowerButtons === "Active") {
        initialTasksAlternative = initialTasksDelete.filter((element:any) => {
            return !element.isDone
        })
    } else if (lowerButtons === "Completed") {
        initialTasksAlternative = initialTasksDelete.filter((element:any) => {
            return element.isDone
        })
    }

    return (<>

            <ToDoList handleLowerButtonClickFilter={handleLowerButtonClick}
                      initialTasksFilter={initialTasksAlternative}
                      removeTaskFilter={removeTask}
                      addNewTaskFilter={addNewTask}
            />

        </>
    )
}


export default App

