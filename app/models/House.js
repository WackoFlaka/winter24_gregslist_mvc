import { generateId } from "../utils/GenerateId.js";

export class House {
    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }
    
    get HomeCardHTMLTemplate() {
        return `
        <div class="col-6 mb-3">
            <div class="bg-light rounded shadow-lg d-block d-md-flex">
                <img src="${this.imgUrl}" alt="house" class="house-img rounded-start">
                
                <div class="py-2 px-5">
                    <h2>${this.year}</h2>
                    <h2>$${this.price}</h2>
                    <h4>Bedrooms: ${this.bedrooms}</h4>
                    <h4>Bathrooms: ${this.bathrooms}</h4>
                    <h5>SQFT: ${this.sqft}</h5>
                    <p>${this.description}</p>
                    
                <div>
                    <button class="btn btn-danger" onclick="app.houseController.removeHouse('${this.id}')">Remove Listing</button>
                </div>
                </div>
            </div>
        </div>
        `
    }
}