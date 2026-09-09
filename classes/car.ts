class Car {
    mileage: number;
    mass: number;
    body_type: string;
    number_of_seats: number;
    body_color: string;
    tank_size: number;
    transmission: string;
    brake_type: string;
    release_year: number;

    constructor(
        mileage: number,
        mass: number,
        body_type: string,
        number_of_seats: number,
        body_color: string,
        tank_size: number,
        transmission: string,
        brake_type: string,
        release_year: number
    ) {
        this.mileage = mileage;
        this.mass = mass;
        this.body_type = body_type;
        this.number_of_seats = number_of_seats;
        this.body_color = body_color;
        this.tank_size = tank_size;
        this.transmission = transmission;
        this.brake_type = brake_type;
        this.release_year = release_year;
    }

    get_health_info(): string {
        let info = 
         `
            mileage: ${this.mileage} km
            brake_type: ${this.brake_type}
            release_year: ${this.release_year}
            transmission = ${this.transmission}
        `
        return info;
    }

    get_comfort_info(): string {
        let info =

        `
            body_color: ${this.body_color}
            tank_size: ${this.tank_size} l
            release_year: ${this.release_year}
            body_type: ${this.body_type}
            number_of_seats: ${this.number_of_seats}
        `

        return info;
    }

    set_mileage(mileage: number): void {
        this.mileage = mileage
        return;
    }

    get_mileage(): string {
        return `Mileage: ${this.mileage} km`; 
    }
}

let hyundai: Car = new Car(
    5454,
    45,
    "Coupe",
    4,
    "Black",
    50,
    "5-Step",
    "Disc",
    1998
)

console.log(hyundai.get_comfort_info());
console.log(hyundai.get_health_info());
hyundai.set_mileage(10);
console.log(hyundai.get_mileage());