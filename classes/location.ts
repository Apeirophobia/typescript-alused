/*
kirjuta klass asukoha jaoks:
latitude
longitude
address
postiindeks
elamutüüp (enum),
maja värv
korruste arv,
katusmaterjal
*/

class Loc {
    latitude: number;
    longitude: number;
    address: string;
    postal_code: number;
    housing_type: string;
    building_color: string;
    floors: number;
    roof_material: string;
    
    constructor (
        latitude: number,
        longitude: number,
        address: string,
        postal_code: number,
        housing_type: string,
        building_color: string,
        floors: number,
        roof_material: string
    ) {

        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.postal_code = postal_code;
        this.housing_type = housing_type,
        this.building_color = building_color,
        this.floors = floors
        this.roof_material = roof_material
    }

    get_info(): void {
        console.log(
            `
            latitude: ${this.latitude}
            longitude: ${this.longitude}
            address: ${this.address}
            postal_code: ${this.postal_code}
            housing_type: ${this.housing_type}
            building_color: ${this.building_color}
            floors: ${this.floors}
            roof_material: ${this.roof_material}
            `
        )
    }

    get_latitude(): number {
        return this.latitude;
    }

    set_building_color(building_color: string): void {
        this.building_color = building_color
        return;
    }
}
/*
enum HousingType {
    flat = "Flat",
    house = "House",
    apartments = "Apartments"
}
*/
let yhikas: Loc = new Loc(
    55.5,
    55.5,
    "Sopruse pst 182",
    12312,
    "apartments",
    "Gray",
    5,
    "Brick"
);

yhikas.get_info();

// muuda majavärv
// kuva laiuskraadid

yhikas.get_latitude()
yhikas.set_building_color("red like china");
yhikas.get_info();


