interface kolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[];
    loeVideoInfo(id: string): string;
    laeVideoAlla(id: string): void;
}

class kolmandaOsapooleYoutubeKlass implements kolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[] {
        console.log("loen vided ");
        return ["v1", "v2", "v3"];
    }

    loeVideoInfo(id: string): string {
        return `siin on info ${id} kohta`
    }

    laeVideoAlla(id: string): void {
        console.log('laen');
    }
} 

class ProxyKlassYoutubeTeenusele implements kolmandaOsapooleYoutubeTeenus {
    private teenus: kolmandaOsapooleYoutubeTeenus;
    private loendiPuhver: string[] | null = null;
    private videoPuhver: Map<string, string> = new Map();
    private allalaetudViedod: string[] = [];
    vajabVarskendust: boolean = false;

    constructor(teenus: kolmandaOsapooleYoutubeTeenus) {
        this.teenus = teenus
    }

    loetleVideod(): string[] {
        if (this.loendiPuhver == null || this.vajabVarskendust) {
            this.loendiPuhver = this.teenus.loetleVideod();
        }
     
        
        return this.loendiPuhver;
    }

    loeVideoInfo(id: string): string {
        const puhverdatudVideo = this.videoPuhver.get(id);

        if (puhverdatudVideo === undefined || this.vajabVarskendust) {
            const info = this.teenus.loeVideoInfo(id)
            this.videoPuhver.set(id, info);
            return info;
        }

        return puhverdatudVideo;
        
    }

    laeVideoAlla(id: string): void {
        const jubaAllalaetudVideo = this.allalaetudViedod.includes(id);
        if (!jubaAllalaetudVideo || this.vajabVarskendust) {
            this.teenus.laeVideoAlla(id);

            this.allalaetudViedod.push(id)
        }
        else {
            
        }
    }

}