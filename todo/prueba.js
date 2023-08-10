
let arrObj=[]
// alert("hola")

function getName()
{
   let nombre =document.getElementById("name").value
   let origen =document.getElementById("origen").value
   let destino=document.getElementById("destino").value
   let numero_de_personas=document.getElementById("numero_de_perosnas").value
   let fecha_de_salida=document.getElementById("fecha_inicio").value
   let fecha_llegada=document.getElementById("fecha_de_llegada").value



   let obj ={

    name : nombre,
    origin: origen,
    destino: destino,
    num: numero_de_personas,
    fec: fecha_de_salida,
    fecha: fecha_llegada
   }

   console.log(obj)
   arrObj.push(obj)
   console.log(arrObj);
}



function filtrar()
{
   
 let  filtrado=arrObj.filter(value => value.destino.toLowerCase() == "canarias" || value.destino.toLowerCase() == "galicia" || value.destino.toLowerCase() == "mallorca")
  console.log(filtrado);
  let filt="";
  for (let fi of filtrado){
   filt+= `<p>nombre del pasajero:${fi.name}</p>
   <p>origen:${fi.origin}</p>
   <p>destino:${fi.destino}</p>
   <p>numero de personas:${fi.num}</p>
   <p>fecha de salida:${fi.fec}</p>
   <p>fecha de llegada:${fi.fecha}</p>
   `
  }
 document.getElementById("filtrar").innerHTML = filt
}







