import { ProxyState } from "../AppState.js"

export default class ToDo {
    constructor(data) {
        this._id = data._id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
        <div class='row'>
        <ul><li class=''><span class=''>${this.description}</span>
        <input type='checkbox' ${this.completed ? 'checked':'' } onclick="app.toDoController.markComplete('${this._id}')">  
        <button type="button" class="text-danger close"
        onclick="app.toDoController.deleteToDo('${this._id}')"><span>&times;</span></button></li> </ul>
        </div>
        </div>
        `
    }
}
