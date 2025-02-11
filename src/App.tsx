import './App.css'
import ToDoList from "./ToDoList.tsx";


const languageTasks = [
    {
        id: 1,
        name: "Science",
        isDone: true,
    },
    {
        id: 2,
        name: "History",
        isDone: false,
    },
    {
        id: 3,
        name: "Art",
        isDone: true,
    },
]

const secondTask = [

    {id: 4, name: "Task1", isDone: true},
    {id: 5, name: "Task2", isDone: true},
    {id: 6, name: "Task3", isDone: false},

]


const thirdTask = [
    {id: 7, name: "Task4", isDone: false},
    {id: 8, name: "Task5", isDone: true},
    {id: 9, name: "Task6", isDone: true},
]

const buttons = [
    {
        id: 1,
        name: "Button1",
    },
    {
        id: 2,
        name: "Button2",
    },
    {
        id: 3,
        name: "Button3",
    }
]

function App() {

    return (<>

            <ToDoList title={"Necessarily Languages"} allTasks={languageTasks} buttons={buttons}/>
            <ToDoList title={"Preferred to Know"} allTasks={secondTask} buttons={buttons}/>
            <ToDoList title={"Optional"} allTasks={thirdTask} buttons={buttons}s/>

        </>
    )
}

export default App
