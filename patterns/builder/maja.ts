class Maja{
    address: string;
    korrustearv: number;
    linn: string;
    onParkimiskoht: boolean;
    onAed: boolean;

    constructor(majaEhitaja: MajaEhitaja) {
        this.address = majaEhitaja.getAddress();
        this.korrustearv = majaEhitaja.getKorrused();
        this.linn = majaEhitaja.getLinn();
        this.onParkimiskoht = majaEhitaja.getParkla();
        this.onAed = majaEhitaja.getAed();
    }
}

class MajaEhitaja {
    private readonly _address: string;
    private _korrustearv: number = 0;
    private _linn: string = "";
    private _onParkimiskoht: boolean = false;
    private _onAed: boolean = false;

    constructor(address: string) {
        this._address = address;
    }

    setKorruseid(korrustearv: number) {
        this._korrustearv = korrustearv;
    }

    setLinn(linn: string ){
        this._linn = linn;
    }

    ehitaParkla() {
        this._onParkimiskoht = true
    }
    ehitaAed() {
        this._onAed = true
    }

    build() {
        return new Maja(this)
    }

    getThis() {
        return this
    }

    getAddress() {
        return this._address
    }

    getLinn() {
        return this._linn
    }

    getKorrused() {
        return this._korrustearv
    }
    getAed() {
        return this._onAed
    }
    getParkla() {
        return this._onParkimiskoht
    }
}


const majaEhitaja = new MajaEhitaja('cow');
majaEhitaja.setLinn('Lymandi');
majaEhitaja.ehitaAed();
majaEhitaja.ehitaParkla();
majaEhitaja.setKorruseid(2);
console.log(majaEhitaja.getThis());

const lehmaMaja = majaEhitaja.build();

console.log(lehmaMaja);