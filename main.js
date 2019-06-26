//alert("ESTAMOS EMPEZANDO A USAR GIT")
//console.log("AHORA VAMOS A SUBIR NUESTROS ARCHIVOS A GIT HUB")
// var persona= {
// 	nombre: "Axel",
// 	apellido:"Franco",
// 	cedula:"1234567895",
// 	 edad: 18
// }
// if(persona.edad >= 18)
// {
// alert(persona.nombre+" "+"es mayor edad y tiene "+ persona.edad )
// }
var persona=[{
	nombre:"milena",
	apellido:"torrez",
	edad: 10,
	cedula: 466846187,
	peliculafavorita:"la monja",
	genero:"infantil"
},
{
	nombre:"juan",
	apellido:"rodriguez",
	edad: 35,
	cedula: 39729416,
	peliculafavorita:"no se aceptan devoluciones",
	genero:"comedia"
},
{
	nombre:"maria",
	apellido:"hernandez",
	edad: 46,
	cedula: 8459635,
	peliculafavorita:"robo en las alturas",
	genero:"accion"
}
]
 //console.log (persona)
for(var i = 0; i < persona.length; i++){
alert (persona [i].nombre+" "+persona[i].apellido+ " "+persona[i].cedula+ " "+persona[i].edad+" ")

if(persona[i].edad < 56 )
{
switch(persona[i].genero) {
  case "infantil":
  alert("sus tres peliculas recomendadas son:"+"coco"+"toy story"+"uff")
    break;
  case "comedia":
  alert( "sus tres peliculas recomendadas son"+"chespirito"+"el pajaro loco"+"el chavo")
    break;
    case "romance":
    alert("sus tres peliculas recomemdadas son"+"tres metros sobre el cielo"+"tengo ganas de ti"+"siempre a tu lado")
    break;
  default:
   alert ("lo lamentamos por el momento no sabemos su genero"+ persona[i].genero+" ");
   }
}
else if (persona[i].edad <30) {
	switch(persona[i].genero) {
  case "drama":
  alert("sus tres peliculas recomendadas son"+
    "el conjuro"+
    "anabel"+
    "la llorona")
    break;
  case "comedia":
  alert( "sus tres peliculas recomendadas son"+
    "chespirito"+
    "el paseo"+
    "pequeño pero peligroso")
    break;
    case "accion":
    alert("sus tres peliculas recomemdadas son"+
    "duro de matar"+
    "busqueda incanzable"+
    "anaconda")
    break;
  default:
   alert ("lo lamentamos por el momento no sabemos su genero"+ persona[i].genero+" ");
   }
}else if (persona[i].edad <18){
	switch(persona[i].genero) {
  case "drama":
  alert("sus tres peliculas recomendadas son"+
    "el conjuro"+
    "anabel"+
    "la llorona")
    break;
  case "comedia":
  alert( "sus tres peliculas recomendadas son"+
    "agente ñero ñero 7"+
    "el paseo"+
    "pequeño pero peligroso")
    break;
    case "accion":
    alert("sus tres peliculas recomemdadas son"+
    "duro de matar"+
    "busqueda incanzable"+
    "anaconda")
    break;
  default:
   alert ("lo lamentamos por el momento no sabemos su genero"+ persona[i].genero+" ");
}
}else {
	switch(persona[i].genero) {
  case "infantil":
  alert("sus tres peliculas recomendadas son"+
    "buscando a dori"+
    "uff"+
    "buscando a nemo")
    break;
   }
}
}

/*var persona=[
{
	nombre: "marlon",
	edad: 56,
	genero:"terror"
},
{
	nombre: "maria",
	edad: 15,
	genero:"comedia"
}
]
for(var i = 0; i < persona.length; i++){
alert (persona[i].nombre+" "+persona[i].edad)

if(persona[i].edad < 56)
{

switch(persona[i].genero) {
  case "comedia":
  alert("sus tres peliculas recomendadas son:"+"coco"+"toy story"+"uff")
    break;
  case "terror":
  alert( "sus tres peliculas recomendadas son"+"chespirito"+"el pajaro loco"+"el chavo")
    break;
  default:
   alert ("lo lamentamos por el momento no sabemos su genero"+ persona[i].genero+" ");
   }
}
}*/





