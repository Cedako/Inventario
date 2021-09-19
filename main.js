import Inventario from "./inventario.js";
import Producto from "./producto.js";

class App{
    constructor(){
        //declaracion de botones
       let btnAdd = document.querySelector("#btnAdd");
       let btnShowAll = document.querySelector("#showAll");
       let btnShowInverse = document.querySelector("#showInverse");
        //funcionalidad de botones
       btnAdd.addEventListener("click", this._addProduct)
       btnShowAll.addEventListener("click", this._showAll)
       btnShowInverse.addEventListener("click",this._showInverse)

       this._inventario = new Inventario();
    }

    _showAll = () => {
        this._inventario.showAll()
    }
    _showInverse = () => {
        this._inventario.showInverse();
    }

    _addProduct = () => {
        let product = Producto.readForm();

        if(!product){
            alert("Todos los campos son requeridos")
            return;
        }

        let added = this._inventario.add(product);

        if(added === false){
            alert("El producto ya se encuentra en el inventario")
            return;
        }

        alert("Se ha añadido el producto al inventario")
        return;
    }

    
}
new App;