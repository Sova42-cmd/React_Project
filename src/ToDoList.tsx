function ToDoList(props: any) {


    return (<>
            <div>
                <input/><button>+</button>
                <ul>

                    {props.allTasks.map((element:any)=>{
                        return<li>
                            <input type='checkbox' checked={element.isDone}  />
                            {element.name}
                            <button>X</button>
                        </li>

                    })}

                </ul>
                <button onClick={()=>{props.handleSelected("All")}}>All</button>
                <button onClick={()=>{props.handleSelected("Active")}}>Active</button>
                <button onClick={()=>{props.handleSelected("Completed")}}>Completed</button>
            </div>
        </>
    )
}

export default ToDoList