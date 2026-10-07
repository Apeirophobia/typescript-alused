class Originator {
    private sisemineOlek: string; 
    constructor(sisemineOlek: string) {
        this.sisemineOlek = sisemineOlek;
        console.log(`Originaator: Minu olek on ${sisemineOlek}`);
    }

    public teeMidagi(): void {
        console.log("Originaator: Toimub tähtis tegevus");
        this.sisemineOlek = this.genereeriSõne(30);
        console.log(`Sisemine olek: ${this.sisemineOlek}`);
        
    }

    private genereeriSõne(pikkus: Number) {
        const tahestik = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWYXZ";
        return Array.apply(null, {pikkus}).map(() => tahestik.charAt(
            Math.floor(Math.random()*tahestik.length)
        )).join('');
    }


    public salvesta(): Memento {
        return new KindelMemento(this.sisemineOlek);
    }

    public taasta(memento: Memento): void {
        this.sisemineOlek = memento.saaOlek();
        console.log(`Originaator: Mu sisemine olek on muudetud ${this.sisemineOlek}`);
    }

}

interface Memento {
    saaOlek(): string;
    saaNimi(): string;
    saaAeg(): string;
}

class KindelMemento implements Memento {
    private sisemineOlek: string;
    private kuupaev: string;

    constructor(sisemineOlek: string) {
        this.sisemineOlek = sisemineOlek;
        this.kuupaev = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    
    public saaOlek(): string {
        return this.sisemineOlek;
    }
    
    public saaAeg(): string {
        return this.kuupaev;
    }

    public saaNimi(): string {
        return `${this.kuupaev} / (${this.sisemineOlek.substring(0, 9)})`
    }
}


class Hoolekandja {
    private mementod: Memento[] = [];
    private originaator: Originator;

    constructor(originaator: Originator) {
        this.originaator = originaator;
    }

    public varukoopia(): void {
        console.log("varukoopia");
        this.mementod.push(this.originaator.salvesta());
    }

    public tagasivott(): void {
        if (!this.mementod.length) {
            return;
        }

        const memento = this.mementod.pop()!;
        console.log("taastan oleku")
        
    }

    public kuvaAjalugu(): void {
        for (const memento of this.mementod) {
            console.log(memento.saaNimi());
        }
    }
}

const originaator = new Originator("enrique kass");
const hoolekandja = new Hoolekandja(originaator);


for (let index = 0; index < 3; index++) {
    hoolekandja.varukoopia();
    originaator.teeMidagi();
}

console.log();
hoolekandja.kuvaAjalugu();

console.log('Klient: võta üks tagasi');
hoolekandja.tagasivott();

console.log('Klient: võta veel üks tagasi');
hoolekandja.tagasivott();