import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import ToDo from "../Models/Todo.js"

class ToDoService {

    constructor(){
        this.getToDos()
    }

    async getToDos(){
        try {
            const res = await api.get('Znasty/todos')
            console.log(res);
            ProxyState.todos = res.data.map(rawToDo => new ToDo(rawToDo))
            ProxyState.todos.forEach(t => {
                ProxyState.numToDos++
            });
          } catch (error) {
            console.error(error)
          }
    }
    async createToDo(rawToDo){
    try {
        const res = await api.post('Znasty/todos', rawToDo)
        ProxyState.todos = [...ProxyState.todos, new ToDo(res.data)]
        ProxyState.numToDos++
        } catch (error) {
            console.error(error)
        }
    }

    async markComplete(id){
        let todo = ProxyState.todos.find(t => t._id == id)
        console.log(todo);
        if(todo.completed == false){
            todo.completed = true
            console.log(todo.completed)
        }else{ if(todo.completed == true){
            todo.completed = false
        }
        }
        try {
            const res = await api.put(`Znasty/todos/${id}`, todo)
        } catch (error) {
            console.error(error)
        }
    }
    async deleteToDo(id){
        try {
            const res = await api.delete(`Znasty/todos/${id}`)
            ProxyState.numToDos--
            this.getToDos()
        } catch (error) {
            console.error(error)
        }
    }
}

export const toDoService = new ToDoService()