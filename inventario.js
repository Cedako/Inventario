export default class Inventario{
    constructor(){
        this._inventario = new Array();
        this._table = document.querySelector("#table");
    }

    //añadir producto al vector
    add(product){
        let pos = this._find(product);
        

        if (pos>=0){
            return false;
        }
        else{
            this._inventario.push(product);
            console.log(this._inventario);
            return true;
        }
    }

    //Encontrar el producto en el vector
    _find(product){
        let pos = this._inventario.findIndex((p) => {
            if(p.getId() === product.getId()){
                return true;
            }
            else{
                return false;
            }
        });
        return pos;
    }

    showAll(){
        this._table.innerHTML = ""
        for(let i=0; i<this._inventario.length;i++){
            let row = this._table.insertRow(-1);

            let colId = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colId.innerHTML = this._inventario[i].getId();
            colName.innerHTML = this._inventario[i].getName();
            colQuantity.innerHTML = this._inventario[i].getQuantity();
            colCost.innerHTML = this._inventario[i].getCost();
            colTotal.innerHTML = this._inventario[i].getTotal();
        }
    }
    showInverse(){
        this._table.innerHTML = "";
        console.log(this._inventario.length)
        for(let i=0; i<this._inventario.length;i++){
            let row = this._table.insertRow(0);

            let colId = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colId.innerHTML = this._inventario[i].getId();
            colName.innerHTML = this._inventario[i].getName();
            colQuantity.innerHTML = this._inventario[i].getQuantity();
            colCost.innerHTML = this._inventario[i].getCost();
            colTotal.innerHTML = this._inventario[i].getTotal();
        }
    }
}