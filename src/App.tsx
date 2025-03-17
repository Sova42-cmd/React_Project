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

    const [initialTasksDeleted, setInitialTasksDeleted] = useState(initialTasks)

    function handleButtonSelect(message: "All" | "Active" | "Completed") {
        setButtonSelect(message)
    }

    function deleteTask(id: number) {
        setInitialTasksDeleted(initialTasksDeleted.filter(element)=>{return element !== id;})
    }

    if (buttonSelect === "All") {
        console.log("Im all button")
        initialTasks = initialTasksAlternative
    } else if (buttonSelect === "Active") {
        console.log("Im active")
        initialTasks = initialTasksAlternative.filter((element:any) => {
            return !element.isDone
        })
    } else if (buttonSelect === "Completed") {
        console.log("Im completed")
        initialTasks = initialTasksAlternative.filter((element:any) => {
            return element.isDone
        })
    }


    return (<>

            <ToDoList tasksToShow={initialTasksAlternative}
                      handleButtonSelectChild={handleButtonSelect}
            />

        </>
    )
}


export default App

