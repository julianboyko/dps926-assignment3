export class PizzaTopping {
    name: string;
    price: number;

    constructor(name: string) {
        this.name = name;
        switch (name) {
            case "Vegetables":
                this.price = 1.5;
                break;
            case "Meatballs":
                this.price = 2.5;
                break;
            case "Pepperoni":
                this.price = 2.0;
                break;
            case "Mushroom":
                this.price = 1.0;
                break;
            default:
                this.price = 0;
                break;
        }
    }
}
