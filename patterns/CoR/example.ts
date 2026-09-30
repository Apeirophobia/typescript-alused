
// Vastutuste kett on käitumuslik muster, mis lubab kasutajal saata päringuid mööda käsitlejate ketisse. 
// Päringu kätte saamisel iga käsitleja valib, kas ta töötleb seda päringut või saadab seda mööda ketti edasi.

// Põhi ketta sidumiseks ning päringute käsitlemiseks
interface KliendiTugi<Päring = string, Tulemus = string> {
    määraJärgmise(KliendiTugi: KliendiTugi<Päring, Tulemus>): KliendiTugi<Päring, Tulemus>; // funktsioon, parameetrid: klienditugi, tagastab: klienditugi

    käsitle(päring: Päring): Tulemus; // funktsioon, parameetrid: päring, tagastab: tulemus
}

// Põhi käsitleja klass, siin on kõik funktsioonid lahti kirjutatud
abstract class AbstraktneKliendiTugi implements KliendiTugi 
{

    private järgmineKäsitleja!: KliendiTugi; // Määrab järgmise lüli kettis

    public määraJärgmise(KliendiTugi: KliendiTugi): KliendiTugi {  // Funktsoon, parameetrid: iga klass, mis on ehitatud KliendiTugi liidese põhjal, tagastab: KliendiTugi
        this.järgmineKäsitleja = KliendiTugi; // selle klassi "nextKäsitleja" on ülekantud parameeter

        return KliendiTugi; // tagastab ülekantud parameetri
    }

    public käsitle(päring: string): string { // Funktsioon, parameetrid: päring (string), tagastab: string
        if (this.järgmineKäsitleja) { // kui järgmineKäsitleja on määratud
            return this.järgmineKäsitleja.käsitle(päring); // Saada päringu järgmisele käsitlejale
        }
        
        // Juhul kui järgmist pole määratud, tagasta: "Ketti lõpp"
        return "Ketti lõpp"; 
    }
}

class ShopKäsitleja extends AbstraktneKliendiTugi { // Konkreetne käsitleja, võtab sisse sisu AbstraktneKliendiTugi klassist
    
    public käsitle(päring: string): string { // kirjutame ümber käsitle meetodit selle Konkreetse käsitleja jaoks
        if (päring === "Osta") {  // Kui päring vastab selle käsitleja kompetentsile
            return "No vaatame siis!"; // Kett lõppeb, ning tagastatakse lõpp vastus
        }
        // kutsutakse originaalse meetodi kuju, antakse üle päring
        // siis vaadatakse kas sellel käsitlejal on määratud järgmineKästileja,
        // kui jah - antakse päring edasi. Vastasel juhul kett lõppeb.
        return super.käsitle(päring); 
    }

}


class KitarriKäsitleja extends AbstraktneKliendiTugi { // Konkreetne käsitleja, võtab sisse sisu AbstraktneKliendiTugi klassist

    public käsitle(päring: string): string { // kirjutame ümber käsitle meetodit selle Konkreetse käsitleja jaoks
        if (päring === "Kitarrihooldus") { // Kui päring vastab selle käsitleja kompetentsile
            return "Las ma vaatan üle teie kitarri"; // Kui päring vastab selle käsitleja kompetentsile
        }

        // kutsutakse originaalse meetodi kuju, antakse üle päring
        // siis vaadatakse kas sellel käsitlejal on määratud järgmineKästileja,
        // kui jah - antakse päring edasi. Vastasel juhul kett lõppeb.

        return super.käsitle(päring);
    }
}


class PedalboardiKäsitleja extends AbstraktneKliendiTugi { // Konkreetne käsitleja, võtab sisse sisu AbstraktneKliendiTugi klassist
    
    public käsitle(päring: string): string { // kirjutame ümber käsitle meetodit selle Konkreetse käsitleja jaoks
        if (päring === "Pedalboardihooldus") { // Kui päring vastab selle käsitleja kompetentsile
            return "Las ma vaatan üle teie pedalboard'i"; // Kui päring vastab selle käsitleja kompetentsile
        }

        // kutsutakse originaalse meetodi kuju, antakse üle päring
        // siis vaadatakse kas sellel käsitlejal on määratud järgmineKästileja,
        // kui jah - antakse päring edasi. Vastasel juhul kett lõppeb.

        return super.käsitle(päring);
    }
}




const shopKäsitleja = new ShopKäsitleja(); // Loome ShopKäsitleja üksust
const kitarriKäsitleja = new KitarriKäsitleja(); // Loome ShopKäsitleja uksust
const pedalboardiKäsitleja = new PedalboardiKäsitleja(); // Loome ShopKäsitleja uksust

shopKäsitleja.määraJärgmise(kitarriKäsitleja); // Määrame järgmiseks käsitlejaks kitarriKäsitlejat
kitarriKäsitleja.määraJärgmise(pedalboardiKäsitleja); // Määrame järgmiseks Käsitlejaks pedalboardiKäsitlejat

console.log(shopKäsitleja.käsitle("Kitarrihooldus"));
console.log(shopKäsitleja.käsitle("Pedalboardihooldus"));
