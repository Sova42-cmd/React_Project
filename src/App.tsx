import './App.css'
import ToDoList from "./ToDoList.tsx";
import Counter from "./Counter.tsx";


let firstTasks = [
    {id: 1, name: "Science", isDone: true,},
    {id: 2, name: "History", isDone: false,},
    {id: 3, name: "Art", isDone: true,},
]

const secondTasks = [
    {id: 4, name: "Task1", isDone: true},
    {id: 5, name: "Task2", isDone: true},
    {id: 6, name: "Task3", isDone: false},
]

const thirdTasks = [
    {id: 7, name: "Task4", isDone: false},
    {id: 8, name: "Task5", isDone: true},
    {id: 9, name: "Task6", isDone: true},
]

const buttons = [
    {id: 1, name: "All"},
    {id: 2, name: "Active"},
    {id: 3, name: "Completed"}
]

const testButtons = [
    {id: 4, name: "Render New"},
]

const forthTasks = [
    {id: 10, name: "Task 7", isDone: true},
    {id: 11, name: "Task 8", isDone: true},
    {id: 12, name: "Task 9", isDone: true},
]

const fifthTasks = [
    {id: 13, name: "Task 10", isDone: false},
    {id: 14, name: "Task 11", isDone: true},
    {id: 15, name: "Task 12", isDone: false},
]

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let evenNums = numbers.filter(isEven)
// let oddNums = numbers.filter(isOdd)
//
// console.log(oddNums)
//
// function isEven(element:any){
//     return element % 2 === 0;
// }
//
// function isOdd(element:any){
//     return element % 2 !== 0;
// }

const ages = [12,14,15,17,18,20,24,29,49,65]
const adults = ages.filter(isAdult)
const children = ages.filter(isChildren)

function isAdult(element:any){
    return element >= 18;
}

function isChildren(element:any){
    return element < 18;
}

console.log(children)

function App() {

    // const allButton = (message:any) => {console.log(message)};

    // const [filteredTasks, setFilteredTasks] = useState(firstTasks)
    // //

    // function deleteTask (message: any) {console.log(message)}
    //
    // const firstTasksFiltered = firstTasks.filter((element:any)=>{
    //         return element.isDone?false:true
    //     })

    // const deleteTask = (taskId: number) => {
    //     setFilteredTasks(filteredTasks.filter((element: any) => {
    //         return element.id === taskId ? false : true
    //     })
    //     )
    // }


    return (<>

            {/*Search info about useState(Hook)*/}

            <ToDoList title={"Necessarily Languages"} allTasks={firstTasks} buttons={buttons}
                // deleteTask={deleteTask}
            />
            <ToDoList title={"Preferred to Know"} allTasks={secondTasks} buttons={buttons}/>
            <ToDoList title={"Optional"} allTasks={thirdTasks} buttons={buttons}/>
            <ToDoList title={"Without a Title 1"} allTasks={forthTasks} buttons={buttons}/>
            <ToDoList title={"Without a Title 2"} allTasks={fifthTasks} buttons={testButtons}/>
            <Counter></Counter>
        </>
    )
}


export default App
