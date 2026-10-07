interface Lennujuhtija {
    teavita(sender: object, event: string): void;

}

class LennujuhtimisTorn implements Lennujuhtija { 
    private reisiLennuk: ReisiLennuk;
    private kaubaLennuk: KaubaLennuk;

    constructor(reisiLennuk: ReisiLennuk, kaubaLennuk: KaubaLennuk) {
        this.reisiLennuk = reisiLennuk;
        this.reisiLennuk.seaLennujuhtija(this);
        this.kaubaLennuk = kaubaLennuk;
        this.reisiLennuk.seaLennujuhtija(this);
    }

    public teavita(sender: object, event: string): void {
        if (event === "TOUS") {
            console.log("Lennujuhtimistorn: luba palutud")
            this.kaubaLennuk.hoiaAsukohta();
            this.reisiLennuk.touseOhku();
        }

        if (event === "MAANDUMINE") {
            console.log("Lennujuhtimistorn: luba palutud")
            this.kaubaLennuk.eemalduRajalt();
            this.reisiLennuk.maandu();
        }


    }
}

class Lennuk {
    protected lennuJuhtija!: LennujuhtimisTorn
    
    constructor(lennuJuhtija?: LennujuhtimisTorn) {
        this.lennuJuhtija = lennuJuhtija!;
    }

    public seaLennujuhtija(lennuJuhtija: LennujuhtimisTorn) {
        this.lennuJuhtija = lennuJuhtija;
    }
}



class ReisiLennuk extends Lennuk {



    public kusiOhkuLuba () {
        
        this.lennuJuhtija.teavita(this, "TOUS")
    }
    public hoiaAsukohta() {

    }

    public touseOhku() {
        console.log("Reisilennuk touseb ohku")
    }
    public eemalduRajalt() {
        console.log("Reisilennuk emmaldub ohkutousurajalt")
    }
    public maandu() {

    }
}

class KaubaLennuk extends Lennuk {

    public kusiMaandumisLuba(): void {
        console.log("Kaubalennuk kysib maandumisluba")
        this.lennuJuhtija.teavita(this, "LUBA_MAANDUM")
    }

    public hoiaAsukohta() {
        console.log("Kaubalennuk on paigal")
    }

    
    public touseOhku() {

    }   

    public eemalduRajalt() {

    }
    public maandu() {
        console.log("Kaubalennuk maandub ")
    }
}


const reisiLennuk = new ReisiLennuk();
const kaubaLennuk = new KaubaLennuk();


const ATC = new LennujuhtimisTorn(reisiLennuk, kaubaLennuk);



reisiLennuk.seaLennujuhtija(ATC);
kaubaLennuk.seaLennujuhtija(ATC);

reisiLennuk.kusiOhkuLuba();

kaubaLennuk.kusiMaandumisLuba();
