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


    // const tasks =[
    //     {id: v1(), name: "Subject 1", isDone: false},
    //     {id: v1(), name: "Subject 2", isDone: true}, // index=1
    //     {id: v1(), name: "Subject 3", isDone: true},
    //     {id: v1(), name: "Subject 4", isDone: false},
    //     {id: v1(), name: "Subject 5", isDone: false},
    //     {id: v1(), name: "Subject 6", isDone: true},
    // ]


    // const person1 = {
    //     name: "Gago",
    //     age: 56,
    //     isMarried: true,
    //     children: ['Valod', 'Styop', 'Slavik']
    // }

    // // mutable
    // person1.children.push('Levonik');

    // // immutable adding property (key and value)
    // const updatedPerson1 = {...person1, parents: ['mama', 'papa']}

    // // immutable updating property value
    // const updatedPerson1 = {...person1, children:[...person1.children, 'Levonik']};


    let visibleTasks = initialTasks

    const [buttonsBelow, setButtonsBelow] = useState<"All" | "Active" | "Completed">("All");

    const [visibleTasksWithDelete, setVisibleTasksWithDelete] = useState(initialTasks)

    function buttonFilter(message: "All" | "Active" | "Completed") {
        setButtonsBelow(message)
    }

    function deleteButton(taskID: any) {
        setVisibleTasksWithDelete(visibleTasksWithDelete.filter((element) => {
            return element.id !== taskID
        }))
    }

    function addTask(sourceInput: string) {
        setVisibleTasksWithDelete(
            [
                {id: v1(), name: sourceInput, isDone: false}, ...visibleTasksWithDelete
            ]
        )
    }

    if (buttonsBelow === "All") {
        visibleTasks = visibleTasksWithDelete;
    } else if (buttonsBelow === "Active") {
        visibleTasks = visibleTasksWithDelete.filter((element: any) => {
            return !element.isDone
        })
    } else if (buttonsBelow === "Completed") {
        visibleTasks = visibleTasksWithDelete.filter((element: any) => {
            return element.isDone
        })
    }

    return (<>

            <ToDoList tasksToShow={visibleTasks}
                      buttonFilterChild={buttonFilter}
                      deleteButtonChild={deleteButton}
                      addTaskChild={addTask}
            />

        </>
    )
}


export default App

