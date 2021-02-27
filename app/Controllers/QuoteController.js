import { ProxyState } from "../AppState.js"
import { quoteService} from "../Services/QuoteService.js"

function _draw(){
    document.getElementById('quote').innerText = ProxyState.quote

    document.getElementById('author').innerText = ProxyState.author
    console.log(`${ProxyState.author}`);
}

export default class QuoteController{
    constructor(){
        _draw()
        ProxyState.on('quote', _draw)
        ProxyState.on('author', _draw)
        
    }
}