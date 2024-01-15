const productos = [
    {id: "1", nombre: "Pijama Feliz Navidad", precio: 500, img:"../img/FelizNavidad.webp", idCat: "adultos"},
    {id: "2", nombre: "Pijama Merry Christmas", precio: 800, img: "../img/MerryChristmas.webp", idCat: "adultos"},
    {id: "3", nombre: "Pijama Natale", precio: 900, img:"../img/Natale.webp", idCat: "adultos"},
    {id: "4", nombre: "Pijama Grinch", precio: 600, img: "../img/Grinch.webp", idCat: "ninos"},
    {id: "5", nombre: "Pijama Fin Navidad", precio: 1000, img: "../img/FinNavidad.webp", idCat: "adultos"},
    {id: "6", nombre: "Pijama Pikachu", precio: 1200, img: "../img/Picachu.webp", idCat: "ninos"},
    {id: "7", nombre: "Pijama Reno Feliz", precio: 1100, img: "../img/Reno.webp", idCat: "ninos"},
    {id: "8", nombre: "Pijama Pino Celeste", precio: 800, img: "../img/PinoCeleste.webp", idCat: "adultos"},

]

export const getProductos = () =>{
    return new Promise (resolve => {
        setTimeout (()=> {
            resolve (productos);
        }, 2000)
    })
}


export const getUnProducto =(id)=>{
    return new Promise (resolve =>{
        setTimeout (()=>{
            const producto =productos.find(item =>item.id === id);
            resolve (producto);
        }, 100)
    })
}

export const getProductosPorCategoria =(idCategoria)=>{
    return new Promise (resolve=> {
        setTimeout (()=>{
            const productosCategoria= productos.filter (item=>item.idCat=== idCategoria);
            resolve (productosCategoria);
        }, 100)
    })
}