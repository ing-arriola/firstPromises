exampleOfPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Funciona")
    },5000)
})

exampleOfPromise.then((mensaje)=>{
    console.log(mensaje)
})