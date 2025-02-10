import './App.css'
import ToDoList from "./ToDoList.tsx";


const tasks=[
    {
        id:1,
        name: "Science",
        isDone: true,
    },
    {
        id:2,
        name: "History",
        isDone: false,
    },
    {
        id:3,
        name: "Art",
        isDone: true,
    }
]



function App() {

    return (<>

    <ToDoList title={"What to Learn 2"} tasks={tasks}/>
    <ToDoList title={"What to learn 3"} tasks={tasks}/>
    <ToDoList title={"What to learn 4"} tasks={tasks}/>


</>
)
}

export default App
