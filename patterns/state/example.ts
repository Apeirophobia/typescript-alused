class Kontekst {
    private olek!: Olek;

    constructor(
        olek: Olek
    ) {
        this.ülekanne(olek);
    }

    public ülekanne(olek: Olek): void {
        console.log(`Kontekst muudab oma olekut selleks: ${(<any>olek).constructor.name}`);
        this.olek = olek;
        this.olek.seaKontekst(this);
    }

    public päring1(): void
    {
        this.olek.tegevus1();
    }

    public päring2(): void
    {
        this.olek.tegevus2();
    }
}

abstract class Olek {
    protected kontekst!: Kontekst;
    public seaKontekst(kontekst: Kontekst) {
        this.kontekst = kontekst;
    }

    public abstract tegevus1(): void;
    public abstract tegevus2(): void;
}

class KindelOlekA extends Olek {
    public tegevus1(): void {
        console.log('A 1');
        this.kontekst.ülekanne(new KindelOlekB());
    }
    public tegevus2(): void {
        console.log('A 2');
    }
}

class KindelOlekB extends Olek {
    public tegevus1(): void {
        console.log('B 1');
    }
    public tegevus2(): void {
        console.log('B 2');
        this.kontekst.ülekanne(new KindelOlekB());
    }
}

const kontekst = new Kontekst(new KindelOlekA());
kontekst.päring1();
kontekst.päring2();
