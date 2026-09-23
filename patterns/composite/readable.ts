class Ese {
    protected nimi!: string;
    protected hind!: number;

    constructor (nimi: string, hind: number) {

    }

    public getHind(): number {
        return 0;
    }

}

class Toode extends Ese {

    //protected nimi!: string
    // protected hind!: number
    public getHind(): number {
        return this.hind;
    }
}

class Karp extends Ese {
    private esemed: Ese[] = [];

    private add(ese: Ese): void {
        this.esemed.push(ese);
    }

    getHind(): number {
        let total = 0;
        for (const ese of this.esemed) {
            total += ese.getHind();
        }
        return total;
    }
}

const telefon = new Toode("Telefon", 500);
const razor = new Toode("Razor", 200);
const cow = new Toode("Cow", 100000);

const saadetis = new Karp();