
// abstract interface that says
// a factory should have these methods
// and methods return these data types
// these are called "family"
// each product family can have multiple variants
// but each variant is unique cannot be inherited from another

interface VehicleFactory {
    createACar(): VehicleProductA;
    createATram(): VehicleProductB;
}


// kindlad tehased toodavad perekonnatooteid mis kuuluvad  yhe variandi juurde
// tehes garanteerib et valminud tooted on yhilduvad. meetodite signatuurid
// pdeapdpaepdaepdaepdpaepdaep

class CarFactory implements VehicleFactory {
    public createACar(): VehicleProductA {
        return
    }

    public createATram(): VehicleProductB {
        return null;
    }
}

// igal tehasel on toote variandid olgu nad meetodiga valjakutsutud
// tootetegemised v null

class TramFactory implements VehicleFactory {
    public createACar(): VehicleProductA {
        return
    }

    public createATram(): VehicleProductB {
        return new TramProduct();
    }
}

class CarProduct implements VehicleProductA {
    public whatIsThis() {
        return "this is a volvo"
    }
}

class CarProduct2 implements VehicleProductA {
    public whatIsThis() {
        return 'this is a bmw';
    }
}
class TramProduct implements VehicleProductB {
    public whatIsThis() {
        return "this is a volvo"
    }
}

class TramProduct2 implements VehicleProductB {
    public whatIsThis() {
        return 'this is a bmw';
    }
}