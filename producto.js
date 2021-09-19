export default class Producto{
    constructor(id, name, quantity, cost){
        this._id = Number (id);
        this._name = name;
        this._quantity = Number(quantity);
        this._cost = Number(cost);
    }
    
    getId(){
        return this._id;
    }
    getName(){
        return this._name;
    }
    getQuantity(){
        return this._quantity;
    }
    getCost(){
        return this._cost;
    }
    getTotal(){
        return this._quantity*this._cost;
    }

    static readForm () {
        let inId = document.querySelector("#id");
        let inName = document.querySelector("#name");
        let inQuantity = document.querySelector("#quantity");
        let inCost = document.querySelector("#cost");

        let id = inId.value;
        let name = inName.value;
        let quantity = inQuantity.value;
        let cost = inCost.value;
        
        if(id && name && quantity && cost){
            inId.value = "";
            inName.value = "";
            inQuantity.value = "";
            inCost.value = "";

            return new Producto(id,name,quantity,cost);
        }
        else{
            return false;
        }
    }
}