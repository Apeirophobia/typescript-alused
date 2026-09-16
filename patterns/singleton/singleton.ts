

// Singleton klass defineerib ära instance hankija, see laseb klientidel juurde pääseda 
// selle unikaalsele ainsale singeltonile

class Singleton {
    static #instance: Singleton;

    // singletoni enda vaikekonstruktor peab olema alati privaatne, et vältida "new" operaatori kasutamist,
    // mis muidu asendaks eksisteeriva singletoni uuega
    private constructor() {

    }

    // staatiline getter meetod mis kontrollib juurdepääasu sellele ainsale instantsile
    // Selline implementatsioon laseb laiendada singletoni klassi, samas hoides ainult
    // ühte instantsi mälus ükskõik millisel ajahetkel

    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }

    public SomeMethod() {
        console.log(Singleton.#instance);
    }
}


const single1 = Singleton.instance;
const single2 = Singleton.instance;
if (single1 === single2) {
    console.log("instances identical");
}