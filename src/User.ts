import faker from 'faker';

export class User{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string{
        return `<div>
    
        <h1>User Name: ${this.name}</h1>
        </div>
        `
    };
    


    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        
        
    }
    
}

