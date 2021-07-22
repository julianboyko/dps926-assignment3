export class PizzaSize {
    name: string;
    price: number;

    constructor(name: string) {
        this.name = name;

        switch (name) {
            case "Large":
                this.price = 18.0;
                break;
            case "Medium":
                this.price = 16.0;
                break;
            case "Small":
                this.price = 14.0;
                break;
            case "Party":
                this.price = 22.0;
                break;
            default:
                this.price = 0;
                break;
        }
    }
}
