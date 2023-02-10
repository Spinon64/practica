function greet(){
    console.log("Hello");
}
let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

let logGreeting1 = (miParametro1) => miParametro1();
logGreeting1(function (){
    console.log("Hello from a function created on the fly")

})

let logGreeting2 = (miNombre, miColor) => {
    console.log("Hola" + miNombre + "buenos dias Tu color favorito es el " + miColor);
}
logGreeting2("Carlos","Azul");