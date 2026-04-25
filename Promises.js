//creating promise
let saikumar = new Promise((pass,fail)=>
{
    pass("Saikumar passed the exam");
}
)

//executing promise
saikumar.then((posres)=>{
    console.log("It is true");
},
(Negres)=>{
    console.log("Saikumar didn't pass");
})