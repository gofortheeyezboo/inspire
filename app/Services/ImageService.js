import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"


class ImageService{
    constructor(){
        this.getImage()
    }

    async getImage(){
        try {
            const res = await api.get('images')
            ProxyState.bgUrl = res.data.large_url || res.data.url
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

}
export const imageService = new ImageService()