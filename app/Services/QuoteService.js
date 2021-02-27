import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class QuoteService{
    constructor(){
        this.getQuote()
    }
    async getQuote(){
        try {
            const res = await api.get('quotes')
            ProxyState.quote = res.data.content
            ProxyState.author = res.data.author
            console.log(res)
            
        } catch (error) {
            console.error(error)
        }
    }
}
export const quoteService = new QuoteService()