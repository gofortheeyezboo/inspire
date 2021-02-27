import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _draw(){
    
    
    document.getElementById('weather').innerText = `${ProxyState.weather}`
}
export default class WeatherController{
    constructor(){
        _draw()
        ProxyState.on('weather', _draw)
    }
}