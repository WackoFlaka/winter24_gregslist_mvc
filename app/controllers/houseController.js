import { AppState } from "../AppState.js";
import { HouseService } from "../services/houseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHomes() {
    console.log("Drawing houses in controller")
    const houses = AppState.houses
    let htmlString = ''
    houses.forEach(house => htmlString += house.HomeCardHTMLTemplate)
    setHTML('houseListings', htmlString)
}

export class houseController {
    constructor() {
        // NOTE this is the controller for the house page. And it will display all houses on the page.
        console.log("Houses Controller Loaded!")
        HouseService.loadHousesFromLocalStorage()
        _drawHomes()
    }
    
    createHouse() {
        try {
            event.preventDefault()
            const form = event.target
            const carFormData = getFormData(form)
            HouseService.createHome(carFormData)
            form.reset()
            _drawHomes()
        }  catch {
            console.log(error)
            Pop.error(error.message)
        } 
    }
    
    async removeHouse(houseId) {
        const WantsToRemove = await Pop.confirm('Are you sure you want to delete this house listing')
        
        if (!WantsToRemove) {
            return
        }
        
        HouseService.removeHouse(houseId)
        _drawHomes()

    }
}