const fs = require('fs')

class Contenedor {
    constructor(filename){
        this.filename = filename
    }

    getData(){
        let data = fs.readFileSync(this.filename, 'utf-8')
        return data
    }

    save(obj) {
        if (this.getData()){
            const data = this.getData()
            const parseData = JSON.parse(data)
            obj.id = parseData.length +1
            console.log(parseData)
            console.log(obj)
            parseData.push(obj)
            fs.promises.writeFile(this.filename, `${JSON.stringify(parseData)}`)
                .then(res=>console.log('Se ha agregado el producto'))
                .catch(err=>console.log(err)) 
        } else {
            obj.id = 1
            fs.promises.writeFile(this.filename, `[${JSON.stringify(obj)}]`)
            .then(res=>console.log('Se ha agregado el producto'))
            .catch(err=>console.log(err))
        }

    }

    async getById(id) {
        try {
            const data = this.getData()
            const parseData = JSON.parse(data)
            const obj = parseData.find((e) => e.id === id)
    
                if (obj){
                    console.log(`El producto para el id ${id} es: ${obj.title}`)
                } else {
                    console.log(`No existe producto con el id: ${id}`);
                    return null;
                }
    
        } catch (err) {
            console.log(`No econtramos el producto con el id ${id} -- Error ${err}`);
        }
    }

    getAll(){
        const arr = this.getData()
        console.log(arr)
    }

    async deleteById(id){
        try {
        const data = this.getData();
        const parseData = JSON.parse(data)
        const obj = parseData.find((e) => e.id === id)

            if (obj){
                const index = parseData.indexOf(obj)
                parseData.splice(index,1)
                await fs.promises.writeFile(this.filename, JSON.stringify(parseData))
            } else {
                console.log(`No existe producto con el id: ${id}`);
                return null;
            }

        } catch (err) {
        console.log(`No pudimos eliminar el producto con el id ${id} -- Error ${err}`);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.filename, "[]", (err) => {
                err
                  ? console.log(err)
                  : console.log(`Se creo el archivo ${this.filename}`);
                });
    
        } catch (error) {
                console.log( `No hemos podido borrar la informacion del archivo -- Error: ${error}`)
        }
    }

}

module.exports = { Contenedor }