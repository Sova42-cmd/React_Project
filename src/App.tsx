import './App.css'
import ToDoList from "./ToDoList.tsx";


const tasks = [
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
    }
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

            <ToDoList title={"What to Learn 2"} tasks={tasks} buttons={buttons}/>
            <ToDoList title={"What to learn 3"} tasks={tasks} buttons={buttons}/>
            <ToDoList title={"What to learn 4"} tasks={tasks} buttons={buttons}/>

        </>
    )
}

export default App
