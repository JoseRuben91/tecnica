

async function fetchNasa() {
  try {
  
    const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3200&api_key=zA6lqZWflc9FE2YwBrE0AxaMaRu7OFzzhlktodkg&page=1');
    const datosRover={}

    
     


     console.log(`GET: Here's the list of todos`, response.data);
    
     return response.data.photos;
     return datosRover.data.photos.rover.sol;
     
    
      }  catch (errors) {
         console.error(errors);
         }
            };








              var row = document.querySelector('.row');

async function mostrarFoto(){
  const arregloFotos = await fetchNasa();
  console.log('RUBEN RUBEN', arregloFotos);
  
  for (var i = 0; i < arregloFotos.length; i++){
////////////////////////////////////////////////////////////
    var col = document.createElement('div');
    col. setAttribute('class', "col-md-4 mt-5");
    row.appendChild(col);
////////////////////////////////////////////////////////////
    var card = document.createElement('div');
    card.setAttribute('class', "card");
    col.appendChild(card);
////////////////////////////////////////////////////////////
    var img = document.createElement('img');
    img.setAttribute("class","card-img-top")
    img.setAttribute("src", arregloFotos[i].img_src);
    card.appendChild(img);
////////////////////////////////////////////////////////////
    var cuerpo = document.createElement('div');
    cuerpo.setAttribute('class', "card-body");
    card.appendChild(cuerpo);  
////////////////////////////////////////////////////////////
  var numero = document.createElement('p');
  numero.setAttribute('class', "card-text");
  numero.innerHTML = 'Fotografía: ' +arregloFotos[i].id;
  cuerpo.appendChild(numero);
////////////////////////////////////////////////////////////
var rov = document.createElement('p');
rov.setAttribute('class', "card-text");
rov.innerHTML = 'ROVER: ' + arregloFotos[i].rover.name;
cuerpo.appendChild(rov);
////////////////////////////////////////////////////////////
  var camra = document.createElement('p');
  camra.setAttribute('class', "card-text");
  camra.innerHTML = 'Camara: ' + arregloFotos[i].camera.name;
cuerpo.appendChild(camra);
////////////////////////////////////////////////////////////

}




}





mostrarFoto();


