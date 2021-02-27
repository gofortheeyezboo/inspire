import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"

function _draw(){
    document.body.style.backgroundImage = `url('${ProxyState.bgUrl}')`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center' 
    

}
export default class ImageController{
    constructor(){
        _draw()
        ProxyState.on('bgUrl', _draw)
    }
}