

class Movie 
{
     title;
     releaseYear;
     nacionality; 
     genre; 
     actors;
     director; 
     writer; 
     language; 
     plataforma; 
     isMCU;
     mainCharacterName; 
     producer; 
     distributor; 
     genre; 
     photo; 

    constructor(til, rel, nac,gen, ac,pho)
    {
        this.title = til;
        this.releaseYear = rel;
        this.nacionality = nac;
        this.genre = gen;
        this.actors = ac;
        this.photo = pho
    }

    mostrarAtribu()
    {
        
        return `Titulo:  ${this.title},
                Año:  ${this.releaseYear},
                Nacionalidad:  ${this.nacionality},
                Genero:  ${this.genre},
                Actores:  ${this.actors}
                photo  -  ${this.photo}
               `
    }

}
let peliculas=[
{
    title:" el cine dramatico ",
    releaseYear: "Año realizado : 2008" ,
    nacionality:"Nacionalidad: EE.UU ",
    genre:"Genero: Accion ",
    actors:["Actores: Paco Loaz - Sebastian atlas - Martin Casas"],
    photo:"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/los-20-posters-de-peliculas-mas-creativos/cisne-negro/7055592-1-esl-ES/CISNE-NEGRO.jpg",
},
{
    title:" La Cornuda",
    releaseYear:"Año realizado : 2018",
    nacionality:"Nacionalidad: EE.UU",
    genre:"Genero: drama ",
    actors:["Actores: Maria Patina - Been Esteban - Carlos Batuta"],
    photo:"https://i.pinimg.com/1200x/d9/bf/64/d9bf64f30b9a3a1a7d3a8fb729008b50.jpg",
},
{
    title:" deadPool ", 
    releaseYear:"Año realizado : 2020" ,
    nacionality:"Nacionalidad: EE.UU ",
    genre:"Genero: Accion ",
    actors:["Actores: Brad Peterson - Macaulay Culzin - Kiko Revivemoros"],
    photo:"https://1.bp.blogspot.com/-BRYr6EQ_wus/Vr1V5r9JJrI/AAAAAAAAEos/MI7lbaBMXOY/s1600/deadpool-poster1.jpg",
},
{
    title:" coronavenon ", 
    releaseYear:"Año realizado : 2015" ,
    nacionality:"Nacionalidad: EE.UU ",
    genre:"Genero: Accion ",
    actors:["Actores: Paco zebra - Hugo Nosilva - Paolo Chiapella"],
    photo:"https://hips.hearstapps.com/hmg-prod/images/venom-2-poster-tom-hardy-fotogramas-1632168955.jpg?resize=980:*",
}
]




function cargarPelis (){
    let movi = document.getElementById("flex")

    movi.innerHTML="";

    for(let pelis of peliculas){

        movi.innerHTML +=`
         <img src="${pelis.photo}" class="card-img-top" alt="...">
       
          <h1>${pelis.title}</h1>
          <p >${pelis.releaseYear}</p>
          <p>${pelis.nacionality}</p>
          <p>${pelis.genre}</p>
          <p>${pelis.actors}</p>
        
        `


    }
}cargarPelis()




let infoPeli = [];

let clicarBoton = document.getElementById("btn7")

clicarBoton.addEventListener("click",() =>{
    
   

    let titulo = document.getElementById("titulo").value
    let año = document.getElementById("año").value
    let nacionalidad = document.getElementById("nacionalidad").value
    let genero = document.getElementById("genero").value
    let actores =document.getElementById("actores").value
    let url = document.getElementById("url").value

    let peliNueva = {
        titu:titulo,
        a: año,
        nac: nacionalidad,
        ge: genero,
        ac:actores,
        ur:url
    }
    
    infoPeli.push(peliNueva)

    let newP = "";

    for(let p of infoPeli){
       
        newP+= `
        <img id="foto" src="${p.ur}" class="card-img-top" alt="...">
                <h1>${p.titu}</h1>
                <p >${p.a}</p>
                <p>${p.nac}</p>
                <p>${p.ge}</p>
                <p>${p.ac}</p>
        `
        
    };
   document.getElementById("clicar7").innerHTML = newP

})