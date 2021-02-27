import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class WeatherService{
    constructor(){
        this.getWeather()
    }
    async getWeather(){
    try {
        const res = await api.get('weather')
        console.log(res)
        ProxyState.weather = res.data.main.temp
        ProxyState.weather = +((ProxyState.weather - 273.15)*(9/5)+32).toFixed(2)
        
    } catch (error) {
        console.error(error)
    }
    }
}
export const weatherService = new WeatherService()

