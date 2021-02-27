import { ProxyState } from "../AppState.js"
import { toDoService } from "../Services/ToDoService.js"

  function _draw(){
    let todos = ProxyState.todos
    let template = ""
    
    document.getElementById('numtodos').innerText = `${ProxyState.numToDos}`
    todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
    
  }

export default class ToDoController{
  constructor(){
    _draw()
    ProxyState.on("todos", _draw)
    ProxyState.on('numToDos', _draw)
  }

  createToDo(event){
    event.preventDefault();
    let form = event.target
    let rawToDo = {
        description: form.description.value,
    }
    toDoService.createToDo(rawToDo)
  }

  markComplete(id){
    toDoService.markComplete(id)
  }

  deleteToDo(id){
    toDoService.deleteToDo(id)
  }
 
}