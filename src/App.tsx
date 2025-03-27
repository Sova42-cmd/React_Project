import ToDoList from "./ToDoList.tsx";
import {v1} from "uuid";
import {useState} from "react";
import {initialTasks} from "./store/state.ts";

function App() {


    // const person1 = {
    //     name: "Gago",
    //     age: 56,
    //     isMarried: true,
    //     children: {
    //         boys: ["Seroj", "Valod"],
    //         girls: ["Lala", "Bella"],
    //     }
    // }
    //
    // const updatedPerson = {         ...person1,   children: {...person1.children, boys:[...person1.children.boys,'gago j']}           }
    //
    // console.log(`updatedPerson`, updatedPerson)


    // const tasks = [
    //     {id: v1(), name: "Subject 1", isDone: false},
    //     {id: v1(), name: "Subject 2", isDone: true},
    //     {id: v1(), name: "Subject 3", isDone: true},
    //     {id: v1(), name: "Subject 4", isDone: false},
    //     {id: v1(), name: "Subject 5", isDone: false},
    //     {id: v1(), name: "Subject 6", isDone: true},
    // ]
    //
    //
    // // const updateTask = tasks.map((element) => {
    // //     return {...element, createdAt: "2025"}
    // // })
    //
    // const updateTask = tasks.map((element) => {
    //     return element.name === "Subject 3" ? {...element, createdAt: "2025"} : {...element, name:"Gago"}
    // })
    //
    //
    // console.log(updateTask)


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


    // function statusChange(taskId: string, newStatus: boolean) {
    //
    //     const taskToBeChanged = visibleTasks.find((task) => {
    //         return task.id === taskId
    //     })
    //
    //     if(taskToBeChanged){
    //         taskToBeChanged.isDone = newStatus
    //     }
    //
    //     setVisibleTasksWithDelete([...visibleTasksWithDelete])
    //
    // }


    function statusChange(taskId: string, newStatus: boolean) {

        const updatedVisibleTasksWithDelete = visibleTasksWithDelete.map((element) => {
            return element.id === taskId ? {...element, isDone: newStatus} : element
        })

        setVisibleTasksWithDelete(updatedVisibleTasksWithDelete)

    }


    return (<>

            <ToDoList tasksToShow={visibleTasks}
                      buttonFilterChild={buttonFilter}
                      deleteButtonChild={deleteButton}
                      addTaskChild={addTask}
                      pleaseChangeMyStatus={statusChange}
            />

        </>
    )
}


export default App

