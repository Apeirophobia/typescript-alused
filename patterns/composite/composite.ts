abstract class Component {

    protected parent!: Component | null

    public setParent(parentElement: Component | null) {
        this.parent = parentElement;
    }
    public getParent(): Component | null {
        return this.parent
    }

    public add(component: Component): void { }
    public remove(component: Component): void { }

    public IsCompositeObject(): boolean {
        return false;
    }

    public abstract activity(): string;
}

class Page extends Component {
    public activity(): string {
        return "I am Groot";
    }
}

class Composite extends Component {
    protected subComponents: Component[] = [];

    public add(component: Component): void {
        this.subComponents.push(component);
        component.setParent(this);
    }

    public remove(component:Component): void {
        const componentIndex = this.subComponents.indexOf(component);
        this.subComponents.splice(componentIndex, 1);
        component.setParent(null);
    }


    public isCompositeObject(): Boolean {
        return true;
    }

    public activity(): string {
        const results = [];
        for (const subComponents of this.subComponents) {
            results.push(subComponents.activity);
        }

        return `Branch (${results.join('+')})`;
    }

}

const simple = new Page();

console.log(`simple ${simple.activity()}`);

const tree = new Composite();
const branch_1 = new Composite();
const branch_2 = new Composite();

branch_1.add(new Page());
branch_1.add(new Page());
branch_1.add(new Page());
branch_2.add(new Page());
branch_2.add(new Page());
branch_2.add(new Page());
tree.add(branch_1);
tree.add(branch_2);

console.log(`tree: ${tree.activity()}`);

if (tree.isCompositeObject()) {
    tree.add(simple);
}