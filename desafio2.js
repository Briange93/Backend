const fs = require ('fs')

class Contenedor {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }
   
    save(values) {
        const items = this.getAll();

        values.id = items.length + 1;
        items.push(values);

        const fileContent = JSON.stringify(items);

        try {
            fs.writeFileSync(this.nombreArchivo, fileContent);
        } catch (error) {
            console.error(error);
        }

        return values.id;
    }

    getAll(){
        let fileContent;
        
        try {
            if (fs.existsSync(this.nombreArchivo)) {
                fileContent = fs.readFileSync(this.nombreArchivo);
            }
        } catch (error) {
            console.log(error)
        }
        
        return fileContent ? JSON.parse(fileContent) || [] : [];
    }
} 
const productos = new Contenedor('./productos.txt');


productos.save({
    title: "pizza",
    price:1200
});
let ContenedorArray = [];
function ingresoArray() {
    ContenedorArray.push(Contenedor);
}
module.exports = ContenedorArray;
ingresoArray();