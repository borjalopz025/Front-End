 class Profesional
{
    name ;
    edad ;
    peso ;
    altura ;
    estaRetirado ;
    nacionalidad ;
    numeroDeOcars ;
    profesion ;
    photo;


    constructor(n, ed, pe, al, re, nacio, num, pro, pho)
    {
        this.name = n;
        this.edad = ed;
        this.peso = pe;
        this.altura = al;
        this.estaRetirado = re;
        this.nacionalidad = nacio;
        this.numeroDeOcars = num;
        this.profesion = pro;
        this.photo = pho
    }

    valorAtribu()
    {
        return `nombre  -  ${this.name},
                edad   -  ${this.edad},
                peso  -  ${this.peso},
                altura  -  ${this.altura},
                estaRetirado  -  ${this.estaRetirado},
                nacionalidad  -  ${this.nacionalidad},
                numeroDeOscars  -  ${this.numeroDeOcars},
                profesion  -  ${this.profesion}
                photo  -  ${this.photo}`
                
    }
   
    
}
let actores=[
 {name:"carlos",
   edad:"Edad: 34",
   peso: "Peso: 72",
   altura: "Altura: 1.89" ,
   estaRetirado:"Esta retirado:  false",
   nacionalidad:"Nacionalidad:  española ",
   numeroDeOcars:"Numero de oscars: 1",
   profesion:"Profesion: actor ",
   photo:"https://www.informador.mx/__export/1654282927097/sites/elinformador/img/2022/06/03/rs52273_3300636-age-2019-12-05-02-48-168-lpr_crop1654282926409.jpg_423682103.jpg"
},
 {
  name:"alfredo",
  edad:"Edad: 30",
  peso: "Peso: 80",
  altura: "Altura:1.80",
  estaRetirado:"Esta retirado: false",
  nacionalidad:"Nacionalidad: española",
  numeroDeOcars:"Numero de oscars: 0",
  profesion:" Profesion: actor",
  photo:"https://www.diariodesevilla.es/2020/08/14/cine/Dwayne-Johnson-Roca-liderato-actores_1492060919_124715225_667x375.jpg"
},
 {
    name:"marta",
    edad:"Edad: 44",
    peso:"Peso: 62",
    altura:"Altura:1.71",
    estaRetirado:"Esta retirado: true",
    nacionalidad:"Nacionalidad: española",
    numeroDeOcars:"Numero de oscars: 1",
    profesion:"Profesion: actriz",
    photo:"https://media1.popsugar-assets.com/files/thumbor/pTmzoMACFQIa7sZ1NVCbeI5lkjQ/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/917/n/1922398/a23fb7f85b4d07be73b038.17241474_/i/Natalie-Portman.jpg"
},
{
    name:"Aquiles",
    edad:"Edad: 31",
    peso:"Peso: 75",
    altura:"Altura:1.80",
    estaRetirado:"Esta retirado: false",
    nacionalidad:"Nacionalidad: torremolinos",
    numeroDeOcars:"Numero de oscars: 1",
    profesion:"Profesion: actor",
    photo:"asset/5.jpg"
},
 {
    name:"barbie-Esteriotipo",
    edad:"Edad: 24",
    peso:"Peso: 60",
    altura:"Altura:1.68",
    estaRetirado:"Esta retirado: false",
    nacionalidad:"Nacionalidad: barbielandia",
    numeroDeOcars:"Numero de oscars: 0",
    profesion:"Profesion: actriz",
    photo:"asset/3.jpg"
}, 
{
    name:"trece",
    edad:"Edad: 39",
    peso:"Peso: 56",
    altura:"Altura:1.70",
    estaRetirado:"Esta retirado: false",
    nacionalidad:"Nacionalidad: Nueva york",
    numeroDeOcars:"Numero de oscars: 0", 
    profesion:"Profesion: actriz",
    photo:"asset/4.jpg"
}
]



function cargarPagina(){
    let actor = document.querySelector(".container")

    actor.innerHTML = "";
   
    for(let act of actores){   
        
        actor.innerHTML +=`
      
        <img src="${act.photo}" class="card-img-top" alt="...">
       
          <h1>${act.name}</h1>
          <p >${act.peso}</p>
          <p>${act.altura}</p>
          <p>${act.edad}</p>
          <p>${act.estaRetirado}</p>
          <p>${act.nacionalidad}</p>
          <p>${act.profesion}</p>
          
    
     
        `

    }
}cargarPagina()








