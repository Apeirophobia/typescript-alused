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
            this.kaubaLennuk.hoiaAsukohta();
            this.reisiLennuk.maandu();
        }


    }

}


class ReisiLennuk {
    protected lennuJuhtija: LennujuhtimisTorn

    constructor(lennuJuhtija?: LennujuhtimisTorn) {
        this.lennuJuhtija = lennuJuhtija!;
    }

    public seaLennujuhtija(lennuJuhtija: LennujuhtimisTorn) {
        this.lennuJuhtija = lennuJuhtija;
    }
    public hoiaAsukohta() {

    }

    public touseOhku() {

    }
}

class KaubaLennuk {
    protected lennuJuhtija: LennujuhtimisTorn

    constructor(lennuJuhtija?: LennujuhtimisTorn) {
        this.lennuJuhtija = lennuJuhtija!;
    }

    public seaLennujuhtija(lennuJuhtija: LennujuhtimisTorn) {
        this.lennuJuhtija = lennuJuhtija;
    }

    public hoiaAsukohta() {

    }

    public touseOhku() {
        
    }
}