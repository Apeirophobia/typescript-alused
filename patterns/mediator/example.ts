interface Mediaator {
    teadvuseta(sender: object, event: string): void;
}

class KindelMediaator implements Mediaator {
    private komponent1: Komponent1;
    private komponent2: Komponent2;

    constructor(c1: Komponent1, c2: Komponent2) {
        this.komponent1 = c1;
        this.komponent1.seaMediaator(this);
        this.komponent2 = c2;
        this.komponent2.seaMediaator(this);

    }

    public teadvuseta(sender: object, event: string): void {
        if (event == "A") {
            console.log("Medaator reageerib juhtumile A");
            this.komponent1.teeTegevusA
        }
        if (event == "D") {
            console.log("Medaator reageerib juhtumile D");
            this.komponent1.teeTegevusB
            this.komponent2.teeTegevusD
        }
    }
}

class BaasKomponent {
    protected mediaator: Mediaator;

    constructor(mediaator?: Mediaator) {
        this.mediaator = mediaator!;
    }

    public seaMediaator(mediaator: Mediaator): void {
        this.mediaator = mediaator
        return;
    }
}

class Komponent1 extends BaasKomponent {
    public teeTegevusA(): void {
        console.log("Komponent1 teostab tegevust A");
        this.mediaator.teadvuseta(this, "A");
    }
    
    public teeTegevusB(): void {
        console.log("Komponent1 teostab tegevust B");
        this.mediaator.teadvuseta(this, "B");
    }
    
}

class Komponent2 extends BaasKomponent {
    public teeTegevusC(): void {
        console.log("Komponent1 teostab tegevust C");
        this.mediaator.teadvuseta(this, "C");
    }
    
    public teeTegevusD(): void {
        console.log("Komponent1 teostab tegevust D");
        this.mediaator.teadvuseta(this, "D");
    }
}

const k1 = new Komponent1();
const k2 = new Komponent2();

const mmediaator = new KindelMediaator(k1, k2);
k1.teeTegevusA();
k2.teeTegevusD();
