import ToDoController from "./Controllers/ToDoController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  toDoController = new ToDoController();
}

window["app"] = new App();
