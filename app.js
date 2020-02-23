//This is an example of promises
/*
The sintaxis is:
ES6:
someName=new Promise((resolve,reject)=>{
    An or many action(s) to be executed, also called executor
})
.someName.then((argsFrom actions executed)=>{
    More actions
})
.

*/
//First example
exampleOfPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Funciona")
    },5000)
})

exampleOfPromise.then((mensaje)=>{
    console.log(mensaje)
})

//Second example
secondPromise=new Promise((resolver,rechazar)=>{
    let estado=false

    if(estado){
        resolver("todo bien, todo correcto")
    }else{
        rechazar("Triste....")
    }
})

secondPromise.then((mensajito)=>{
    console.log(mensajito)
})
.catch((mensaje)=>{
    console.log(mensaje)
})