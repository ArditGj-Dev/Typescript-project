import faker from 'faker';

export class Comp {
    compName: string;
    catchPh: string;
    location: {
        lat: number;
        lng: number;
    };

constructor () {
    this.compName = faker.company.companyName();
    this.catchPh = faker.company.catchPhrase();
    this.location= {
        lat : parseFloat(faker.address.latitude()),
        lng : parseFloat(faker.address.longitude())
    };
} 
markerContent(): string{
    return `
    <div>
    <h1>Company Name: ${this.compName}</h1>,
    <br><h4>Catch Phrase: ${this.catchPh}</h4>
    </div>`
};

}
