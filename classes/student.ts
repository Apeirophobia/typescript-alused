class Student {
    name: string;
    grade: number;
    gpa: number;
    /*
    Basic constructor using all class variables
    */

    constructor(name: string, grade: number, gpa: number) {
        this.name = name;
        this.grade = grade;
        this.gpa = gpa;
    }

    get_info(): void {
        console.log(`${this.name} is a student of grade ${this.grade} and has a gpa of ${this.gpa}`);
    }

    get_gpa(): number {
        return this.gpa;
    }

    set_gpa(gpa: number) {
        this.gpa = gpa;
        return this.gpa;
    }
}

let me: Student = new Student("Cow", 12, 2.5);

me.get_info();

me.set_gpa(5);
console.log(me.get_gpa());
me.get_info();
