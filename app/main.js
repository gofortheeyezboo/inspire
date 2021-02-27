import ImageController from "./Controllers/ImageController.js";
import ToDoController from "./Controllers/ToDoController.js";
import ValuesController from "./Controllers/ValuesController.js";
import QuoteController from "./Controllers/QuoteController.js"
import WeatherController from "./Controllers/WeatherController.js"

class App {
  // valuesController = new ValuesController();
  toDoController = new ToDoController();
  imageController = new ImageController();
  quoteController = new QuoteController();
  weatherController = new WeatherController();
}

window["app"] = new App();
