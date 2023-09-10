export class Product {

    private _id: string
    private _name: string;
    private _price: number;
    private _comment: string;

    constructor(options: { id: string, name: string, price: number, comment: string }) {
        this._id = options.id
        this._name = options.name
        this._price = options.price
        this._comment = options.comment
    }


}