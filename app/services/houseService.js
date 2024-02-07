import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";

function _saveHousesInLocalStorage() {
    saveState('houses', AppState.houses)
}

class houseService {
    createHome(form) {
        const newHome = new House(form)
        AppState.houses.push(newHome)
        _saveHousesInLocalStorage()
    }
    
    loadHousesFromLocalStorage() {
        const housesFromLocalStorage = loadState('houses', [House])
        AppState.houses = housesFromLocalStorage
    }
    
    removeHouse(houseId) {
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        if(houseIndex == -1) {
            throw new Error('ERROR: INDEX RETURNED -1')
        }
        AppState.houses.splice(houseIndex, 1)
        _saveHousesInLocalStorage()
    }
}

export const HouseService = new houseService()