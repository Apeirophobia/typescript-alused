class Prototüüp {
    public primitiiv: any;
    public component: object;
    public ringViide: KomponentTagasiviitega;

    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        
        clone.ringViide = new KomponentTagasiviitega(clone);
        return clone;
    }
        

}


class KomponentTagasiviitega {
    public prototype;

    constructor(prototype: Prototüüp) {
        this.prototype = prototype;
    }
}



const pr1 = new Prototüüp();
pr1.primitiiv = 11;
pr1.component = new Date();
pr1.ringViide = new KomponentTagasiviitega(pr1);

const pr2 = pr1.clone();
if (pr1.ringViide == pr2.ringViide) {
    console.log('kloon edukas')
} else {
    console.log('aja raiskamine')
}

console.log(pr1, pr2)