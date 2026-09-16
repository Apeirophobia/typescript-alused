// Liides mis kirjeldab ära meetodid erinevate toodete tegemiseks

interface Ehitaja {
    KompontentA(): void;
    KompontentB(): void;
    KompontentC(): void;

}

// kindlad ehitajaklassid peavad j'lgima ehitaja liidest ja andma kindlaid meetodite 
// implementatsioone. Programmis v]ib olla mitmeid Ehitajate variatsioone, 
// k]ik erinevalt omakorda implementeeritud.
class KindelEhitaja1 implements Ehitaja {
    private product: Toode1 = new Toode1();

    // värkselt paika pandud ehiatja instants peaks sialdama tühja toote objekti, seda hiljem kasutatakse
    // edasiste sammude juures kus täpsustatakse mis seal sees hakkab olema
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Toode1()
    }

    public KompontentA(): void {
        this.product.parts.push('Jupp A')
    }
    public KompontentB(): void {
        this.product.parts.push('Jupp B')
    }
    public KompontentC(): void {
        this.product.parts.push("Jupp C")
    }

    // Kindlad ehitajad on m]eldud andma omad meetodid tulemuste k'ttesaamiseks. Seda sellep'rast, 
    // et erinevat t[[pi ehitajad v]ivad toota t'ielikult erinevaid tooteid, 
    // mis ei pruugi j'lgida samamt liidest. 
    // Selleparast ei tohigi neid meetoded deklareeida Ehitaja alusvormis (classis, 
    // v'hemalt mitte staatiliselt [leskirjutatud programmeerimiskeeltes)
    // Tavaliselt p'rast p'ringu tegijale tulemuse tagastamist, peaks Ehitaja olema 
    // valmis j'rgmist toodet tootma. On tavaline, et reset meetod kutsutakse v'lja getToode() 
    // l]pus, aga see ei ole kohustuslik ja saab ehitajaid sundida ootama spetsiifilist
    // reseti v'ljakutset kliendi poolt (kes p'ringu tegi) enne eelmise tulemuse unustust (disposal)
    public getToode(): Toode1 {
        const result = this.product;
        this.reset();
        return result;
    }
    
}

// On loogiline kasutada samat Ehitaja mustrit uueesti, kui tegemist on keeruka tootega, mis n]uab pikemat konfiguratsiooni
class Toode1 {
    public parts: string[] = [];

    public MisOsad(): void {
        console.log(`Toode sisaldab endas: ${this.parts.join(', ')}\n`);
    }
}

// Direktor vastutab ainult sammude käivitamise eest kindlas järjekorras,
// On kasulik kui tooteid toodetakse mingisuguse kindla konfiguratsioonijärjestuse alusel. 
// Direktori klass on valikuline, kuna kliendil, on võimalus Ehitajaid ka otse suunata/muuta/
// kontrollida

class Direktor {
    private builder: Ehitaja = new KindelEhitaja1(); 

    constructor() {

    }

    // Direktor töötab ükskõik, millise Ehitaja instantsiga mida klientkood talle edasi 
    // annab, niimodi võib kliendikood tagasi saanud valmis toodet ka muuta.
    public setBuilder(builder: Ehitaja): Ehitaja { // määra ehitaja, võtab parameetriks ehitaja
        this.builder = builder // paneb classi.Ehitaja väärtuseks antud parameeter

        return this.builder;
    }

    // direktor võib koostada mitmeid toote variante, kasutade samu ehitussamme
    public ehitaMVPToode(): void {
        this.builder.KompontentA();
    }

    public ehitaTaielikToode(): void {
        this.builder.KompontentA();
        this.builder.KompontentB();
        this.builder.KompontentC();
    }
}

function klientKood(direktor: Direktor) {
    const ehitaja = new KindelEhitaja1
    direktor.setBuilder(ehitaja);

    console.log("Taielik")
    direktor.ehitaTaielikToode();
    ehitaja.getToode().MisOsad();

    console.log("Ainulaadne")
    ehitaja.KompontentA();
    ehitaja.KompontentC();
    ehitaja.getToode().MisOsad();
}

klientKood(new Direktor());