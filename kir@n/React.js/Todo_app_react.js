import'./todo_app.css'
function App(){

    let[todoinput,updateinput] = useState("text")

let [todoList,updateTodos] = useState(
    [
        {
            id:1,
            task:'learn React'
        },

        {
            id:2,
            task:'learn React2'
        },

        {
            id:3,
            task:'learn React3'
        },
    ]
)

let nextId=3

function addNewTodo(){
     if (todoinput==""){
        alert("Add Some Task")
            else{

             let newtodos =[
                    ...todoList
                    {
                        id:nextId++,
                        task:'todoinput'
                    }
                ]
                updateTodos(newtodos);
                updateinput()

            }
     }
}

function deleteTodo(id){
    todoList.filter(
        (todo)=>{
            return todo.id!=id

        }
    )
    updateTodos(updateTodos)

}

return(
    <div className="container mt-5 w-50">
        <h2 className="text-center">Todo_App</h2>
        <div className="input-group">
            <input className="form-control" onChange={(e)=>{
                let task=e.target.value;
                updateinput(task)
            }} type="text" value={todoinput}/>
            <button onclick={()=>{addNewTodo()}} className="btn btn-primary">Add</button>
        </div>
    
    <ul className="list-group mt-2">
        {
            todoList.map(
                (todo)=>{
                    return(
                      <li className="list-group-item">
                       <p>{todo.task}</p>
                          <button className="btn">✔️</button>
                          <button onclick={()=>{
                            deleteTodo(todo.id)
                          }} className="btn">❌</button>
                     </li>

                    )
                }
            )
        }
        

    </ul>
</div>
)
}

export default App