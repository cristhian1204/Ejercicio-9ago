let animales = ["rinoceronte", "armadillo", "oso", "gallina", "leon", "cabra", "orangutan", "Caiman", "iguana", "perro", "Elefante", "anguila", "Bagre", "Tiburon", "Caballo", "gato", "Camello", "Huron", "Tucan", "Vaca"];
function showanimals() {
    let container = document.querySelector("#Espacio");
    for (let i=0; i<animales.length; i++){
        let animal = animales[i];
        let li = document.createElement("li");
        li.textContent = animal;
        container.appendChild(li);
    }
}

showanimals();

let animals2 = [
    {
        nombre:"rinoceronte",
        imagen:"https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/Rinoceronte.png",
        peso_promedioKG: 800,
        numero_patas:4,
        color:"gris",
        alimentacion:"herviboro",
        habitad:"selva"
    },
    {
        nombre:"armadillo",
        imagen:"https://cdn.pixabay.com/photo/2021/10/12/05/49/armadillo-6702432_960_720.png",
        peso_promedioKG:35,
        numero_patas:4,
        color:"marron",
        alimentacion:"insectivoro",
        habitad:"templados y calidos"
    },
    {
        nombre:"oso",
        imagen:"https://static.wikia.nocookie.net/escandaloso/images/6/69/Pardo.png/revision/latest?cb=20200706181010&path-prefix=es",
        peso_promedioKG: 675,
        numero_patas:4,
        color:"marron",
        alimentacion:"carnivoro",
        habitad:"bosque"
    },
    {
        nombre:"Gallina",
        imagen:"https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/01c06-la-gallina-pintadita-personajes-png.png?resize=900%2C900&ssl=1",
        peso_promedioKG:4,
        numero_patas:2,
        color:"amarillo o blanco",
        alimentacion:"herviboro",
        habitad:"campo"
    },
    {
        nombre:"leon",
        imagen:"https://static.wikia.nocookie.net/doblaje/images/f/f2/Alexleon.png/revision/latest?cb=20141225032252&path-prefix=es",
        peso_promedioKG:190,
        numero_patas:4,
        color:"anaranjado con melena cafe",
        alimentacion:"carnivoro",
        habitad:"selva"
    },
    {
        nombre:"cabra",
        imagen:"https://i.pinimg.com/originals/cf/be/47/cfbe476ee031e77f0db49229211fe274.png",
        peso_promedioKG:140,
        numero_patas:4,
        color:"blanca",
        alimentacion:"hervivoro",
        habitad:"campo"
    },
    {
        nombre:"orangutan",
        imagen:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58552/orangutan-emoji-clipart-xl.png",
        peso_promedioKG:50,
        numero_patas:4,
        color:"anaranjado casi marron",
        alimentacion:"herviboro",
        habitad:"selva"
    },
    {
        nombre:"Caiman",
        imagen:"https://c0.klipartz.com/pngpicture/214/366/gratis-png-oso-cocodrilo-dibujo-cocodrilo-cocodrilo-thumbnail.png",
        peso_promedioKG:62,
        numero_patas:4,
        color:"verde",
        alimentacion:"carnivoro",
        habitad:"lagunas"
    },
    {
        nombre:"iguana",
        imagen:"https://i.pinimg.com/originals/7b/15/89/7b1589ad3f678876e9f3a8ead41c363e.png",
        peso_promedioKG:4,
        numero_patas:4,
        color:"verde y amarillo",
        alimentacion:"herviboro",
        habitad:"selvas tropicales"
    },
    {
        nombre:"perro",
        imagen:"https://www.seekpng.com/png/full/153-1534662_featuring-quality-png-images-of-gidget-chloe-max.png",
        peso_promedioKG:27,
        numero_patas:4,
        color:"multicolor",
        alimentacion:"carnivoro",
        habitad:"ciudad"
    },
];
function animalitos() {
    let container = document.querySelector("#animalitos");
    let textfinder = document.querySelector("#buscar").value;
    let counter ="";
    animals2.forEach(animal =>{
        if (animal.nombre.toLowerCase().startsWith(textfinder.toLowerCase()) && textfinder!==""){
            counter=counter+`<img src="${animal.imagen}" width="400" /> <h3>${animal.nombre}</h3> <h1>${animal.peso_promedioKG}</h1>  <h2>${animal.numero_patas}</h2>  <h4>${animal.color}</h4>  <h5>${animal.alimentacion}</h5> <p>${animal.habitad}</p> `
        }  
        container.innerHTML = counter;     
    })
    
}